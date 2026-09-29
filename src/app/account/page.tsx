"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/api/auth";
import { getFavorites } from "@/api/favorites";
import { useAuth } from "@/context/AuthContext";
import { UserInformation } from "@/components/User/UserInformation/UserInformation";
import { Movie } from "@/types/Movie";

export default function AccountPage() {
  const router = useRouter();
  const { user, isAuth, isLoading, setUser } = useAuth();

  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [isFavoritesLoading, setFavoritesLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuth) {
      router.replace("/");
    }
  }, [isLoading, isAuth, router]);

  useEffect(() => {
    if (!isAuth) return;

    let isCancelled = false;

    getFavorites()
      .then((data) => {
        if (!isCancelled) setFavorites(data);
      })
      .catch((error) => {
        console.error("Failed to load favorites:", error);
      })
      .finally(() => {
        if (!isCancelled) setFavoritesLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [isAuth]);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null);
      router.push("/");
    }
  };

  return (
    <UserInformation
      name={`${user.name} ${user.surname}`}
      email={user.email}
      onLogout={handleLogout}
      list={favorites}
    />
  );
}
