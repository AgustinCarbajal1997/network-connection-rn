import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24378F44',
    position: 'relative',
    zIndex: 100,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  closeContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerElement: {
    minHeight: 100,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: '#ffffff',
    width: Dimensions.get('screen').width - 20,
    top: '40%',
    left: 10,
    transform: [{translateY: -40}],
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    paddingTop: 10,
    color: '#263057',
  },
  desc: {
    paddingVertical: 16,
    fontSize: 15,
    textAlign: 'center',
    color: '#263057',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00A88F',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    padding: 6,
    borderRadius: 10,
    marginLeft: 20,
    paddingHorizontal: 45,
    paddingVertical: 10,
  },
});

export default styles;
