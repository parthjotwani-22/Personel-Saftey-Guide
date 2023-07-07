import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.purple,
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigtext: {
    fontSize: 25,
    color: colors.white,
    fontWeight: '600',
  },
  flcontainer: {
    marginVertical: 20,
    flex: 0.85,
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  flbox: {
    backgroundColor: colors.lightpurple,
    borderColor: colors.purple,
    borderWidth: 4,
    height: Dimensions.get('screen').height / 5,
    width: Dimensions.get('screen').width / 1.1,
    borderRadius: 20,
    marginVertical: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  flimgview: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  fldescview: {
    flex: 0.6,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  flbigText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '500',
  },
});
export default style;
