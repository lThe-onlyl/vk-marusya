import { MovieCard } from "../MovieCard/MovieCard";
import { Movie } from "@/types/Movie";
import "./MovieGrid.scss";

interface MovieGridProps {
  list: Movie[];
  showRank?: boolean;
  removable?: boolean;
  onRemoveFavorite?: (movieId: number) => void;
}

export function MovieGrid({
  list,
  showRank = false,
  removable = false,
  onRemoveFavorite,
}: MovieGridProps) {
  return (
    <div className="movie-grid">
      {list.map((movie, index) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterUrl={movie.posterUrl}
          rank={showRank ? index + 1 : undefined}
          movieid={movie.id}
          removable={removable}
          onRemove={onRemoveFavorite}
        />
      ))}
    </div>
  );
}
