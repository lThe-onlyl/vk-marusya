"use client";

import "./Header.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Input } from "../ui/Input/Input";
import { Icon } from "../ui/IconProps/IconProps";

interface HeaderProps {
  userLastName?: string;
}

export function Header({ userLastName }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link className="header__logo-link" href="/">
            <Image
              src="/images/logo.png"
              alt="На главную"
              className="header__logo"
              width={143}
              height={32}
            />
          </Link>

          <div className="header__box">
            <nav className="header__nav">
              <Link
                className={`header__link ${
                  pathname === "/" ? "header__link--active" : ""
                }`}
                href="/"
              >
                Главная
              </Link>

              <Link
                className={`header__link ${
                  pathname === "/genres" ? "header__link--active" : ""
                }`}
                href="/genres"
              >
                Жанры
              </Link>
            </nav>

            <Input
              icon={<Icon name="icon-search" />}
              className="header__input"
              name="inputSearch"
            />
          </div>

          {userLastName ? (
            <Link
              className={`header__link ${
                pathname === "/account" ? "header__link--active" : ""
              }`}
              href="/account"
            >
              {userLastName}
            </Link>
          ) : (
            <button
              className="header__account"
              type="button"
              // onClick={openLoginModal}
            >
              Войти
            </button>
          )}

          <ul className="header__list">
            <li className="header__item">
              <Link
                className={`header__anchor ${
                  pathname === "/genres" ? "header__link--active" : ""
                }`}
                href="/genres"
              >
                <Icon name="icon-genres" />
              </Link>
            </li>
            <li className="header__item">
              <button type="button" className="header__anchor header__anchor--button">
                <Icon name="icon-search" />
              </button>
            </li>
            <li className="header__item">
              <Link
                className={`header__anchor ${
                  pathname === "/account" ? "header__link--active" : ""
                }`}
                href="/account"
              >
                <Icon name="icon-account" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
