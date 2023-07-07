import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import call from 'react-native-phone-call';
import {FlatList} from 'react-native-gesture-handler';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
const Emergency = props => {
  const triggerCall = num => {
    console.log('Calling');
    call({number: num, propmt: true}).catch(console.error);
  };
  const args = {
    number: '9925902997',
    propmt: true,
  };
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.bigtext}>Emergency Services</Text>
      </View>
      <View style={styles.flcontainer}>
        <FlatList
          data={assets.Servicedata}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.flbox}
              onPress={() => {
                triggerCall(item.number);
              }}>
              <View
                style={{
                  flex: 0.4,
                  paddingHorizontal: 5,
                  backgroundColor: colors.white,
                }}>
                <Image style={styles.flimgview} source={item.img} />
              </View>
              <View style={styles.fldescview}>
                <Text style={styles.flbigText}>{item.title}</Text>
                <Text>{item.data}</Text>
                <Text>{item.number}</Text>
              </View>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    </View>
  );
};

export default Emergency;
