import { formatRuntime } from "@/utils/formatRuntime";
import { Rating } from "../ui/Rating/Rating";
import "./MovieMeta.scss";

interface MovieMetaProps {
  rate: number | null;
  year: number | null;
  genre: string;
  duration: number | null;
}

export function MovieMeta({ rate, year, genre, duration }: MovieMetaProps) {
  return (
    <div className="movie-meta">
      {rate != null && <Rating value={rate} />}
      {year != null && <span className="movie-meta__span">{year}</span>}
      {genre && <span className="movie-meta__span">{genre}</span>}
      {duration != null && (
        <span className="movie-meta__span">{formatRuntime(duration)}</span>
      )}
    </div>
  );
}
