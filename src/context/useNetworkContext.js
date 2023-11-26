import React, {useContext, createContext, useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const NetworkContext = createContext(null);

export const NetworkContextProvider = ({children}) => {
  const [isConnected, setIsConnected] = useState(null);
  const [toastBar, setToastBar] = useState(false);
  const [alertBlockRequest, setAlertBlockRequest] = useState(null);
  const [alertBlockApp, setAlertBlockApp] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(currentState => {
      setIsConnected(currentState.isConnected);
      setToastBar(!currentState.isConnected);
    });

    return () => unsubscribe();
  }, []);

  const openAlertBlockRequest = () => {
    setAlertBlockRequest({
      title: 'Hubo un problema de conexión',
      message: 'No se pudo realizar la acción, intente más tarde',
    });
  };

  const closeAlertBlockRequest = () => {
    setAlertBlockRequest(null);
  };

  const values = {
    toastBar,
    alertBlockRequest,
    closeAlertBlockRequest,
    openAlertBlockRequest,
    alertBlockApp,
    setAlertBlockApp,
    isConnected,
  };

  return (
    <NetworkContext.Provider value={values}>{children}</NetworkContext.Provider>
  );
};

export function useNetworkContext() {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error("Context doesn't exist");
  }
  return context;
}

export default useNetworkContext;
