import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
                <TouchableOpacity onPress={()=>this.props.navigation.navigate}>
                    <Text>Enter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const RouteStack = createStackNavigator(
    {
        Home: Home,
        AddTodo:AddTodo
    }
);

export default RouteStack;

const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
