// styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 10, // Adjusted for better visibility
    right: 10, // Adjusted for better visibility
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    elevation: 8, // Increased elevation for a more pronounced shadow
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 8, // Shadow radius
  },
});

export default styles;
