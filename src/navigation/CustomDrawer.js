import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../utils/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
const CustomDrawer = props => {
  var logout = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '12%',
          width: '100%',
          backgroundColor: colors.lightpurple,
          borderColor: colors.purple,
          borderBottomWidth: 5,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, color: colors.black, fontWeight: '700'}}>
          Hello,
        </Text>
        <Text style={{fontSize: 20, color: colors.black}}>User1234</Text>
      </View>
      <View
        style={{
          height: '60%',
          justifyContent: 'space-evenly',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity style={styles.view}>
          <Text style={{fontSize: 20, fontWeight: '500', color: colors.black}}>
            Emergency SMS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view}>
          <Text style={{fontSize: 20, fontWeight: '500', color: colors.black}}>
            Tips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view}>
          <Text style={{fontSize: 20, fontWeight: '500', color: colors.black}}>
            Location Service
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view}>
          <Text style={{fontSize: 20, fontWeight: '500', color: colors.black}}>
            FAQs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view} onPress={logout}>
          <Text style={{fontSize: 20, fontWeight: '500', color: colors.black}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '10%',
          width: '100%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 10,
        }}>
        <Text>Personal Saftey Guide</Text>
        <Text>V1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 50,
    width: '100%',
    backgroundColor: colors.lightpurple,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomDrawer;
