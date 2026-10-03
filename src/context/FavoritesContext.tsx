"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { addFavorite, removeFavorite } from "@/api/favorites";

interface FavoritesContextType {
  favoriteIds: number[];
  setFavoriteIds: (ids: number[]) => void;
  toggleFavorite: (movieId: number) => Promise<void>;
  removeFromFavorites: (movieId: number) => Promise<void>;
  isFavorite: (movieId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = useCallback(
    async (movieId: number) => {
      const exists = favoriteIds.includes(movieId);

      setFavoriteIds((prev) =>
        exists ? prev.filter((id) => id !== movieId) : [...prev, movieId],
      );

      try {
        if (exists) {
          await removeFavorite(movieId);
        } else {
          await addFavorite(movieId);
        }
      } catch (error) {
        setFavoriteIds((prev) =>
          exists ? [...prev, movieId] : prev.filter((id) => id !== movieId),
        );
        console.error("Failed to toggle favorite:", error);
      }
    },
    [favoriteIds],
  );

  const isFavorite = useCallback(
    (movieId: number) => favoriteIds.includes(movieId),
    [favoriteIds],
  );

  const removeFromFavorites = useCallback(async (movieId: number) => {
    try {
      await removeFavorite(movieId);

      setFavoriteIds((prev) => prev.filter((id) => id !== movieId));
    } catch (error) {
      console.error("Failed to remove favorite:", error);
      throw error;
    }
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        setFavoriteIds,
        toggleFavorite,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
}
