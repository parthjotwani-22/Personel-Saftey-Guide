import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import colors from '../../utils/colors';
import assets from '../../utils/assets';
const GetStartedScreen = props => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: colors.white}}>
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
      <View>
        <Image
          source={assets.image1}
          style={{
            height: 500,
            width: '100%',
            resizeMode: 'stretch',
            opacity: 0.7,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: colors.lightpurple,
          width: '100%',
          paddingBottom: '10%',
        }}>
        <Text
          style={{
            color: colors.purple,
            fontSize: 25,
            marginTop: 10,
            fontWeight: '600',
            alignSelf: 'center',
          }}>
          Don't Be Safety Blinded, Be Safety Minded!!
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: colors.white,
            alignSelf: 'center',
            marginTop: 15,
          }}>
          "Let's Keep Us Safe"
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          style={{
            backgroundColor: colors.purple,
            alignSelf: 'flex-end',
            marginTop: 15,
            right: 40,
            borderRadius: 50,
          }}>
          <Image
            source={assets.next}
            style={{tintColor: colors.white, height: 55, width: 55}}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GetStartedScreen;
