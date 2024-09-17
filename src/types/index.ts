export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: 'True' | 'False';
}

export interface FetchMoviesResponse {
  movies: Movie[];
  totalPages: number;
}
