import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Picker, Animated, TouchableOpacity, TextInput} from 'react-native';
import {themeChanger} from '../Service/usersApi/usersAction';
import {connect} from 'react-redux';
import {ThemeContext} from "../Component/themes-context";


class Setting extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            button:true
        };
    }
    
    toggleTheme = () => {
        this.props.themeChanger()
    };
    
    buttonStyleChanger = () =>{
        this.setState({button:!this.state.button})
    };
    
    render() {
        return (
            
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.setting,{backgroundColor:theme.backgroundColor}]}>
                        <Text style={{color:theme.fontColor,fontWeight: '600'}}>Theme</Text>
                        <TouchableOpacity onPress={this.toggleTheme}>
                            <View style={[styles.button]}>
                                <View style={[styles.buttonWrapper,]}></View>
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
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button:{
        backgroundColor:'#e85',
        width: 60,
        height: 25,
        justifyContent:'center',
        // paddingHorizontal:20,
        borderRadius:50,
        alignItems:'flex-end'
    },
    buttonWrapper:{
        width:20,
        height:20,
        backgroundColor:'#ff4b5d',
        borderRadius:50
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer
    }
}
export default connect(mapStateToProps, {themeChanger})(Setting)
