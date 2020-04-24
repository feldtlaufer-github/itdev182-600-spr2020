import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Contacts from './screens/Contacts';
import Favorites from './screens/Favorites';
import User from './screens/User';

const TabNavigator = createBottomTabNavigator({
    Contacts,
    Favorites,
    User,
});

export default createAppContainer(TabNavigator);