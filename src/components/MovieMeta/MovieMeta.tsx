import { formatRuntime } from "@/utils/formatRuntime";
import { Rating } from "../ui/Rating/Rating";
import "./MovieMeta.scss";

interface MovieMetaProps {
  rate: number | null;
  year: number | null;
  genre: string;
  duration: number | null;
  size?: "default" | "small";
}

export function MovieMeta({
  rate,
  year,
  genre,
  duration,
  size = "default",
}: MovieMetaProps) {
  return (
    <div className="movie-meta">
      {rate != null && <Rating value={rate} size="small" />}
      {year != null && (
        <span className={`movie-meta__span movie-meta__span--${size}`}>
          {year}
        </span>
      )}
      {genre && (
        <span className={`movie-meta__span movie-meta__span--${size}`}>
          {genre}
        </span>
      )}
      {duration != null && (
        <span className={`movie-meta__span movie-meta__span--${size}`}>
          {formatRuntime(duration)}
        </span>
      )}
    </div>
  );
}
