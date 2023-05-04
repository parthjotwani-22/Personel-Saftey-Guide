import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textinpview: {
    width: '100%',
    height: 70,
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 10,
    borderColor: colors.purple,
    borderWidth: 3,
    backgroundColor: colors.white,
  },
});
