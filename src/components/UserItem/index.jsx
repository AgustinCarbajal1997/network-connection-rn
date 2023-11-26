import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const UserItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default UserItem;
