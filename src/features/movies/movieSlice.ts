import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types';

interface MovieState {
  searchResults: Movie[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  query: string;
}

const initialState: MovieState = {
  searchResults: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  query: '',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesRequest(state, action: PayloadAction<{ query: string, page?: number }>) {
      state.loading = true;
      state.error = null;
      state.query = action.payload.query;
    },
    fetchMoviesSuccess(state, action: PayloadAction<{ movies: Movie[], totalPages: number }>) {
      state.loading = false;
      state.searchResults = [...state.searchResults, ...action.payload.movies];
      state.totalPages = action.payload.totalPages;
    },
    fetchMoviesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    incrementPage(state) {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    decrementPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    resetState(state) {
      state.searchResults = [];
      state.currentPage = 1;
      state.totalPages = 1;
      state.query = '';
      state.loading = false;
      state.error = null;
    },
  },
});

export const { 
  fetchMoviesRequest, 
  fetchMoviesSuccess, 
  fetchMoviesFailure, 
  incrementPage, 
  decrementPage, 
  resetState 
} = movieSlice.actions;

export default movieSlice.reducer;
