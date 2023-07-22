import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slide: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 20,
    margin: 20,
    borderRadius: 100,
  },
  animation: {
    zIndex: 1,
    elevation: 1,
  },
});
