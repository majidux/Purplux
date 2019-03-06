import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation' ;
import AddTodo from "./AddTodo";

class LoadingPage extends Component {
    
    componentDidMount() {
        this.navigate();
    }
    
    navigate=()=>{
        setTimeout(()=>this.props.navigation.navigate('AddTodo'),4000)
    };
    
    render() {
        return (
            <View style={styles.className}>
                <Text style={{fontSize:30,color:'#000'}}>Loading</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
const RootSwitch = createSwitchNavigator(
    {
        LoadingPage:LoadingPage,
        AddTodo:AddTodo
    },
    {
        initialRouteName:'LoadingPage'
    }
);
export default createAppContainer(RootSwitch);
