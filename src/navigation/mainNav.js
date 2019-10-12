import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import login from '../screen/Login';
import navBar from './NavBarHome';
import editProfile from './NavBarHome';
import detailToon from '../screen/DetailToon';
import detailToonEps from '../screen/DetailToonEps';
// import editProfile from '../screen/EditProfile';
import myWebToon from '../screen/MyWebToon';
import creatWebToon from '../screen/CreateToon';
import addEps from '../screen/CreateEps';
import editWebtoon from '../screen/EditWebtoon';
import editEps from '../screen/EditEps';

const mainNav = createStackNavigator(
  {
    login: {
      screen: login,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    home: {
      screen: navBar,
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
    editProfile: {
      screen: editProfile,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    myWebToon: {
      screen: myWebToon,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    createWebToon: {
      screen: creatWebToon,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    addEps: {
      screen: addEps,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    editWebtoon: {
      screen: editWebtoon,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    editEps: {
      screen: editEps,
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
