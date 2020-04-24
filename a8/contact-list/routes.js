import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MaterialIcons} from '@expo/vector-icons';

import Contacts from './screens/Contacts';
import Favorites from './screens/Favorites';
import Profile from './screens/Profile';
import User from './screens/User';

import colors from './utils/colors';

const getTabBarIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={26} style={{color: tintColor}} />
);

const ContactsScreen = createStackNavigator({
    Contacts,
    Profile,
},{
    initialRouteName: 'Contacts',
    navigationOptions:{
        tabBarIcon: getTabBarIcon('list'),
    },
},);
const FavoritesScreens = createStackNavigator({
    Favorites,
    Profile,
},{
    initialRouteName: 'Favorites',
    navigationOptions: {
        tabBarIcon: getTabBarIcon('star'),
    },
},);
const UserScreens = createStackNavigator({
    User,
},{
    initialRouteName: 'User',
    navigationOptions: {
        tabBarIcon: getTabBarIcon('person'),
    },
},);

const TabNavigator = createBottomTabNavigator({
    Contacts: ContactsScreen,
    Favorites: FavoritesScreens,
    User: UserScreens,
},{
    initialRouteName: 'Contacts',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            backgroundColor: colors.greyLight,
        },
        showLabel: false,
        showIcon: true,
        activeTintColor: colors.blue,
        inactiveTintColor: colors.greyDark,
    },
},);

export default createAppContainer(TabNavigator);