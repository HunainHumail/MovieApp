import createSagaMiddleware from 'redux-saga';
import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import movieReducer from '../features/movies/movieSlice';
import favoritesReducer from '../features/favorites/favoriteSlice';
import rootSaga from './saga'; // Import your root saga

const sagaMiddleware = createSagaMiddleware();

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const rootReducer: Reducer = combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
