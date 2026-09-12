import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button/Button";
import { Icon } from "../ui/IconProps/IconProps";
import "./MovieHero.scss";
import { MovieMeta } from "../MovieMeta/MovieMeta";

interface MovieProps {
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
}: MovieProps) {
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

              <Button variant="secondary" className="movie-hero__button">
                <Icon name="icon-heart" className="movie-hero__icon" />
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
