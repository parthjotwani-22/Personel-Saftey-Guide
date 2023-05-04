import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import Screens from './src/utils/screens';

const App = props => {
  return <StackNavigator />;
};

export default App;
