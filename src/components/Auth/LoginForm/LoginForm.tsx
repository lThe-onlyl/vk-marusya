"use client";

import { useForm } from "react-hook-form";
import { loginUser, getProfile } from "@/api/auth";
import { useAuth } from "@/context/AuthContext";
import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Input/Input";
import { Icon } from "../../ui/IconProps/IconProps";

interface LoginFormProps {
  onRegister: () => void;
  onSuccess: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm({ onRegister, onSuccess }: LoginFormProps) {
  const { setUser } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginUser(data);
    } catch (error) {
      console.error("Login failed:", error);

      setError("root", {
        message: "Неверный email или пароль",
      });

      return;
    }

    try {
      const profile = await getProfile();

      setUser(profile);
      onSuccess();
    } catch (error) {
      console.error("Profile failed:", error);

      setError("root", {
        message: "Не удалось получить данные пользователя",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-modal__form">
      {errors.root && (
        <p className="auth-modal__error">{errors.root.message}</p>
      )}

      <Input
        type="email"
        placeholder="Электронная почта"
        {...register("email", { required: "Введите электронную почту" })}
        error={Boolean(errors.email)}
        className="auth-modal__input"
        icon={<Icon name="icon-mail" />}
      />

      <Input
        type="password"
        placeholder="Пароль"
        {...register("password", { required: "Введите пароль" })}
        error={Boolean(errors.password)}
        className="auth-modal__input"
        icon={<Icon name="icon-key" />}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="primary"
        className="auth-modal__btn"
      >
        {isSubmitting ? "Вход..." : "Войти"}
      </Button>

      <Button
        type="button"
        onClick={onRegister}
        variant="secondary"
        className="auth-modal__btn auth-modal__btn--white"
      >
        Регистрация
      </Button>
    </form>
  );
}
