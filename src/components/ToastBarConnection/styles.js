import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: 30,
    backgroundColor: 'red',
    zIndex: 10000,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
  },
});
export default styles;
