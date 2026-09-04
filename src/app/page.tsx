import { getRandomMovie } from "@/api/movies";
import { MovieHero } from "@/components/MovieHero/MovieHero";

export const dynamic = "force-dynamic";

export default async function Home() {
  const movie = await getRandomMovie();
  console.log(movie);
  return (
    <>
      <MovieHero
        rate={movie.tmdbRating}
        year={movie.releaseYear}
        genre={movie.genres[0]}
        duration={movie.runtime}
        title={movie.title}
        description={movie.plot}
        posterUrl={movie.backdropUrl}
      />
    </>
  );
}
