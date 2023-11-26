import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import useNetworkContext from '../../context/useNetworkContext';

const AlertBlockRequest = () => {
  const {alertBlockRequest, closeAlertBlockRequest} = useNetworkContext();
  return (
    <Modal transparent visible={true}>
      <View style={styles.container}>
        <View style={styles.containerElement}>
          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableWithoutFeedback onPress={closeAlertBlockRequest}>
              <View>
                <Text>X</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.title}>{alertBlockRequest?.title}</Text>
          <Text style={styles.desc}>{alertBlockRequest?.message}</Text>
          <View style={styles.buttons}>
            <TouchableWithoutFeedback onPress={closeAlertBlockRequest}>
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
