import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {
    flex: 0.3,
    backgroundColor: colors.purple,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 25,
  },
  photosec: {
    flex: 0.3,
    justifyContent: 'center',
    marginLeft: 10,
  },
  photo: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  namesec: {
    flex: 0.4,
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    color: colors.white,
    fontWeight: '600',
    fontFamily: 'sans-serif-condensed',
  },
  body: {
    flex: 0.6,
    alignContent: 'center',
    padding: 20,
    overflow: 'hidden',
  },
  maincontainer: {
    padding: 50,
    flex: 0.7,
    width: '100%',
    backgroundColor: colors.lightpurple,
    borderColor: colors.purple,
    borderWidth: 5,
    borderRadius: 50,
    justifyContent: 'center',
  },
  detail: {
    fontSize: 20,
    color: colors.black,
  },
  detailsec: {
    margin: 10,
    justifyContent: 'center',
  },
  editsec: {
    flex: 0.4,
    alignSelf: 'flex-end',
  },
  editbttn: {
    height: 70,
    width: 150,
    borderRadius: 80 / 2,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: colors.lightpurple,
  },
  edittxt: {
    fontSize: 25,
    color: colors.white,
    fontWeight: '700',
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
    left: 0,
    backgroundColor: colors.lightpurple,
    borderBottomRightRadius: 70 / 2,
    position: 'absolute',
  },
});
