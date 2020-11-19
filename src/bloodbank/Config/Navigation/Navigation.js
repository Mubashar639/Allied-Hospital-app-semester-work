import React from 'react';
import Login from './../../Screens/Login/Login';
import Signup from './../../Screens/Signup/Signup';
import Myhome from './../../Screens/Home/Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Post from '../../Screens/Post/Post';
import Notification from '../../Screens/Notification/Notification';
import Settings from '../../Screens/Settings/Settings';
import MyRequests from '../../Screens/MyRequests/Myrequests';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../../Components/MyProfile/Myprofile';
import {View, Text} from 'native-base';
import PostDetail from '../../Screens/DetailPost/DetailPost';
import ScanScreen from '../../../components/qrCodeScanner';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Myhome,
    navigationOptions: {
      drawerIcon: () => <Ionicons name="md-home" size={24} />,
    },
  },
  ScanScreen: {
    screen: ScanScreen,
    navigationOptions: {
      drawerIcon: () => <Ionicons name="md-home" size={24} />,
    },
  },
  CreatePost: {
    screen: Post,
    navigationOptions: {
      drawerIcon: () => <Ionicons name="ios-create" size={24} />,
    },
  },
  MyRequests: {
    screen: MyRequests,
    navigationOptions: {
      drawerIcon: () => <Ionicons name="md-contacts" size={24} />,
    },
  },

  Notification: {
    screen: Notification,

    navigationOptions: {
      drawerIcon: () => <Ionicons name="md-notifications" size={24} />,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerIcon: () => <Ionicons name="md-settings" size={24} />,
    },
  },
});
const AppNavigator = createStackNavigator({
  Home: {
    screen: MyDrawerNavigator,
    navigationOptions: {headerShown: false},
  },
  Login: {
    screen: Login,
    navigationOptions: {headerShown: false},
  },
  Signup: {
    screen: Signup,
    navigationOptions: {headerShown: false},
  },
  PostDetail: {
    screen: PostDetail,
    // navigationOptions: { header: null }
  },
});

export default createAppContainer(AppNavigator);
