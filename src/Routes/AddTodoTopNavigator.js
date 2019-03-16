import {createAppContainer, createMaterialTopTabNavigator} from "react-navigation";
import AddTodo from "../Pages/AddTodo";
import Done from "../Pages/Done";
import Failed from "../Pages/Failed";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const RouteTabNavigator = createMaterialTopTabNavigator(
    {
        AddTodo: {
            screen: AddTodo,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="list" size={30} color={color}/>
                )
            }
        },
        Done: {
            screen: Done,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="thumbs-up" size={30} color={color}/>
                )
            }
        },
        Failed: {
            screen: Failed,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="thumbs-down" size={30} color={color}/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#8979f3',
            inactiveTintColor: '#949494',
            showIcon: true,
            showLabel: false,
            labelStyle: {
                fontSize: 12,
                fontWeight: '700'
            },
            tabStyle: {
                flex:1
            },
            style: {
                backgroundColor: '#e7e7e7',
            },
        }
    }
);

export default createAppContainer(RouteTabNavigator)
