// styles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = (screenWidth - 32) / 2; // Adjust for padding/margin

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: itemWidth,
    marginBottom: 16,
    marginHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  placeholder: {
    width: '100%',
    height: 150,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: 'gray',
  },
  favoriteButtonContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    borderRadius: 999, // This will give a circular shape
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  year: {
    color: 'gray',
  },
});

export default styles;
