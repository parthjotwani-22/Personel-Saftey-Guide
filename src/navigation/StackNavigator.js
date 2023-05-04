import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import screens from '../utils/screens';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const StackNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={screens.GetStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTab"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={screens.Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={screens.HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={screens.ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={screens.MapScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
