import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Input = ({onSubmit, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Introduzca nombre"
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>CREAR</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
