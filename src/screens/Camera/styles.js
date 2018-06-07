import { StyleSheet, Platform } from 'react-native';

import { colors, metrics } from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: colors.blue,
    paddingTop: metrics.bigGutter + metrics.smallGutter,
    paddingBottom: metrics.smallGutter,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    color: colors.white,
    fontSize: metrics.iconSize,
    paddingHorizontal: metrics.smallGutter,
  },
  bigIcon: {
    fontSize: metrics.bigIconSize,
  },

  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mask: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: metrics.screenHeight,
    width: metrics.screenWidth,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 1,
  },
  middleLeft: {
    flex: 1,
  },
  middleRight: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },

  middleTop: {
    flex: 1,
    flexDirection: 'row',
  },
  middleCenter: {
    flex: 1,
  },
  middleBottom: {
    flex: 1,
    flexDirection: 'row',
  },
  middleTopLeft: {
    borderTopWidth: 4,
    borderTopColor: colors.blue,
    borderLeftWidth: 4,
    borderLeftColor: colors.blue,
    flex: 1,
    marginLeft: metrics.bigGutter + metrics.smallGutter,
  },
  middleTopCenter: {
    flex: 1,
  },
  middleTopRight: {
    borderTopWidth: 4,
    borderTopColor: colors.blue,
    borderRightWidth: 4,
    borderRightColor: colors.blue,
    flex: 1,
    marginRight: metrics.bigGutter + metrics.smallGutter,
  },
  middleBottomLeft: {
    borderBottomWidth: 4,
    borderBottomColor: colors.blue,
    borderLeftWidth: 4,
    borderLeftColor: colors.blue,
    flex: 1,
    marginLeft: metrics.bigGutter + metrics.smallGutter,
  },
  middleBottomCenter: {
    flex: 1,
  },
  middleBottomRight: {
    borderBottomWidth: 4,
    borderBottomColor: colors.blue,
    borderRightWidth: 4,
    borderRightColor: colors.blue,
    flex: 1,
    marginRight: metrics.bigGutter + metrics.smallGutter,
  },

  info: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
  },
  backIcon: {
    color: colors.white,
    fontSize: 36,
    marginHorizontal: metrics.bigGutter,
    marginVertical: metrics.smallGutter,
  },
});

export default styles;
