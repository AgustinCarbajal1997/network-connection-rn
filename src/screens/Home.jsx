/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import useNetworkContext from '../context/useNetworkContext';
import ToastbarConnection from '../components/ToastBarConnection';
import NetworkError from '../components/NetworkError';
import UserItem from '../components/UserItem';
import Input from '../components/Input';
import styles from './styles';
import AlertBlockRequest from '../components/AlertBlockRequest';

const URL = 'https://gorest.co.in/public/v2/users/';

function Home() {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const {alertBlockRequest, isConnected, setAlertBlockRequest} =
    useNetworkContext();

  useEffect(() => {
    if (data === null && isConnected) getUsers();
  }, [isConnected]);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(URL);
      const users = await response.json();
      setData(users);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async () => {
    if (!isConnected) {
      setAlertBlockRequest(true);
      return;
    }
    try {
      setIsLoading(true);
      await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isConnected && data === null && !isLoading) {
    return <NetworkError />;
  }

  return (
    <View>
      {!isConnected && <ToastbarConnection />}
      <View style={styles.container}>
        {alertBlockRequest && <AlertBlockRequest />}
        <Input onSubmit={onSubmit} />
        {isLoading && <ActivityIndicator />}
        {data && (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <UserItem item={item} />}
          />
        )}
      </View>
    </View>
  );
}

export default Home;
