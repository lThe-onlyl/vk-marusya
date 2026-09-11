import "./MovieAbout.scss";

interface MovieProps {
  language: string | null;
  budget: string | null;
  revenue: string | null;
  director: string | null;
  production: string | null;
  awardsSummary: string | null;
}

export function MovieAbout({
  language,
  budget,
  revenue,
  director,
  production,
  awardsSummary,
}: MovieProps) {
  return (
    <section className="movie-about">
      <div className="container">
        <h2 className="movie-about__title">О фильме</h2>

        <ul className="movie-about__box">
          <li className="movie-about__span movie-about__span--line">
            Язык оригинала
          </li>
          <li className="movie-about__span">{language ?? "Нет данных"}</li>
          <li className="movie-about__span movie-about__span--line">Бюджет</li>
          <li className="movie-about__span">{budget ?? "Нет данных"}</li>
          <li className="movie-about__span movie-about__span--line">Выручка</li>
          <li className="movie-about__span">{revenue ?? "Нет данных"}</li>
          <li className="movie-about__span movie-about__span--line">
            Режиссёр
          </li>
          <li className="movie-about__span">{director ?? "Нет данных"}</li>
          <li className="movie-about__span movie-about__span--line">
            Продакшен
          </li>
          <li className="movie-about__span">{production ?? "Нет данных"}</li>
          <li className="movie-about__span movie-about__span--line">Награды</li>
          <li className="movie-about__span">{awardsSummary ?? "Нет данных"}</li>
        </ul>
      </div>
    </section>
  );
}
