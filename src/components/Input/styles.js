import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ededed',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#00A88F',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default styles;
