import "./Rating.scss";

interface RatingProps {
  value: number | null | undefined;
  size?: "default" | "small";
}

export function Rating({ value, size = "default" }: RatingProps) {
  if (value == null) {
    return null;
  }

  const getRatingClass = () => {
    if (value >= 8) return "rating--excellent";
    if (value >= 7) return "rating--good";
    if (value >= 5) return "rating--average";

    return "rating--bad";
  };

  return (
    <span className={`rating ${getRatingClass()} rating--${size}`}>
      <svg className="rating__icon" width="16" height="16" aria-hidden="true">
        <use href="/images/sprite.svg#icon-star" />
      </svg>

      {value.toFixed(1).replace(".", ",")}
    </span>
  );
}
