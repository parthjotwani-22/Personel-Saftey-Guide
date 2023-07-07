import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

import {FlatList} from 'react-native-gesture-handler';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
const TipsScreen = props => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.bigtext}>Tips</Text>
      </View>
      <View style={styles.flcontainer}>
        <FlatList
          data={assets.safetyTips}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.flbox}>
              <View style={styles.fldescview}>
                <Text style={styles.flbigText}>{item.category}</Text>
                <FlatList
                  data={item.tips}
                  renderItem={({item}) => (
                    <Text style={{marginVertical: 5}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '900',
                          color: colors.purple,
                        }}>
                        #
                      </Text>{' '}
                      {item}
                    </Text>
                  )}></FlatList>
              </View>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
};

export default TipsScreen;
