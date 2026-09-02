type IconProps = {
  name: string;
  className?: string;
  width?: number;
  height?: number;
};

export function Icon({ name, className, width = 24, height = 24 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={`/images/sprite.svg#${name}`} />
    </svg>
  );
}
