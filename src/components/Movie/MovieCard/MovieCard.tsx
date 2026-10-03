"use client";

import Image from "next/image";
import { Icon } from "../../ui/IconProps/IconProps";
import "./MovieCard.scss";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

interface MovieCardProps {
  title: string;
  posterUrl: string;
  rank?: number;
  movieid: number;
  removable?: boolean;
  onRemove?: (movieId: number) => void;
}

export function MovieCard({
  title,
  posterUrl,
  rank,
  removable = false,
  movieid,
  onRemove,
}: MovieCardProps) {
  const { toggleFavorite, removeFromFavorites } = useFavorites();

  const handleFavoriteClick = async () => {
    if (removable) {
      await removeFromFavorites(movieid);
      onRemove?.(movieid);
      return;
    }

    await toggleFavorite(movieid);
  };

  return (
    <div className="movie-card">
      <Link href={`/movie/${movieid}`} className="movie-card__link">
        {rank !== undefined && <span className="movie-card__rank">{rank}</span>}

        <Image
          src={posterUrl || "/images/poster.png"}
          alt={posterUrl ? `Постер фильма «${title}»` : "Постер отсутствует"}
          width={224}
          height={336}
          className="movie-card__img"
        />
      </Link>

      {removable && (
        <button
          className="movie-card__remove"
          type="button"
          aria-label={`Удалить фильм «${title}» из избранного`}
          onClick={handleFavoriteClick}
        >
          <Icon name="icon-close" />
        </button>
      )}
    </div>
  );
}
