import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchMovies } from '../../utils/api';
import { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from '../../features/movies/movieSlice';

function* fetchMoviesSaga(action: ReturnType<typeof fetchMoviesRequest>): Generator {
  try {
    const response: any = yield call(fetchMovies, action.payload.query, action.payload.page);
    yield put(fetchMoviesSuccess({ movies: response.movies, totalPages: response.totalPages }));
  } catch (error: any) {
    yield put(fetchMoviesFailure(error.message));
  }
}

// Watcher saga
export default function* watchFetchMovies() {
  yield takeEvery(fetchMoviesRequest.type, fetchMoviesSaga);
}
