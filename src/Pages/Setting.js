import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Picker, Animated, TouchableOpacity, TextInput} from 'react-native';
import {themeChanger} from '../Service/usersApi/usersAction';
import {connect} from 'react-redux';
import {ThemeContext} from "../Component/themes-context";


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
            
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.setting,{backgroundColor:theme.backgroundColor}]}>
                        <TouchableOpacity onPress={this.toggleTheme}>
                            <View style={styles.button}>
                                <Text style={{color:theme.color}}>PRESS CHANGE THEME</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </ThemeContext.Consumer>
        
        
        );
    }
}

const styles = StyleSheet.create({
    setting: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer
    }
}
export default connect(mapStateToProps, {themeChanger})(Setting)
