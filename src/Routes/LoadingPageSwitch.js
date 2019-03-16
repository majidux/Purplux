import {createAppContainer, createSwitchNavigator} from "react-navigation";
import Login from "../Component/Login";
import LoadingPage from "../Pages/LoadingPage";

const RootSwitchLoadingPage = createSwitchNavigator(
    {
        LoadingPage:LoadingPage,
        Login:Login
    },
    {
        initialRouteName:'LoadingPage'
    }
);
export default createAppContainer(RootSwitchLoadingPage);
