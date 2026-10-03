import { MovieGrid } from "@/components/Movie/MovieGrid/MovieGrid";
import { Movie } from "@/types/Movie";
import "./UserFavourites.scss";

interface UserFavouritesProps {
  list: Movie[];
  onRemoveFavorite: (movieId: number) => void;
}

export function UserFavourites({
  list,
  onRemoveFavorite,
}: UserFavouritesProps) {
  if (list.length === 0) {
    return (
      <p className="user-information__empty">
        У вас пока нет избранных фильмов
      </p>
    );
  }

  return (
    <div className="movie-wrapper">
      <MovieGrid list={list} removable onRemoveFavorite={onRemoveFavorite} />
    </div>
  );
}
