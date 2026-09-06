import { GenreCard } from "../GenreCard/GenreCard";
import { genreTitles } from "@/constants/genres";
import "./GenreList.scss";

interface GenreListProps {
  title?: string;
  list: string[];
}

export function GenreList({ title, list }: GenreListProps) {
  return (
    <section className="genre-list">
      <div className="container">
        {title && <h2 className="genre-list__title">{title}</h2>}

        <div className="genre-list__list">
          {list.map((genre) => (
            <GenreCard key={genre} name={genre} title={genreTitles[genre]} />
          ))}
        </div>
      </div>
    </section>
  );
}
