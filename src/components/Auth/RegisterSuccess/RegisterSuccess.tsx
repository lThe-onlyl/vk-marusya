import { Button } from "../../ui/Button/Button";
import "./RegisterSuccess.scss";

interface RegisterSuccessProps {
  onLogin: () => void;
}

export function RegisterSuccess({ onLogin }: RegisterSuccessProps) {
  return (
    <div className="register-success">
      <h2 className="register-success__title">Регистрация завершена</h2>

      <p className="register-success__text">
        Используйте вашу электронную почту для входа.
      </p>

      <Button
        type="button"
        className="register-success__button"
        onClick={onLogin}
      >
        Войти
      </Button>
    </div>
  );
}
