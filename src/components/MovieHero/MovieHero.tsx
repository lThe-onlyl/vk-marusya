import Image from "next/image";
import { Button } from "../ui/Button/Button";
import { Icon } from "../ui/IconProps/IconProps";
import "./MovieHero.scss";
import { Rating } from "../ui/Rating/Rating";
import { formatRuntime } from "@/utils/formatRuntime";

interface MovieProps {
  rate: number;
  year: number;
  genre: string;
  duration: number;
  title: string;
  description: string;
  posterUrl: string;
}

export function MovieCard({
  rate,
  year,
  genre,
  duration,
  title,
  description,
  posterUrl,
}: MovieProps) {
  return (
    <section className="movie-card">
      <div className="container">
        <div className="movie-card__wrapper">
          <div className="movie-card__content">
            <div className="movie-card__box">
              <Rating value={rate} />

              <span className="movie-card__span">{year}</span>

              <span className="movie-card__span">{genre}</span>

              <span className="movie-card__span">
                {formatRuntime(duration)}
              </span>
            </div>

            <h1 className="movie-card__title">{title}</h1>

            <div className="movie-card__descr">{description}</div>

            <div className="movie-card__box">
              <Button
                variant="primary"
                className="movie-card__button movie-card__button--trailer"
              >
                Трейлер
              </Button>

              <Button
                variant="secondary"
                className="movie-card__button movie-card__button--about"
              >
                О фильме
              </Button>

              <Button variant="secondary" className="movie-card__button">
                <Icon name="icon-heart" className="movie-card__icon" />
              </Button>

              <Button variant="secondary" className="movie-card__button">
                <Icon name="icon-reboot" className="movie-card__icon" />
              </Button>
            </div>
          </div>

          <Image
            src={posterUrl}
            alt={`Постер фильма «${title}»`}
            className="movie-card__img"
            width={680}
            height={552}
          />
        </div>
      </div>
    </section>
  );
}
