import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import Screens from './src/utils/screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigator from './src/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/services/redux/store';
const persistStore = store();
const App = props => {
  const [islogedin, setloogedin] = useState(false);
  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setloogedin(true);
    } else {
      setloogedin(false);
    }
    //console.log(AsyncStorage.getItem('token'));
  }, []);
  // if (islogedin) {
  //   return (
  //     <NavigationContainer>
  //       <TabNavigator />
  //     </NavigationContainer>
  //   );
  // } else {
  //   return <StackNavigator />;
  // }
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <StackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
