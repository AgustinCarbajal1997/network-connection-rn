import {View, Text, TouchableWithoutFeedback, Modal} from 'react-native';
import React from 'react';
import styles from './styles';
import useNetworkContext from '../../context/useNetworkContext';

const AlertBlockRequest = () => {
  const {setAlertBlockRequest} = useNetworkContext();
  return (
    <Modal transparent visible={true}>
      <View style={styles.container}>
        <View style={styles.containerElement}>
          <View style={styles.closeContainer}>
            <TouchableWithoutFeedback
              onPress={() => setAlertBlockRequest(false)}>
              <View>
                <Text>X</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.title}>Hubo un problema de conexión</Text>
          <Text style={styles.desc}>
            No se pudo realizar la acción, intente más tarde
          </Text>
          <View style={styles.buttons}>
            <TouchableWithoutFeedback
              onPress={() => setAlertBlockRequest(false)}>
              <View>
                <Text style={styles.button}>ACEPTAR</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertBlockRequest;
