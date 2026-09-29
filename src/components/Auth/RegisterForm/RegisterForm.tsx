"use client";

import { useForm } from "react-hook-form";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import { registerUser } from "@/api/auth";
import { Icon } from "../../ui/IconProps/IconProps";

interface RegisterFormProps {
  onLogin: () => void;
  onSuccess: () => void;
}

interface RegisterFormData {
  email: string;
  name: string;
  surname: string;
  password: string;
  confirmPassword: string;
}

export function RegisterForm({ onLogin, onSuccess }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser({
        email: data.email,
        name: data.name,
        surname: data.surname,
        password: data.password,
      });
      onSuccess();
    } catch (error) {
      console.error("Registration failed:", error);
      setError("root", { message: "Не удалось создать аккаунт" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-modal__form">
      <Input
        type="email"
        placeholder="Электронная почта"
        {...register("email", {
          required: "Введите электронную почту",
        })}
        error={Boolean(errors.email)}
        className={"auth-modal__input"}
        icon={<Icon name="icon-mail" />}
      />

      <Input
        placeholder="Имя"
        {...register("name", {
          required: "Введите имя",
        })}
        error={Boolean(errors.name)}
        className={"auth-modal__input"}
        icon={<Icon name="icon-user" />}
      />

      <Input
        placeholder="Фамилия"
        {...register("surname", {
          required: "Введите фамилию",
        })}
        error={Boolean(errors.surname)}
        className={"auth-modal__input"}
        icon={<Icon name="icon-user" />}
      />

      <Input
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: "Введите пароль",
          minLength: {
            value: 8,
            message: "Минимум 8 символов",
          },
        })}
        error={Boolean(errors.password)}
        className={"auth-modal__input"}
        icon={<Icon name="icon-key" />}
      />

      <Input
        type="password"
        placeholder="Подтвердите пароль"
        {...register("confirmPassword", {
          required: "Повторите пароль",
          validate: (value) =>
            value === getValues("password") || "Пароли не совпадают",
        })}
        error={Boolean(errors.confirmPassword)}
        className={"auth-modal__input"}
        icon={<Icon name="icon-key" />}
      />

      <Button type="submit" disabled={isSubmitting} className="auth-modal__btn">
        {isSubmitting ? "Регистрация..." : "Создать аккаунт"}
      </Button>

      <Button
        type="button"
        onClick={onLogin}
        className="auth-modal__btn auth-modal__btn--white"
        variant="secondary"
      >
        У меня есть пароль
      </Button>
    </form>
  );
}
