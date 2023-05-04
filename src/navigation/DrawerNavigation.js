import {DrawerContent, createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View, Text} from 'react-native';
import CustomDrawer from './CustomDrawer';
import screens from '../utils/screens';
import TabNavigator from './TabNavigator';
import colors from '../utils/colors';
const Drawer = createDrawerNavigator();
const DrawerNavigation = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '70%'},
        drawerActiveTintColor: colors.purple,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Map" component={screens.MapScreen} />
      <Drawer.Screen name="Profile" component={screens.ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
