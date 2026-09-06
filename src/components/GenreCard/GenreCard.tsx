import Image from "next/image";
import "./GenreCard.scss";

interface GenreCardProps {
  title: string;
  name: string;
}

export function GenreCard({ title, name }: GenreCardProps) {
  return (
    <article className="genre-card">
      <Image
        src={`/images/genres/${name}.png`}
        alt={`Жанр «${title}»`}
        width={290}
        height={220}
        className="genre-card__img"
      />

      <h3 className="genre-card__name">{title}</h3>
    </article>
  );
}
