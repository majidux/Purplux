import {createDrawerNavigator} from 'react-navigation';
import Home from "../Pages/Home";
import About from "../Pages/About";
import AddTodo from "../Pages/AddTodo";

const DrawerNavigator = createDrawerNavigator(
    {
        AddTodo:AddTodo,
        About:About
    }
);
export default DrawerNavigator;
