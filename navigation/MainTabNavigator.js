import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddMediaScreen from '../screens/AddMediaScreen';
import LikeScreen from '../screens/LikeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : `md-home`
      }
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

const AddMediaStack = createStackNavigator({
  AddMedia: AddMediaScreen,
});

AddMediaStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add${focused ? '' : '-outline'}`
          : `md-add`
      }
    />
  ),
};

const LikeStack = createStackNavigator({
  Like: LikeScreen,
});

LikeStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-heart${focused ? '' : '-outline'}`
          : `md-heart`
      }
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-user${focused ? '' : '-outline'}`
          : `md-happy`
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  AddMediaStack,
  LikeStack,
  ProfileStack
});
