import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import useNetworkContext from '../context/useNetworkContext';
import ToastbarConnection from '../components/ToastBarConnection';
import NetworkError from '../components/NetworkError';
import UserItem from '../components/UserItem';
import Input from '../components/Input';
import styles from './styles';
import AlertBlockRequest from '../components/AlertBlockRequest';

const URL = 'https://gorest.co.in/public/v2/users/';
const token = '';

function Home() {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const {alertBlockRequest, isConnected} = useNetworkContext();

  useEffect(() => {
    if (data === null && isConnected) getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  // se chequea si hay datos en async storage, si los hay resincroniza con el server
  useEffect(() => {
    if (isConnected) {
      cleanAsyncStorageData();
    }
  }, [isConnected]);

  const onChangeText = text => {
    setUser(text);
  };

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
    if (user === '') return;
    if (!isConnected) {
      postAsyncStorageData(user);
      return;
    }
    try {
      setIsLoading(true);
      await fetch(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify(user),
      });
      setUser('');
      setData([{name: user, id: Date.now()}, ...data]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const postAsyncStorageData = async value => {
    try {
      const users = await getAsyncStorageData();
      const jsonValue =
        users != null
          ? JSON.stringify([...users, value])
          : JSON.stringify([value]);
      await AsyncStorage.setItem('users', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getAsyncStorageData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('users');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const cleanAsyncStorageData = async () => {
    const pendingUsers = await AsyncStorage.getItem('users');
    if (!pendingUsers || !pendingUsers?.length) return;

    /* aqui agregaras tu logica para sincronizar con el servidor (por ejemplo tu llamada POST) */

    // finalmente si tu resincronización es exitosa, limpias tu async storage
    try {
      await AsyncStorage.setItem('users', JSON.stringify([]));
    } catch (e) {
      console.log(e);
    }
  };

  if (isConnected === false && data === null && !isLoading) {
    return <NetworkError />;
  }

  return (
    <>
      {isConnected === false && <ToastbarConnection />}
      <View style={styles.container}>
        {alertBlockRequest && <AlertBlockRequest />}
        <Input onSubmit={onSubmit} onChangeText={onChangeText} value={user} />
        {isLoading && <ActivityIndicator />}
        {error && (
          <View>
            <Text>Ha ocurrido un error al recuperar los datos</Text>
          </View>
        )}
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
