import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import assets from '../../utils/assets';
import styles from './styles';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {useRef} from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Map = props => {
  const mapRef = useRef(null);
  const hospRegion = {
    latitude: 23.13616,
    longitude: 72.54143,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const fireRegion = {
    latitude: 23.01287,
    longitude: 72.47159,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const policeRegion = {
    latitude: 23.02953,
    longitude: 72.479,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const initialRegion = {
    latitude: 22.990885,
    longitude: 72.487312,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const goToHosp = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(hospRegion, 2 * 1000);
  };
  const goToFire = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(fireRegion, 2 * 1000);
  };
  const goToPolice = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(policeRegion, 2 * 1000);
  };
  return (
    // <ImageBackground style={styles.container} source={assets.mapbg}>
    //   <View style={styles.header}>
    //     <View style={{flex: 0.2}}>
    //       <TouchableOpacity
    //         style={styles.menu}
    //         onPress={() => {
    //           props.navigation.openDrawer();
    //         }}>
    //         <Image style={styles.menuimg} source={assets.menu} />
    //       </TouchableOpacity>
    //     </View>
    //     <TextInput style={styles.searchinp} placeholder={'Enter Location'} />
    //   </View>
    //   <View style={{flex: 0.5}}></View>
    //   <View style={{flex: 0.3, alignSelf: 'flex-start', flexDirection: 'row'}}>
    //     <View style={styles.bttnsec}>
    //       <TouchableOpacity style={styles.options}>
    //         <Image style={styles.menuimg} source={assets.firetruck} />
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.options}>
    //         <Image style={styles.menuimg} source={assets.hospital} />
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.options}>
    //         <Image style={styles.menuimg} source={assets.police} />
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </ImageBackground>
    <View style={StyleSheet.absoluteFill}>
      <MapView
        style={{flex: 1}}
        showsUserLocation={true}
        ref={mapRef}
        initialRegion={{
          latitude: 22.990885,
          longitude: 72.487312,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={{latitude: 22.990885, longitude: 72.487312}}
          destination={{latitude: 23.02953, longitude: 72.479}}
          apikey={'AIzaSyBJDeoXRmaYeS_IKyv9ceTsITKlVIowhYo'} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={hospRegion}></Marker>
        <Marker coordinate={fireRegion}></Marker>
        <Marker coordinate={policeRegion}></Marker>
        <Marker coordinate={initialRegion} pinColor="blue"></Marker>
      </MapView>
      <View
        style={{
          flex: 0.3,
          position: 'absolute',
          alignSelf: 'flex-start',
          flexDirection: 'row',
        }}>
        <View style={styles.bttnsec}>
          <TouchableOpacity style={styles.options} onPress={goToFire}>
            <Image style={styles.menuimg} source={assets.firetruck} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={goToHosp}>
            <Image style={styles.menuimg} source={assets.hospital} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={goToPolice}>
            <Image style={styles.menuimg} source={assets.police} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Map;
