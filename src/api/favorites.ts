import { Movie } from "@/types/Movie";

const API_URL = "https://cinemaguide.skillbox.cc";

export async function getFavorites(): Promise<Movie[]> {
  const response = await fetch(`${API_URL}/favorites`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to load favorites");
  }

  return response.json();
}

export async function addFavorite(movieId: number): Promise<void> {
  const response = await fetch(`${API_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: new URLSearchParams({ id: String(movieId) }),
  });

  if (!response.ok) {
    throw new Error("Failed to add to favorites");
  }
}

export async function removeFavorite(movieId: number): Promise<void> {
  const response = await fetch(`${API_URL}/favorites/${movieId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to remove from favorites");
  }
}
