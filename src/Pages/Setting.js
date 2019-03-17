import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Picker, Animated, TouchableOpacity, TextInput} from 'react-native';
import {changeTheme} from '../Service/usersApi/usersAction';
import {connect} from 'react-redux';
import ThemedButton from "../Component/themed-button";
import {ThemeContext, themes} from "../Component/themes-context";

Toolbar = (props) => {
    return (
        <ThemedButton onPress={props.changeTheme}>
            Changer
        </ThemedButton>
    )
    
}

class Setting extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };
        
    }
    
    toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         theme: true,
    //     }
    // }
    
    
    // sendThemeChange = () => {
    //     this.setState({theme:!this.state.theme})
    //     let changer = this.state.theme
    //     this.props.changeTheme(changer)
    // }
    
    
    render() {
        return (
            
                
                <View style={ {flex:1, backgroundColor: this.context.backgroundColor}}>
                
                
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
export default connect(mapStateToProps, {changeTheme})(Setting)
