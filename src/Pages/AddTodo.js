import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Items from "../Component/Items";
import Done from "./Done";
import SendItem from "../Component/SendItem";
import Icon from "react-native-vector-icons/FontAwesome";
import Failed from "./Failed";

const gradientColor = '#bdbdbd';
const data = Array.from({length: 500});

class AddTodo extends Component {
    
    
    render() {
        return (
            <View style={styles.className}>
                
                {data.map((_, i) => (
                    <View key={i} style={[styles.backGround,
                        {
                            opacity: (1 / 500) * (i + 1),
                            bottom: (500 - i),
                        }]}
                    />
                ))}
                
                
                <Items/>
                <SendItem/>
            </View>
        );
    }
}

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
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#414141',
            inactiveTintColor: '#949494',
            showIcon: true,
            showLabel: false,
            labelStyle: {
                fontSize: 12,
                fontWeight: '700'
            },
            tabStyle: {
                width: 100,
            },
            style: {
                backgroundColor: '#e7e7e7',
            },
        }
    },
    {
        initialRouteName: 'AddTodo'
    }
);
export default createAppContainer(RouteTabNavigator)

const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor: '#e8e3e3'
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: -2,
    },
});
