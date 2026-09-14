"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { searchMovies } from "@/api/movies";
import type { Movie } from "@/types/Movie";

import { Input } from "../ui/Input/Input";
import { Icon } from "../ui/IconProps/IconProps";
import { SearchModal } from "../SearchModal/SearchModal";

import "./Header.scss";

interface HeaderProps {
  userLastName?: string;
}

export function Header({ userLastName }: HeaderProps) {
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const searchQuery = query.trim();
  const hasSearchQuery = searchQuery.length >= 2;

  useEffect(() => {
    if (!hasSearchQuery) {
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);

      try {
        const result = await searchMovies(searchQuery);

        setMovies(result);
      } catch (error) {
        console.error("Failed to search movies:", error);

        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery, hasSearchQuery]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsSearchActive(false);
    }
  };

  const handleOpenMobileSearch = () => {
    setIsMobileSearchOpen(true);
  };

  const handleCloseMobileSearch = () => {
    setIsMobileSearchOpen(false);
    setQuery("");
    setMovies([]);
  };

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
                  pathname.startsWith("/genres") ? "header__link--active" : ""
                }`}
                href="/genres"
              >
                Жанры
              </Link>
            </nav>

            {/* Desktop search */}
            <div
              className="header__search"
              onFocus={() => setIsSearchActive(true)}
              onBlur={handleSearchBlur}
            >
              <Input
                icon={<Icon name="icon-search" />}
                className="header__input"
                name="inputSearch"
                placeholder="Поиск"
                value={query}
                onChange={handleSearchChange}
              />

              {isSearchActive && hasSearchQuery && (
                <SearchModal list={movies} isLoading={isLoading} />
              )}
            </div>
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
            <button className="header__account" type="button">
              Войти
            </button>
          )}

          {/* Mobile navigation */}
          <ul className="header__list">
            <li className="header__item">
              <Link
                className={`header__anchor ${
                  pathname.startsWith("/genres") ? "header__link--active" : ""
                }`}
                href="/genres"
              >
                <Icon name="icon-genres" />
              </Link>
            </li>

            <li className="header__item">
              <button
                type="button"
                className="header__anchor header__anchor--button"
                onClick={handleOpenMobileSearch}
                aria-label="Открыть поиск"
              >
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

          {/* Mobile search */}
          {isMobileSearchOpen && (
            <div className="header__overlay" onClick={handleCloseMobileSearch}>
              <div
                className="header__shell"
                onClick={(event) => event.stopPropagation()}
              >
                <Input
                  icon={<Icon name="icon-search" />}
                  name="mobileSearch"
                  placeholder="Поиск"
                  value={query}
                  onChange={handleSearchChange}
                  autoFocus
                />

                {hasSearchQuery && (
                  <SearchModal list={movies} isLoading={isLoading} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
