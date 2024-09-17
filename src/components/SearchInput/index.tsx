import React, { useState, useCallback } from 'react';
import { Input, Box } from 'native-base';
import { useDispatch } from 'react-redux';
import { fetchMoviesRequest, resetState } from '../../features/movies/movieSlice';
import { debounce } from '../../utils/debounce';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const debouncedFetchMovies = useCallback(debounce((query: string) => {
    dispatch(fetchMoviesRequest({ query, page: 1 }));
  }, 300), [dispatch]);

  const handleChange = (text: string) => {
    setQuery(text);
    dispatch(resetState()); // Reset state on new query
    debouncedFetchMovies(text);
  };

  return (
    <Box padding={4}>
      <Input
        placeholder="Search for movies..."
        value={query}
        onChangeText={handleChange}
        borderColor="gray.300"
        variant="outline"
      />
    </Box>
  );
};

export default SearchInput;
