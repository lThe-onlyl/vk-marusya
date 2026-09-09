import { getRandomMovie, getTopMovies } from "@/api/movies";
import { RandomMovie } from "@/components/RandomMovie/RandomMovie";
import { MovieList } from "@/components/MovieList/MovieList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const randomMovie = await getRandomMovie();
  const topMovies = await getTopMovies();

  return (
    <>
      <RandomMovie initialMovie={randomMovie} />

      <MovieList title="Топ 10 фильмов" list={topMovies} showRank />
    </>
  );
}
