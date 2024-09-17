import React from 'react';
import { View, FlatList } from 'react-native';
import { Box, Text } from 'native-base';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { MovieItem } from '../../components';

const FavoritesScreen: React.FC = () => {
  const { favorites } = useSelector((state: RootState) => state.favorites);

  return (
    <View style={{ flex: 1 }}>
      <Box padding={2}>
        {favorites.length === 0 ? (
          <Text>No favorite movies added yet.</Text>
        ) : (
          <FlatList
            data={favorites}
            numColumns={2}
            keyExtractor={(item) => item.Title}
            renderItem={({ item }) => <MovieItem movie={item} />}
          />
        )}
      </Box>
    </View>
  );
};

export default FavoritesScreen;
