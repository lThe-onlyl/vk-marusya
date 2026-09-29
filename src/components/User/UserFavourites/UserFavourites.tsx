import { MovieGrid } from "@/components/Movie/MovieGrid/MovieGrid";
import { Movie } from "@/types/Movie";
interface UserFavouritesProps {
  list: Movie[];
}

export function UserFavourites({ list }: UserFavouritesProps) {
  if (list.length === 0) {
    return (
      <p className="user-information__empty">
        У вас пока нет избранных фильмов
      </p>
    );
  }

  return <MovieGrid list={list} />;
}
