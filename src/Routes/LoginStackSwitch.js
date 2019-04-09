import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import SignUp from '../Pages/SignUp';
import DrawerNavigator from './HomeDrawerStack';
import Login from '../Component/Login';

const RouteStack = createStackNavigator(
    {
        Login: Login,
        SignUp: SignUp,
    }
);

const RouteSwitch = createSwitchNavigator(
    {
        RouteStack: RouteStack,
        HomeSwitch: DrawerNavigator
    },
    {
        initialRouteName:'HomeSwitch'
    }
);
export default RouteSwitch
