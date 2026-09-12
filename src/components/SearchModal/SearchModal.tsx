import type { Movie } from "@/types/Movie";

import { ModalItem } from "../ModalItem/ModalItem";

import "./SearchModal.scss";

interface SearchModalProps {
  list: Movie[];
  isLoading: boolean;
}

export function SearchModal({ list, isLoading }: SearchModalProps) {
  if (isLoading) {
    return (
      <div className="search-modal">
        <p className="search-modal__message">Загрузка...</p>
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="search-modal">
        <p className="search-modal__message">Фильмы не найдены</p>
      </div>
    );
  }

  return (
    <div className="search-modal">
      {list.map((movie) => (
        <ModalItem
          key={movie.id}
          title={movie.title}
          posterUrl={movie.posterUrl ?? "/images/movie-placeholder.png"}
          movieid={movie.id}
          rate={movie.tmdbRating}
          year={movie.releaseYear}
          genre={movie.genres?.[0] ?? ""}
          duration={movie.runtime}
        />
      ))}
    </div>
  );
}
