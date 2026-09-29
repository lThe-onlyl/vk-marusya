import { getGenres } from "@/api/movies";
import { GenreList } from "@/components/Genre/GenreList/GenreList";

export default async function Genres() {
  const genres = await getGenres();

  return <GenreList list={genres} title="Жанры фильмов" />;
}
