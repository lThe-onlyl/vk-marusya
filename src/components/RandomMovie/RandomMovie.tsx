"use client";

import { useState } from "react";

import { getRandomMovie } from "@/api/movies";
import { MovieHero } from "@/components/MovieHero/MovieHero";
import type { Movie } from "@/types/Movie";

interface RandomMovieProps {
  initialMovie: Movie;
}

export function RandomMovie({ initialMovie }: RandomMovieProps) {
  const [movie, setMovie] = useState(initialMovie);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetMovie = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const newMovie = await getRandomMovie();
      setMovie(newMovie);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MovieHero
      rate={movie.tmdbRating}
      year={movie.releaseYear}
      genre={movie.genres[0] ?? ""}
      duration={movie.runtime}
      title={movie.title}
      description={movie.plot}
      posterUrl={
        movie.backdropUrl ?? movie.posterUrl ?? "/images/movie-placeholder.png"
      }
      movieid={movie.id}
      resetMovie={handleResetMovie}
      showDetailsButton
    />
  );
}
