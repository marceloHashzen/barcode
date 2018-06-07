import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  titleArea: {
    marginTop: metrics.bigGutter * 3,
    marginBottom: metrics.bigGutter * 4,
  },
  titleText: {
    color: colors.blue,
    fontSize: fonts.hugeText,
    textAlign: 'center',
    fontFamily: fonts.main,
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 100,
    width: metrics.screenWidth / 2,
    height: metrics.screenWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcode: {
    width: 100,
    height: 100,
  }
});

export default styles;
