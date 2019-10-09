import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import home from '../screen/Home';
import favorite from '../screen/Favorite';
import profile from '../screen/Profile';

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: home,
      // navigationOptions: ({navigation}) => ({
      //   header: null,
      //   tabBarLabel: 'Home',
      //   tabBarIcon: ({tintColor}) => (
      //     <Icon name="trash" color={{tintColor}} size={24} />
      //   ),
      // }),
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="th-large" color={tintColor} size={25} />
        ),
      },
    },
    Favorite: {
      screen: favorite,
      navigationOptions: {
        tabBarLabel: 'Favorite',
        tabBarIcon: ({tintColor}) => (
          <Icon name="star" color={tintColor} size={25} />
        ),
      },
    },
    Profile: {
      screen: profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon name="user-circle" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    intialRouteName: 'Home',
    order: ['Home', 'Favorite', 'Profile'],
    activeColor: 'orange',
    barStyle: {backgroundColor: 'white', paddingBottom: 15},
    borderTopColor: 'silver',
    borderTopWidth: 3,
  },
);
