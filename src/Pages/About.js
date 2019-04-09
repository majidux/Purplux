import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {ThemeContext} from "../Component/themes-context";

class About extends Component {
    render() {
        let theme = this.context;
        return (
            <View style={[styles.className,{backgroundColor:theme.backgroundColor}]}>
                <View style={styles.aboutTitle}>
                    <Text style={[styles.fontDeveloperTextStyle,{color:theme.fontColor}]}>About</Text>
                </View>
                <View style={{flex:5}}>
                    <View style={styles.aboutName}>
                        <View style={styles.developerView}>
                            <Text style={[styles.fontDeveloperTextStyle,{color:theme.fontColor}]}>Description :</Text>
                        </View>
                        <View style={styles.developerView}>
                            <Text style={[styles.descriptionStyleText,{color:theme.fontColor}]}>A simple and user friendly Todo list application called Purplux</Text>
                        </View>
                    </View>
                    <View style={styles.developerViewParent}>
                        <View style={styles.developerView}>
                            <Text style={[styles.fontDeveloperTextStyle,{color:theme.fontColor}]}>Created and Developed by :</Text>
                        </View>
                        <View style={styles.developerView}>
                            <Text style={[styles.fontTextStyle,{color:theme.fontColor}]}>Majid Darvish Nejad</Text>
                        </View>
                    </View>
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
        // justifyContent:'center'
    },
    fontTextStyle:{
        fontSize:20,
        fontWeight:'800',
        fontFamily:'monospace'
    },
    fontDeveloperTextStyle:{
        fontSize:15,
        fontWeight:'800',
    },
    aboutTitle:{
        flex:1,
        borderBottomWidth:5,
        borderBottomColor: '#8979f3',
    },
    aboutName:{
        flex:4,
        paddingTop: 40,
    },
    developerView:{
        marginVertical:10
    },
    descriptionStyleText:{
        fontSize:13,
        fontWeight:'600',
        fontFamily: 'monospace',
        marginVertical: 5
    },
    developerViewParent:{
        flex:6
    }
});

const mapStateToProps = (state) => {
    return {
        theme: state.userReducer,
    }
};
export default connect(mapStateToProps)(About)
