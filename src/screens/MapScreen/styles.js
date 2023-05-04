import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchinp: {
    height: 40,
    flex: 0.8,
    borderRadius: 20,
    backgroundColor: colors.lightpurple,
    borderWidth: 2,
    borderColor: colors.purple,
    padding: 10,
    marginRight: 10,
  },
  menu: {
    height: 50,
    marginLeft: 10,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.purple,
    justifyContent: 'center',
  },
  options: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
    borderColor: colors.white,
    borderWidth: 4,
  },
  menuimg: {
    height: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.white,
  },
  optimg: {
    height: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.white,
  },
  text: {
    fontSize: 35,
    color: colors.purple,
    fontWeight: '600',
    fontFamily: 'sans-serif-condensed',
  },
  bttnsec: {
    flex: 0.2,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
