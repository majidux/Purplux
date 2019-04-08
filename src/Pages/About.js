import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {ThemeContext} from "../Component/themes-context";
import {NavigationEvents} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

class About extends Component {
    
  
    
    render() {
        let theme = this.context;
        return (
            <View style={[styles.className,{backgroundColor:theme.backgroundColor}]}>
                <View style={styles.aboutTitle}>
                    <Text style={{color:theme.fontColor}}>About</Text>
                </View>
                <View style={styles.aboutName}>
                    <Text style={[styles.fontTextStyle,{color:theme.fontColor}]}>Majid darvish nejad</Text>
                </View>
            </View>
        );
    }
}
About.contextType=ThemeContext;
const styles = StyleSheet.create({
    className: {
        flex: 1,
        padding:20,
        justifyContent:'center',
        // alignItems:'center',
    },
    fontTextStyle:{
        color:'#000',
        fontSize:20
        
    },
    aboutTitle:{
        flex:1,
        borderBottomWidth:5,
        borderBottomColor: '#55f',
    },
    aboutName:{
        flex:4,
        paddingVertical: 50,
    }
});

const mapStateToProps = (state) => {
    return {
        theme: state.userReducer,
    }
};
export default connect(mapStateToProps)(About)
