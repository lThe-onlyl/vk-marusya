import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { MovieCard } from "@/components/MovieHero/MovieHero";
import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <MovieCard
        rate={7.5}
        year={1979}
        genre="Детектив"
        duration={67}
        title="Шерлок Холмс и доктор Ватсон: Знакомство"
        description="Увлекательные приключения самого известного сыщика всех времен"
        posterUrl="/images/movie.jpg"
      />
      <Input placeholder="Поиск" />

      <Input placeholder="Имя" />

      <Input placeholder="Фамилия" />

      <Input placeholder="Электронная почта" />

      <Input placeholder="Пароль" />

      <Button variant="primary">Primary</Button>

      <Button variant="primary" disabled>
        Primary disabled
      </Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="secondary" disabled>
        Secondary disabled
      </Button>
    </div>
  );
}
