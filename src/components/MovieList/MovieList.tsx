import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieList.scss";
import { Movie } from "@/types/Movie";

interface MovieListProps {
  title?: string;
  list: Movie[];
  showRank?: boolean;
  children?: React.ReactNode;
  headerAction?: React.ReactNode;
  variant?: "default" | "genre";
}

export function MovieList({
  title,
  list,
  showRank = false,
  children,
  headerAction,
  variant = "default",
}: MovieListProps) {
  return (
    <section className={`movie-list movie-list--${variant}`}>
      <div className="container">
        <div className="movie-list__shell">
          {headerAction}

          {title && <h2 className="movie-list__title">{title}</h2>}
        </div>

        <div className="movie-list__list">
          {list.map((movie, index) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              rank={showRank ? index + 1 : undefined}
              movieid={movie.id}
            />
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}
