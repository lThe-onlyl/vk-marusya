import Image from "next/image";
import { useState } from "react";
import { Icon } from "../../ui/IconProps/IconProps";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { RegisterSuccess } from "../RegisterSuccess/RegisterSuccess";
import "./AuthModal.scss";

type AuthMode = "login" | "register" | "success";

interface AuthModalProps {
  onClose: () => void;
}

export function AuthModal({ onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("login");
  console.log("mode:", mode);

  const renderContent = () => {
    switch (mode) {
      case "login":
        return (
          <LoginForm
            onRegister={() => setMode("register")}
            onSuccess={onClose}
          />
        );

      case "register":
        return (
          <RegisterForm
            onLogin={() => setMode("login")}
            onSuccess={() => setMode("success")}
          />
        );

      case "success":
        return <RegisterSuccess onLogin={() => setMode("login")} />;

      default:
        return null;
    }
  };

  return (
    <div className="auth-modal" onClick={onClose}>
      <div
        className="auth-modal__content"
        role="dialog"
        aria-modal="true"
        aria-label="Авторизация"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src="/images/logo-white.png"
          alt="Логотип vk-маруся"
          className="auth-modal__logo"
          width={157}
          height={35}
        />

        <button
          type="button"
          className="auth-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <Icon name="icon-close" />
        </button>

        {renderContent()}
      </div>
    </div>
  );
}
