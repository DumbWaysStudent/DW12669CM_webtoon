import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import login from '../screen/Login';
import navbar from './NavBarHome';
import detailToon from '../screen/DetailToon';

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
  },
  {
    initialRouteName: 'home',
  },
);

export default createAppContainer(mainNav);
