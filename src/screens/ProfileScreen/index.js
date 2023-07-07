import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
const Profile = props => {
  const userData = useSelector(value => value.UserReducer);
  const data = userData.userData;
  console.log(userData);
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
          <Text style={styles.text}>{data.uname}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.maincontainer}>
          <View style={styles.detailsec}>
            <Text style={styles.detail}>Name : {data.uname}</Text>
          </View>
          <View style={styles.detailsec}>
            <Text style={styles.detail}>Phone : {data.phone}</Text>
          </View>
          <View style={styles.detailsec}>
            <Text style={styles.detail}>Email : {data.email}</Text>
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
    // <MapViewDirections
    //       origin={cordinates[0]}
    //       destination={cordinates[1]}
    //       apikey={'AIzaSyBJDeoXRmaYeS_IKyv9ceTsITKlVIowhYo'} // insert your API Key here
    //       strokeWidth={4}
    //       strokeColor="#111111"
    //     />
  );
};

export default Profile;
