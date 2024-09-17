import { all } from 'redux-saga/effects';
import watchFetchMovies from '../features/movies/movieApi';

// Root saga
export default function* rootSaga() {
    yield all([
      watchFetchMovies(),
      // Add other sagas here
    ]);
  }
  