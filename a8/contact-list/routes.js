import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import User from './screens/User';

const StackNavigator = createStackNavigator({
    Contacts,
    Profile,
    User
    },
    {
      initialRouteName: 'User',
});

export default createAppContainer(StackNavigator);