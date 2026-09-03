import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieList.scss";
import { Movie } from "../../types/Movie";

interface MovieListProps {
  title?: string;
  list: Movie[];
  showRank?: boolean;
}

export function MovieList({ title, list, showRank = false }: MovieListProps) {
  return (
    <section className="movie-list">
      <div className="container">
        <h2 className="movie-list__title">{title}</h2>

        <div className="movie-list__list">
          {list.slice(0, 10).map((movie, index) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              rank={showRank ? index + 1 : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
