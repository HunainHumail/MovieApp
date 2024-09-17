import axios from 'axios';
import { FetchMoviesResponse, Movie } from '../types';

const API_KEY = 'b6aabe0b';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query: string, page: number = 1): Promise<FetchMoviesResponse> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        page: page,
        type: 'movie',
      },
    });

    if (response.data.Response === 'True') {
      const totalResults = parseInt(response.data.totalResults, 10);
      const totalPages = Math.ceil(totalResults / 10); 
      return {
        movies: response.data.Search,
        totalPages,
      };
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Fetch a specific movie by ID
export const fetchMovieById = async (id: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });

    if (response.data.Response === 'True') {
      return response.data; // Return the movie details
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};
