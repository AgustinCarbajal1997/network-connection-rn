import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const NetworkError = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/service-error.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.title}>¡Upss... ocurrió un error!</Text>
        <Text style={styles.desc}>No tienes conexión a Internet</Text>
      </View>
    </View>
  );
};

export default NetworkError;
