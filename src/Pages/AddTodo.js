import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Items from "../Component/Items";
import Done from "./Done";
import SendItem from "../Component/SendItem";
import Icon from "react-native-vector-icons/FontAwesome";

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
                
                <SendItem/>
                <Items/>
            </View>
        );
    }
}

const RouteTabNavigator = createMaterialBottomTabNavigator(
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
        }
    },
    {
        activeColor: '#575757',
        inactiveColor: '#c4c0c0',
        barStyle: {backgroundColor: '#fff'},
        labeled: false,
        backBehavior: 'initialRoute'
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
