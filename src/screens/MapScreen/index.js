import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import assets from '../../utils/assets';
import styles from './styles';
const Map = props => {
  return (
    <ImageBackground style={styles.container} source={assets.mapbg}>
      <View style={styles.header}>
        <View style={{flex: 0.2}}>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => {
              props.navigation.openDrawer();
            }}>
            <Image style={styles.menuimg} source={assets.menu} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.searchinp} placeholder={'Enter Location'} />
      </View>
      <View style={{flex: 0.5}}></View>
      <View style={{flex: 0.3, alignSelf: 'flex-start', flexDirection: 'row'}}>
        <View style={styles.bttnsec}>
          <TouchableOpacity style={styles.options}>
            <Image style={styles.menuimg} source={assets.firetruck} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.options}>
            <Image style={styles.menuimg} source={assets.hospital} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.options}>
            <Image style={styles.menuimg} source={assets.police} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Map;
