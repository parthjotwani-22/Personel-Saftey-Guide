import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTab from './CustomTab';
import screens from '../utils/screens';
const Tab = createBottomTabNavigator();
const TabNavigator = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen
        name="Home"
        component={screens.HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={screens.ProfileScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Map"
        component={screens.MapScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
