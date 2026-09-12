import Image from "next/image";
import "./ModalItem.scss";
import Link from "next/link";
import { MovieMeta } from "../MovieMeta/MovieMeta";

interface MovieProps {
  rate: number;
  year: number;
  genre: string;
  duration: number;
  title: string;
  posterUrl: string;
  movieid: number;
}

export function ModalItem({
  rate,
  year,
  genre,
  duration,
  title,
  posterUrl,
  movieid,
}: MovieProps) {
  return (
    <Link href={`/movie/${movieid}`} className="modal-item">
      <Image
        src={posterUrl || "/images/movie-placeholder.jpg"}
        alt={`Постер фильма «${title}»`}
        width={680}
        height={552}
        className="modal-item__img"
      />

      <div className="modal-item__content">
        <div className="modal-item__box">
          <MovieMeta
            rate={rate}
            year={year}
            genre={genre}
            duration={duration}
          />
        </div>

        <h2 className="modal-item__title">{title}</h2>
      </div>
    </Link>
  );
}
