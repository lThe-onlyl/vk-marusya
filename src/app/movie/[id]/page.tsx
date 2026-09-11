import { getMovie } from "@/api/movies";
import { MovieAbout } from "@/components/MovieAbout/MovieAbout";
import { MovieHero } from "@/components/MovieHero/MovieHero";

interface MoviePageProps {
  params: Promise<{
    id: number;
  }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const movie = await getMovie(Number(id));

  return (
    <>
      <MovieHero
        rate={movie.tmdbRating}
        year={movie.releaseYear}
        genre={movie.genres?.[0] ?? ""}
        duration={movie.runtime}
        title={movie.title}
        description={movie.plot}
        posterUrl={
          movie.backdropUrl ??
          movie.posterUrl ??
          "/images/movie-placeholder.png"
        }
        movieid={movie.id}
      />

      <MovieAbout
        language={movie.language}
        budget={movie.budget}
        revenue={movie.revenue}
        director={movie.director}
        production={movie.production}
        awardsSummary={movie.awardsSummary}
      />
    </>
  );
}
