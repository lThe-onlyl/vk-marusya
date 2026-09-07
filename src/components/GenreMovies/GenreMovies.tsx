"use client";

import { useState } from "react";
import Link from "next/link";
import { getMoviesByGenre } from "@/api/movies";
import { MovieList } from "@/components/MovieList/MovieList";
import { Button } from "@/components/ui/Button/Button";
import type { Movie } from "@/types/Movie";
import { Icon } from "../ui/IconProps/IconProps";

interface GenreMoviesProps {
  genre: string;
  title: string;
  initialMovies: Movie[];
}

export function GenreMovies({ genre, title, initialMovies }: GenreMoviesProps) {
  const [movies, setMovies] = useState(initialMovies);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialMovies.length === 10);

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    console.log("page:", page);
    console.log("nextPage:", nextPage);

    const newMovies = await getMoviesByGenre(genre, nextPage, 10);
    console.log("newMovies:", newMovies);

    setMovies((prevMovies) => [...prevMovies, ...newMovies]);

    setPage(nextPage);

    if (newMovies.length < 10) {
      setHasMore(false);
    }
  };

  return (
    <MovieList
      title={title}
      list={movies}
      variant="genre"
      headerAction={
        <Link
          href="/genres"
          className="movie-list__back"
          aria-label="Вернуться к жанрам"
        >
          <Icon
            name="icon-arrow-back"
            className="movie-list__icon"
            width={24}
            height={24}
          />
        </Link>
      }
    >
      {hasMore && (
        <div className="movie-list__box">
          <Button className="movie-list__add" onClick={handleLoadMore}>
            Показать ещё
          </Button>
        </div>
      )}
    </MovieList>
  );
}
