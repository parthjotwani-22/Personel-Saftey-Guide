import React, {useState} from 'react';
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
//import twilio from 'twilio';
const Signup = props => {
  const [details, setdetails] = useState({
    email: null,
    password: null,
  });
  // const senddata = () => {
  //   fetch('http://192.168.43.51:3000/user', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(details),
  //   })
  //     .then(res => {
  //       message();
  //       res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(e => console.log(e));
  // };
  //const accountSid = 'ACe831e63bc8ac2f83acd179be3d732086';
  //const authToken = 'efefd86eb0dafa345a8d126614d11387';
  //const client = require('twilio')(accountSid, authToken);
  // var message = () => {
  //   twilio.messages
  //     .create({
  //       body: 'Help !!!!!!!!!!!!!!!!!!!',
  //       from: '+13156934098',
  //       to: '+918758205293',
  //     })
  //     .then(message => console.log(message.sid))
  //     .done();
  // };
  // const message = () => {
  //   fetch('http://192.168.43.51:3000/message', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     //   body: JSON.stringify(details),
  //   }).then(res => console.log('Data is sent'));
  //   //.then(res => res.json())
  //   // .then(data => {
  //   //   console.log(data);
  //   //   //message();
  //   // })
  //   // .catch(e => console.log(e));
  // };
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
              E-mail :
            </Text>
            <TextInput
              onChangeText={text => {
                setdetails({...details, email: text});
              }}
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
              onChangeText={text => {
                setdetails({...details, password: text});
              }}
              style={{
                height: '100%',
              }}></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              //senddata();
              //props.navigation.navigate('HomeTab');
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

export default Signup;
