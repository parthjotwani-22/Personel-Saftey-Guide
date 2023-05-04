import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 35,
    color: colors.purple,
    fontWeight: '600',
    fontFamily: 'sans-serif-condensed',
  },
  head: {
    flex: 0.35,
    backgroundColor: colors.purple,
  },
  logosec: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    height: '60%',
    width: '40%',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: '5%',
  },
  logo: {
    height: '60%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  hdtxtsec: {
    margin: 10,
    alignSelf: 'center',
  },
  hdtext: {
    fontSize: 35,
    color: colors.white,
    fontWeight: '600',
    fontFamily: 'sans-serif-condensed',
  },
  menu: {
    height: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.white,
  },
  menusec: {
    height: 70,
    width: 70,
    backgroundColor: colors.lightpurple,
    borderBottomRightRadius: 70 / 2,
    position: 'absolute',
  },
  datasec: {
    flex: 0.65,
    paddingHorizontal: 10,
    paddingBottom: '30%',
    justifyContent: 'center',
  },
  flview: {
    margin: 20,
    height: 120,
    width: 330,
    backgroundColor: colors.lightpurple,
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 20,
    borderColor: colors.purple,
    borderWidth: 5,
    alignSelf: 'center',
  },
  flimgview: {
    flex: 0.35,
    overflow: 'hidden',
  },
  fltxtview: {
    flex: 0.65,
    padding: 10,
  },
  flextra: {
    flex: 0.2,
  },
  fltxt: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'sans-serif-condensed',
    fontWeight: '400',
  },
  flimg: {
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default styles;
