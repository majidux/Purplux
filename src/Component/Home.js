import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AddTodo from "../Pages/AddTodo";
import {createStackNavigator} from 'react-navigation';
import LogoArea from "./LogoArea";

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
        Home: Home,
    }
);

export default RouteStack;

const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
