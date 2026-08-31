import { InputHTMLAttributes, ReactNode } from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  error?: boolean;
}

export function Input({
  icon,
  error = false,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className={`input-wrapper ${error ? "input-wrapper--error" : ""}`}>
      {icon && <span className="input-wrapper__icon">{icon}</span>}

      <input className={`input-wrapper__input ${className}`} {...props} />
    </div>
  );
}
