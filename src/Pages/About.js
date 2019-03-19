import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";

class About extends Component {
   
    render() {
        return (
            <View style={this.props.theme.theme ? [styles.className, {backgroundColor: 'red'}] : styles.className}>
                <Text style={styles.fontTextStyle}>Majid darvish nejad</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        paddingLeft:20,
        paddingTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ee9096'
    },
    fontTextStyle:{
        color:'#000',
        fontSize:20
        
    }
});

const mapStateToProps = (state) => {
    return {
        theme: state.userReducer,
    }
};
export default connect(mapStateToProps)(About)
