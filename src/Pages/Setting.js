import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Picker, Animated, TouchableOpacity, TextInput} from 'react-native';
import {themeChanger} from '../Service/usersApi/usersAction';
import {connect} from 'react-redux';
import ThemedButton from "../Component/themed-button";
import {ThemeContext, themes} from "../Component/themes-context";


class Setting extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        
    }
    
    toggleTheme = () => {
        this.props.themeChanger()
    };
    
    render() {
        return (
            
            
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={this.toggleTheme}>
                    <Text>PRESS CHANGE THEME</Text>
                </TouchableOpacity>
            </View>
        
        
        );
    }
}

const styles = StyleSheet.create({
    light: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dark: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        backgroundColor: '#373737',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lightFont: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
    darkFont: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer
    }
}
export default connect(mapStateToProps, {themeChanger})(Setting)
