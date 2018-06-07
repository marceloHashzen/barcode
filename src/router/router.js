// import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { StackNavigator } from 'react-navigation';

import { Home, Camera } from '../screens';

const Router = StackNavigator(
  {
    Home,
    Camera,
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default Router;
