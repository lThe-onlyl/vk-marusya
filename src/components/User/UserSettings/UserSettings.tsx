import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/IconProps/IconProps";
import "./UserSettings.scss";

interface UserProps {
  name: string;
  email: string;
  onLogout: () => void;
}

export function UserSettings({ name, email, onLogout }: UserProps) {
  const abbreviatedName = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="user-setting">
      <div className="user-setting__content">
        <div className="user-setting__box">
          <div className="user-setting__shell">
            <span className="user-setting__span">{abbreviatedName}</span>
          </div>

          <div className="user-setting__info">
            <p className="user-setting__descr">Имя Фамилия</p>
            <h3 className="user-setting__title">{name}</h3>
          </div>
        </div>

        <div className="user-setting__box">
          <div className="user-setting__shell">
            <Icon
              name="icon-mail"
              width={24}
              height={24}
              className="user-setting__span"
            />
          </div>

          <div className="user-setting__info">
            <p className="user-setting__descr">Электронная почта</p>
            <h3 className="user-setting__title">{email}</h3>
          </div>
        </div>
      </div>

      <Button className="user-setting__btn" onClick={onLogout}>
        Выйти из аккаунта
      </Button>
    </div>
  );
}
