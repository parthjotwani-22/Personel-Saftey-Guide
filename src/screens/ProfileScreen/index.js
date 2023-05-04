import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import styles from './styles';
const Profile = props => {
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
        <View style={styles.photosec}>
          <TouchableOpacity style={styles.photo}>
            <Image source={assets.profile} style={styles.photo}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.namesec}>
          <Text style={styles.text}>Hello,</Text>
          <Text style={styles.text}>User123</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.maincontainer}>
          <View style={styles.detailsec}>
            <Text style={styles.detail}>Name : XYZZasdasd</Text>
          </View>
          <View style={styles.detailsec}>
            <Text style={styles.detail}>Phone : 12312553999</Text>
          </View>
          <View style={styles.detailsec}>
            <Text style={styles.detail}>Email : xyz@gmail.com</Text>
          </View>
          <View style={styles.detailsec}>
            <Text style={styles.detail}>
              Address : 123,abcsx soc, near Sb Road
            </Text>
          </View>
        </View>
        <View style={{flex: 0.3, flexDirection: 'row'}}>
          <View style={{flex: 0.6}}></View>
          <View style={styles.editsec}>
            <TouchableOpacity style={styles.editbttn}>
              <Text style={styles.edittxt}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
