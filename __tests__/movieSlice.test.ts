// movieSlice.test.ts
import movieReducer, {
    fetchMoviesRequest,
    fetchMoviesSuccess,
    fetchMoviesFailure,
    incrementPage,
    decrementPage,
    resetState,
  } from '../src/features/movies/movieSlice';
  import { Movie } from '../src/types';
  
  describe('movieSlice reducer', () => {
    const initialState = {
      searchResults: [] as Movie[],
      loading: false,
      error: null,
      currentPage: 1,
      totalPages: 1,
      query: '',
    };
  
    it('should handle fetchMoviesRequest', () => {
      const action = fetchMoviesRequest({ query: 'Inception', page: 1 });
      const expectedState = {
        ...initialState,
        loading: true,
        query: 'Inception',
      };
  
      expect(movieReducer(initialState, action)).toEqual(expectedState);
    });
  
    it('should handle fetchMoviesSuccess', () => {
      const movies: Movie[] = [{
        Title: 'Inception',
        Year: '2010',
        Poster: '',
        imdbID: 'tt1375666',
        Type: 'movie',
      }];
      const action = fetchMoviesSuccess({ movies, totalPages: 5 });
      const expectedState = {
        ...initialState,
        loading: false,
        searchResults: movies,
        totalPages: 5,
      };
  
      expect(movieReducer(initialState, action)).toEqual(expectedState);
    });
  
    it('should handle fetchMoviesFailure', () => {
      const action = fetchMoviesFailure('Failed to fetch');
      const expectedState = {
        ...initialState,
        loading: false,
        error: 'Failed to fetch',
      };
  
      expect(movieReducer(initialState, action)).toEqual(expectedState);
    });
  
    it('should handle incrementPage', () => {
      const state = { ...initialState, currentPage: 2, totalPages: 5 };
      const action = incrementPage();
      const expectedState = { ...state, currentPage: 3 };
  
      expect(movieReducer(state, action)).toEqual(expectedState);
    });
  
    it('should not incrementPage if already at the last page', () => {
      const state = { ...initialState, currentPage: 5, totalPages: 5 };
      const action = incrementPage();
      expect(movieReducer(state, action)).toEqual(state); // Should stay the same
    });
  
    it('should handle decrementPage', () => {
      const state = { ...initialState, currentPage: 3 };
      const action = decrementPage();
      const expectedState = { ...state, currentPage: 2 };
  
      expect(movieReducer(state, action)).toEqual(expectedState);
    });
  
    it('should not decrementPage if already at the first page', () => {
      const state = { ...initialState, currentPage: 1 };
      const action = decrementPage();
      expect(movieReducer(state, action)).toEqual(state); // Should stay the same
    });
  
    it('should handle resetState', () => {
        const state = {
          searchResults: [{
            Title: 'Inception',
            Year: '2010',
            Poster: '',
            imdbID: 'tt1375666',
            Type: 'movie',
          }],
          loading: true,
          error: 'Some error',
          currentPage: 3,
          totalPages: 5,
          query: 'Inception',
        };
      
        const action = resetState();
        const expectedState = {
          searchResults: [],
          loading: false,
          error: null,
          currentPage: 1,
          totalPages: 1,
          query: '',
        };
      
        expect(movieReducer(state, action)).toEqual(expectedState);
      });
  });
  