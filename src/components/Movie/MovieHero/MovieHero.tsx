"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/Button/Button";
import { Icon } from "../../ui/IconProps/IconProps";
import { MovieMeta } from "../MovieMeta/MovieMeta";
import { useAuth } from "@/context/AuthContext";
import "./MovieHero.scss";
import { useFavorites } from "@/context/FavoritesContext";

interface MovieHeroProps {
  rate: number;
  year: number;
  genre: string;
  duration: number;
  title: string;
  description: string;
  posterUrl: string;
  movieid: number;
  resetMovie?: () => void;
  showDetailsButton?: boolean;
}

export function MovieHero({
  rate,
  year,
  genre,
  duration,
  title,
  description,
  posterUrl,
  movieid,
  resetMovie,
  showDetailsButton,
}: MovieHeroProps) {
  const { isAuth, openAuthModal } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();

  const inFavorites = isFavorite(movieid);

  const handleFavoriteClick = () => {
    if (!isAuth) {
      openAuthModal();
      return;
    }
    toggleFavorite(movieid);
  };

  return (
    <section className="movie-hero">
      <div className="container">
        <div className="movie-hero__wrapper">
          <div className="movie-hero__content">
            <MovieMeta
              rate={rate}
              year={year}
              genre={genre}
              duration={duration}
            />

            <h1 className="movie-hero__title">{title}</h1>
            <div className="movie-hero__descr">{description}</div>

            <div className="movie-hero__box">
              <Button
                variant="primary"
                className="movie-hero__button movie-hero__button--trailer"
              >
                Трейлер
              </Button>

              {showDetailsButton && (
                <Link
                  href={`/movie/${movieid}`}
                  className="button button--secondary movie-hero__button movie-hero__button--about"
                >
                  О фильме
                </Link>
              )}

              <Button
                variant="secondary"
                className={`movie-hero__button ${
                  inFavorites ? "movie-hero__button--active" : ""
                }`}
                onClick={handleFavoriteClick}
                aria-label={
                  inFavorites ? "Удалить из избранного" : "Добавить в избранное"
                }
              >
                <Icon
                  name={inFavorites ? "icon-heart-filled" : "icon-heart"}
                  className={`movie-hero__icon ${inFavorites ? "movie-hero__icon--filled" : ""}`}
                />
              </Button>

              {resetMovie && (
                <Button
                  variant="secondary"
                  className="movie-hero__button"
                  onClick={resetMovie}
                >
                  <Icon name="icon-reboot" className="movie-hero__icon" />
                </Button>
              )}
            </div>
          </div>

          <Image
            src={posterUrl || "/images/movie-placeholder.jpg"}
            alt={`Постер фильма «${title}»`}
            width={680}
            height={552}
            className="movie-hero__img"
          />
        </div>
      </div>
    </section>
  );
}
