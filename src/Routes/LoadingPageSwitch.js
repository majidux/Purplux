import {createAppContainer, createSwitchNavigator} from "react-navigation";
import Login from "../Pages/Login";
import LoadingPage from "../Pages/LoadingPage";
import RouteStack from "./LoginStackSwitch";

const RootSwitchLoadingPage = createSwitchNavigator(
    {
        LoadingPage:LoadingPage,
        Login:RouteStack
    },
    {
        initialRouteName:'LoadingPage'
    }
);
export default createAppContainer(RootSwitchLoadingPage);
