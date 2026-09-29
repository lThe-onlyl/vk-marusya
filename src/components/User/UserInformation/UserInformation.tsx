import { Icon } from "@/components/ui/IconProps/IconProps";
import { useState } from "react";
import { UserSettings } from "../UserSettings/UserSettings";
import { Movie } from "@/types/Movie";
import "./UserInformation.scss";
import { UserFavourites } from "../UserFavourites/UserFavourites";

type InfoMode = "userSettings" | "userFavorites";

interface UserInfoProps {
  name: string;
  email: string;
  onLogout: () => void;
  list: Movie[];
}

export function UserInformation({
  name,
  email,
  onLogout,
  list,
}: UserInfoProps) {
  const [mode, setMode] = useState<InfoMode>("userSettings");

  const renderContent = () => {
    switch (mode) {
      case "userSettings":
        return <UserSettings name={name} email={email} onLogout={onLogout} />;

      case "userFavorites":
        return <UserFavourites list={list} />;

      default:
        return null;
    }
  };

  return (
    <section className="user-information">
      <div className="container">
        <h1 className="user-information__title">Мой аккаунт</h1>

        <div className="user-information__box">
          <button
            className={`user-information__btn ${
              mode === "userFavorites" ? "user-information__btn--active" : ""
            }`}
            onClick={() => setMode("userFavorites")}
          >
            <Icon className="user-information__icon" name="icon-heart" />
            Избранные фильмы
          </button>

          <button
            className={`user-information__btn ${
              mode === "userSettings" ? "user-information__btn--active" : ""
            }`}
            onClick={() => setMode("userSettings")}
          >
            <Icon className="user-information__icon" name="icon-user" />
            Настройка аккаунта
          </button>
        </div>

        {renderContent()}
      </div>
    </section>
  );
}
