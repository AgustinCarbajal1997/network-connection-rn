import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ToastbarConnection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sin conexión a Internet</Text>
    </View>
  );
};

export default ToastbarConnection;
