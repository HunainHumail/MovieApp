import React, { useCallback } from 'react';
import { FlatList, Box, Text, Spinner } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import MovieItem from '../MovieItem';
import { Movie } from '../../types';
import { incrementPage, fetchMoviesRequest } from '../../features/movies/movieSlice';

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  const { searchResults, loading, error, currentPage, totalPages, query } = useSelector((state: RootState) => state.movies);

  const handleLoadMore = useCallback(() => {
    if (!loading && currentPage < totalPages) {
      dispatch(incrementPage());
      dispatch(fetchMoviesRequest({ query, page: currentPage + 1 }));
    }
  }, [dispatch, loading, currentPage, totalPages, query]);

  if (loading && searchResults.length === 0) return <Spinner size="lg" />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={searchResults}
      numColumns={2}
      contentContainerStyle={{paddingBottom: 80}}
      keyExtractor={(item: Movie) => item.imdbID} // Use imdbID for uniqueness
      renderItem={({ item }) => <MovieItem movie={item} />}
      ListEmptyComponent={<Text>No movies found</Text>}
      ListFooterComponent={loading ? <Spinner size="lg" /> : null}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5} // Trigger load more when 50% away from the end
    />
  );
};

export default MovieList;
