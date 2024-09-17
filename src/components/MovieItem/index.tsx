import React from 'react';
import { Box, Text, Image, VStack, IconButton, useToast } from 'native-base';
import { Movie } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../features/favorites/favoriteSlice';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles'; // Adjust the path as necessary
import { RootState } from '../../store';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some((fav: any) => fav.Title === movie.Title);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
      toast.show({
        description: "Removed from favorites",
        duration: 2000,
      });
    } else {
      dispatch(addFavorite(movie));
      toast.show({
        description: "Added to favorites",
        duration: 2000,
      });
    }
  };

  const hasImage = movie.Poster && movie.Poster.trim() !== '';

  return (
    <Box style={styles.container}>
      <Box position="relative">
        {hasImage ? (
          <Image
            source={{ uri: movie.Poster }}
            alt={movie.Title}
            style={styles.image}
          />
        ) : (
          <Box style={styles.placeholder}>
            <Text style={styles.placeholderText}>No Image</Text>
          </Box>
        )}
        <Box style={styles.favoriteButtonContainer}>
          <IconButton
            icon={<Icon name={isFavorite ? 'heart' : 'hearto'} size={24} color="red" />}
            onPress={handleFavoriteToggle}
            variant="unstyled"
          />
        </Box>
      </Box>
      <VStack space={2} mt={2}>
        <Text numberOfLines={2} style={styles.title}>{movie.Title}</Text>
        <Text style={styles.year}>{movie.Year}</Text>
      </VStack>
    </Box>
  );
};

export default MovieItem;
