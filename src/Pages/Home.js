import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import AddTodo from "./AddTodo";
import LogoArea from "../Component/LogoArea";
import About from "./About";
import SvgUri from "react-native-svg-uri";
import Setting from "./Setting";

class Home extends Component {
    
    static navigationOptions = ({navigation}) => {
        return {
            headerRight:
                <View>
                    <LogoArea/>
                </View>,
            headerLeft:
                <View style={styles.drawerButton}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <View>
                            <SvgUri
                                width={'24'}
                                height={'24'}
                                source={require('../Assets/image/three-lines.svg')}
                                strokeWidth={10}
                                stroke={'#000'}
                                strokeLinejoin={'bevel'}
                                fill={'#e45'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>,
        }
    };
    
    render() {
        return (
            <View style={styles.className}>
                <AddTodo/>
            </View>
        );
    }
}

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

const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    drawerButton: {
        marginLeft: 20
    }
});
