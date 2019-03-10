import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Animated, Easing} from 'react-native';
import {createSwitchNavigator,createAppContainer,createStackNavigator} from 'react-navigation' ;
import AddTodo from "./AddTodo";
import SvgUri from "react-native-svg-uri";

class LoadingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation: new Animated.Value(100)
        }
    }
    componentDidMount() {
        this.navigate();
        this.animationRotation();
    }
    
    navigate=()=>{
        setTimeout(()=>this.props.navigation.navigate('AddTodo'),100)
    };
    animationRotation = () => {
        Animated.timing(
            this.state.rotation,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.back(),
                useNativeDriver: true
            }
        ).start(() => this.animationRotation())
    };
    render() {
        const rotateTransform = this.state.rotation.interpolate({
            inputRange: [0, 5, 10],
            outputRange: ['0deg', '180deg', '0deg']
        });
        return (
            <View style={styles.className}>
                <Animated.View style={{transform:[{rotate:rotateTransform}]}}>
                    <SvgUri
                        width={'200'}
                        height={'200'}
                        source={require('../Assets/image/homer-simpson.svg')}
                        strokeWidth={10}
                        stroke={'#000'}
                        strokeLinejoin={'bevel'}
                    />
                </Animated.View>
                <Text style={{fontSize:30,color:'#000'}}>Loading ...</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
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
