import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { MovieList, SearchInput } from '../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // Adjust the path as necessary

const HomeScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const { favorites } = useSelector((state: RootState) => state.favorites);

  return (
    <View style={styles.container}>
      <Box padding={2}>
        <SearchInput />
        <MovieList />
      </Box>
      {favorites.length > 0 && (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('Favorites')}
        >
          <Icon name="heart" size={30} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeScreen;
