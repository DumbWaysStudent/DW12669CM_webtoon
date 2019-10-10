import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import login from '../screen/Login';
import navbar from './NavBarHome';
import detailToon from '../screen/DetailToon';
import detailToonEps from '../screen/DetailToonEps';

const mainNav = createStackNavigator(
  {
    login: {
      screen: login,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    home: {
      screen: navbar,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    detailToon: {
      screen: detailToon,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    detailToonEps: {
      screen: detailToonEps,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'login',
  },
);

export default createAppContainer(mainNav);
