export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  language: string;

  releaseYear: number;
  releaseDate: string;

  genres: string[];
  plot: string;
  runtime: number;

  posterUrl: string;
  backdropUrl: string;

  trailerUrl: string;
  trailerYouTubeId: string;

  tmdbRating: number;

  budget: string;
  revenue: string;
  homepage: string;
  status: string;

  keywords: string[];
  cast: string[];
  languages: string[];
  countriesOfOrigin: string[];

  director: string;
  production: string;
  awardsSummary: string;

  searchL: string;
}
