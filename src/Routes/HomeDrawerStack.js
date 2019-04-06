import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import About from '../Pages/About';
import Setting from '../Pages/Setting';
import Home from '../Pages/Home'
import DrawerItems from '../Component/DrawerItems';
const RouteStack = createStackNavigator(
    {
        Home: Home,
        About: About,
        Setting: Setting
    },
    {
        initialRouteName: 'Home'
    },
    {
        contentOptions :{
            style:{
                backgroundColor:'red'
            }
}
    }
);
const DrawerNavigator = createDrawerNavigator(
    {
        Home: RouteStack,
        About: About,
        Setting: Setting
    },
    {
        // contentComponent :DrawerItems,
        contentOptions: {
                activeTintColor: '#8979f3',
                inactiveTintColor: '#949494',
                activeLabelStyle: {
                    fontSize: 20
                },
                inactiveLabelStyle: {
                    fontSize: 16
                },
        }
    }
);
export default DrawerNavigator;
