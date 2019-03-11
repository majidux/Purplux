import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AddTodo from "../Pages/AddTodo";
import {createStackNavigator,createSwitchNavigator} from 'react-navigation';
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
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddTodo',{name:'Home page'})}>
                    <Text style={{fontSize:30}}>Enter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const RouteStack = createSwitchNavigator(
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
