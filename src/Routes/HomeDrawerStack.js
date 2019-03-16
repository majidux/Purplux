import {createDrawerNavigator, createStackNavigator} from "react-navigation";
import About from "../Pages/About";
import Setting from "../Pages/Setting";
import Home from '../Pages/Home'

const RouteStack = createStackNavigator(
    {
        Home: Home,
        About:About,
        Setting:Setting
    },
    {
        initialRouteName: 'Home'
    }
);
const DrawerNavigator = createDrawerNavigator(
    {
        Home: RouteStack,
        About:About,
        Setting:Setting
    },
    {
        contentOptions:{
            activeTintColor:'#8979f3',
            inactiveTintColor:'#949494',
            drawerType:'slide',
            activeLabelStyle:{
                fontSize:20
            },
            inactiveLabelStyle:{
                fontSize: 16
            }
        }
    }
);
export default DrawerNavigator;
