import { getGenres } from "@/api/Movies";
import { GenreList } from "@/components/GenreList/GenreList";

export default async function Genres() {
  const genres = await getGenres();

  return <GenreList list={genres} title="Жанры фильмов" />;
}
