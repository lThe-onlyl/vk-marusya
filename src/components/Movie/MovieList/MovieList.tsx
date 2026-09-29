import { MovieGrid } from "../MovieGrid/MovieGrid";
import { Movie } from "@/types/Movie";
import "./MovieList.scss";

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

        <MovieGrid list={list} showRank={showRank} />

        {children}
      </div>
    </section>
  );
}
