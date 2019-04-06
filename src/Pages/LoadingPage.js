import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Animated, Easing} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation' ;
import SvgUri from "react-native-svg-uri";
import Login from "../Component/Login";
import {connect} from "react-redux";

class LoadingPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rotation: new Animated.Value(0)
        }
    }
    
    componentDidMount() {
        this.navigate();
        this.animationRotation();
    }
    
    navigate = () => {
        setTimeout(() => this.props.navigation.navigate('Login'), 2000)
    };
    animationRotation = () => {
        Animated.timing(
            this.state.rotation,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.back(),
                useNativeDriver: true
            }
        ).start(() => this.animationRotation())
    };
    
    render() {
        return (
            <Animated.View style={[styles.className, {opacity: this.state.rotation}]}>
                <Animated.Text style={styles.welcomeText}>Purplux</Animated.Text>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cbcbcb'
    },
    welcomeText: {
        color: '#7768f3',
        fontSize: 45,
        fontFamily: 'cursive',
        fontWeight: '800'
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer,
    }
};
export default connect(mapStateToProps)(LoadingPage)
