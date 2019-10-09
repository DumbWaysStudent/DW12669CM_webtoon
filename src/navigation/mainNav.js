import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import login from '../screen/Login';
import navbar from './NavBarHome';

const mainNav = createStackNavigator({
  login: {
    screen: login,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  navbar: {
    screen: navbar,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});

export default createAppContainer(mainNav);
