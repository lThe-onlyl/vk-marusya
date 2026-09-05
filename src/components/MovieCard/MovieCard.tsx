import Image from "next/image";
import { Icon } from "../ui/IconProps/IconProps";
import "./MovieCard.scss";

interface MovieCardProps {
  title: string;
  posterUrl: string;
  rank?: number;
  removable?: boolean;
}

export function MovieCard({
  title,
  posterUrl,
  rank,
  removable = false,
}: MovieCardProps) {
  return (
    <article className="movie-card">
      {rank !== undefined && <span className="movie-card__rank">{rank}</span>}

      <Image
        src={posterUrl || "/images/poster.png"}
        alt={posterUrl ? `Постер фильма «${title}»` : "Постер отсутствует"}
        width={224}
        height={336}
        className="movie-card__img"
      />

      {removable && (
        <button
          className="movie-card__remove"
          type="button"
          aria-label={`Удалить фильм «${title}» из избранного`}
        >
          <Icon name="icon-close" />
        </button>
      )}
    </article>
  );
}
