import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import {TextInput} from 'react-native-gesture-handler';
const Login = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.purple,
          alignItems: 'center',
        }}>
        <View style={{paddingVertical: 10, marginLeft: 15}}>
          <Image source={assets.logo1} style={{height: 55, width: 55}} />
        </View>
        <Text style={{color: colors.yellow2, marginLeft: 10, fontSize: 25}}>
          Personal Safety{' '}
          <Text style={{color: colors.white, textDecorationLine: 'underline'}}>
            Guide
          </Text>
        </Text>
      </View>
      <ImageBackground
        style={{
          height: Dimensions.get('screen').height - 150,
          paddingHorizontal: 20,
        }}
        source={assets.image1}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'space-evenly'}}
          style={{height: '80%'}}>
          <View style={styles.textinpview}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: colors.purple,
              }}>
              Name :
            </Text>
            <TextInput
              style={{
                height: '100%',
              }}></TextInput>
          </View>
          <View style={styles.textinpview}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: colors.purple,
              }}>
              E-mail :
            </Text>
            <TextInput
              style={{
                height: '100%',
              }}></TextInput>
          </View>
          <View style={styles.textinpview}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: colors.purple,
              }}>
              Phone :
            </Text>
            <TextInput
              style={{
                height: '100%',
              }}></TextInput>
          </View>
          <View style={styles.textinpview}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: colors.purple,
              }}>
              Password :
            </Text>
            <TextInput
              style={{
                height: '100%',
              }}></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('HomeTab');
            }}
            style={{
              backgroundColor: colors.purple,
              borderColor: colors.lightpurple,
              borderRadius: 10,
              borderWidth: 5,
              height: 70,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>
              LOG IN
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Login;
