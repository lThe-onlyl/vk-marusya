import { getMoviesByGenre } from "@/api/movies";
import { genreTitles } from "@/constants/genres";
import { GenreMovies } from "@/components/GenreMovies/GenreMovies";

interface GenrePageProps {
  params: Promise<{
    genre: string;
  }>;
}

export default async function GenrePage({ params }: GenrePageProps) {
  const { genre } = await params;

  const movies = await getMoviesByGenre(genre, 1, 10);

  return (
    <GenreMovies
      genre={genre}
      title={genreTitles[genre]}
      initialMovies={movies}
    />
  );
}
