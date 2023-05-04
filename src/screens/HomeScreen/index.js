import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {DrawerActions} from '@react-navigation/native';
import assets from '../../utils/assets';
const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity
          style={styles.menusec}
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Image source={assets.menu} style={styles.menu} />
        </TouchableOpacity>
        <View style={styles.logosec}>
          <Image source={assets.logo} style={styles.logo} />
        </View>
        <View style={styles.hdtxtsec}>
          <Text style={styles.hdtext}>Personel Saftey Guide</Text>
        </View>
      </View>
      <View style={styles.datasec}>
        <FlatList
          data={assets.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.flview}>
              <View style={styles.flimgview}>
                <Image source={item.img} style={styles.flimg} />
              </View>
              <View style={styles.fltxtview}>
                <Text style={styles.fltxt}>{item.title}</Text>
                <Text>{item.data}</Text>
                <View>
                  <Text style={{textAlign: 'right'}}>Tap to know more</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    </View>
  );
};

export default Home;
