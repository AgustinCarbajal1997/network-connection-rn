import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 220,
  },
  descContainer: {
    marginVertical: 20,
    width: Dimensions.get('window').width * 0.7,
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    color: '#263057',
    textAlign: 'center',
  },
  desc: {
    fontWeight: '400',
    fontSize: 16,
    color: '#263057',
    textAlign: 'center',
  },
});
export default styles;
