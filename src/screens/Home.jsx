/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import useNetworkContext from '../context/useNetworkContext';
import ToastbarConnection from '../components/ToastBarConnection';
import NetworkError from '../components/NetworkError';
import UserItem from '../components/UserItem';
import Input from '../components/Input';
import styles from './styles';
import AlertBlockRequest from '../components/AlertBlockRequest';
function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const {
    toastBar,
    alertBlockRequest,
    alertBlockApp,
    setAlertBlockApp,
    isConnected,
    openAlertBlockRequest,
  } = useNetworkContext();

  useEffect(() => {
    if (isConnected && data === null) {
      setAlertBlockApp(false);
      getUsers();
    } else if (isConnected === false && data === null) {
      setAlertBlockApp(true);
    } else {
      setAlertBlockApp(false);
    }
  }, [isConnected]);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://gorest.co.in/public/v2/users/');
      const users = await response.json();
      setData(users);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = () => {
    if (!isConnected) {
      openAlertBlockRequest();
      return;
    }
  };

  if (alertBlockApp) {
    return <NetworkError />;
  }

  return (
    <>
      {toastBar && <ToastbarConnection />}
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
    </>
  );
}

export default Home;
