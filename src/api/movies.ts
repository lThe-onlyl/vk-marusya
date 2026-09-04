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
