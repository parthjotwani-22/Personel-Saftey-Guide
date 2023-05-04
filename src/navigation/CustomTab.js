import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import assets from '../utils/assets';
import colors from '../utils/colors';

const CustomTab = props => {
  const [crr, setcrr] = useState({
    Map: false,
    Home: true,
    Profile: false,
  });
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={crr.Map ? styles.acbutton : styles.button}
        onPress={() => {
          setcrr({Map: true, Home: false, Profile: false});
          props.navigation.navigate('Map');
        }}>
        <Image
          source={assets.map}
          style={crr.Map ? styles.acimg : styles.img}></Image>
        <Text style={crr.Map ? styles.actext : styles.text}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={crr.Home ? styles.acbutton : styles.button}
        onPress={() => {
          setcrr({Map: false, Home: true, Profile: false});
          props.navigation.navigate('Home');
        }}>
        <Image
          source={assets.home}
          style={crr.Home ? styles.acimg : styles.img}></Image>
        <Text style={crr.Home ? styles.actext : styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={crr.Profile ? styles.acbutton : styles.button}
        onPress={() => {
          setcrr({Map: false, Home: false, Profile: true});
          props.navigation.navigate('Profile');
        }}>
        <Image
          source={assets.profile}
          style={crr.Profile ? styles.acimg : styles.img}></Image>
        <Text style={crr.Profile ? styles.actext : styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: colors.lightpurple,
    justifyContent: 'space-between',
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: colors.white,
  },
  actext: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: colors.yellow,
  },
  img: {
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.white,
  },
  acimg: {
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.yellow,
    margin: 3,
  },
  button: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 0.4,
    padding: 10,
  },
  acbutton: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 0.4,
    padding: 10,
    backgroundColor: colors.purple,
  },
});

export default CustomTab;
