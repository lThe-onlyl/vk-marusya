import { getRandomMovie, getTopMovies } from "@/api/Movies";
import { MovieHero } from "@/components/MovieHero/MovieHero";
import { MovieList } from "@/components/MovieList/MovieList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const randomMovie = await getRandomMovie();
  const topMovies = await getTopMovies();
  console.log(topMovies);
  return (
    <>
      <MovieHero
        rate={randomMovie.tmdbRating}
        year={randomMovie.releaseYear}
        genre={randomMovie.genres[0] ?? ""}
        duration={randomMovie.runtime}
        title={randomMovie.title}
        description={randomMovie.plot}
        posterUrl={
          randomMovie.backdropUrl ??
          randomMovie.posterUrl ??
          "/images/movie-placeholder.png"
        }
      />

      <MovieList title="Топ 10 фильмов" list={topMovies} showRank />
    </>
  );
}
