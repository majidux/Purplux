import React, {Component} from 'react';
import {StyleSheet, Animated, StatusBar, View} from 'react-native';
import Login from "../Component/Login";
import {connect} from "react-redux";
import Title from "../Component/Title";
import {ThemeContext} from "../Component/themes-context";

class LoadingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0)
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
            this.state.opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start(() => this.animationRotation());
    };
    
    render() {
        let theme = this.context;
        return (
            <Animated.View style={[styles.className, {opacity: this.state.opacity}]}>
                <StatusBar backgroundColor={'#cbcbcb'} barStyle={'dark-content'}/>
                <Title/>
            </Animated.View>
        );
    }
}
LoadingPage.contextType=ThemeContext;

const styles = StyleSheet.create({
    className: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cbcbcb'
    },
    welcomeText: {
        color: '#7768f3',
        fontSize: 50,
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
