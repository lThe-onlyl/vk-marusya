import { Movie } from "@/types/Movie";

const API_URL = "https://cinemaguide.skillbox.cc";

export async function getRandomMovie(): Promise<Movie> {
  const response = await fetch(`${API_URL}/movie/random`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch random movie");
  }

  return response.json();
}

export async function getMovie(id: number): Promise<Movie> {
  const response = await fetch(`${API_URL}/movie/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }

  return response.json();
}

export async function getTopMovies(): Promise<Movie[]> {
  const response = await fetch(`${API_URL}/movie/top10`);

  if (!response.ok) {
    throw new Error("Failed to fetch top movies");
  }

  return response.json();
}

export async function getGenres(): Promise<string[]> {
  const response = await fetch(`${API_URL}/movie/genres`);

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  return response.json();
}

export async function getMoviesByGenre(
  genre: string,
  page = 1,
  count = 10,
): Promise<Movie[]> {
  const params = new URLSearchParams({
    genre,
    page: String(page),
    count: String(count),
  });

  const response = await fetch(`${API_URL}/movie?${params}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies by genre");
  }

  return response.json();
}
