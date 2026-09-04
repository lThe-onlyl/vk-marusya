import { MovieHero } from "@/components/MovieHero/MovieHero";
import { Header } from "@/components/Header/Header";
import { MovieList } from "@/components/MovieList/MovieList";
import { Footer } from "@/components/Footer/Footer";

const mockMovies = [
  {
    id: 1,
    title: "Побег из Шоушенка",
    posterUrl: "/test/movie-1.png",
  },
  {
    id: 2,
    title: "Крёстный отец",
    posterUrl: "/test/movie-2.png",
  },
  {
    id: 3,
    title: "Тёмный рыцарь",
    posterUrl: "/test/movie-3.png",
  },
  {
    id: 4,
    title: "Криминальное чтиво",
    posterUrl: "/test/movie-4.png",
  },
  {
    id: 5,
    title: "Форрест Гамп",
    posterUrl: "/test/movie-5.png",
  },
  {
    id: 6,
    title: "Побег из Шоушенка",
    posterUrl: "/test/movie-1.png",
  },
  {
    id: 7,
    title: "Крёстный отец",
    posterUrl: "/test/movie-2.png",
  },
  {
    id: 8,
    title: "Тёмный рыцарь",
    posterUrl: "/test/movie-3.png",
  },
  {
    id: 9,
    title: "Криминальное чтиво",
    posterUrl: "/test/movie-4.png",
  },
  {
    id: 10,
    title: "Форрест Гамп",
    posterUrl: "/test/movie-5.png",
  },
];

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <MovieHero
          rate={7.5}
          year={1979}
          genre="Детектив"
          duration={67}
          title="Шерлок Холмс и доктор Ватсон: Знакомство"
          description="Увлекательные приключения самого известного сыщика всех времен"
          posterUrl="/images/movie.jpg"
        />
        <MovieList title="Топ 10 фильмов" list={mockMovies} showRank />
      </main>
      <Footer />
    </div>
  );
}
