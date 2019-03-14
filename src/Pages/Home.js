import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import AddTodo from "./AddTodo";
import LogoArea from "../Component/LogoArea";
import DrawerNavigator from "../Routes/DrawerNavigator";

class Home extends Component {
    
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: LogoArea,
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
        Home:Home,
        DrawerNavigator:DrawerNavigator
    },
    {
        initialRouteName:'Home'
    }
);

export default RouteStack;
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
