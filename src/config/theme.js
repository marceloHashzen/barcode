import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

const NAVBAR_HEIGHT = Platform.select({ ios: 64, android: 50 });
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 0 });

const colors = {
  blue: '#5ca0d8',
  darkBlue: '#32638a',
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
};

const fonts = {
  text: 14,
  mediumText: 16,
  bigText: 18,
  hugeText: 24,
  title: 36,
  main: 'Quicksand-Regular',
};

const metrics = {
  iconSize: 24,
  bigIconSize: 36,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  smallGutter: 10,
  bigGutter: 20,

  navBarHeight: NAVBAR_HEIGHT,
  statusBarHeight: STATUS_BAR_HEIGHT,
};

export {
  colors,
  fonts,
  metrics,
};
