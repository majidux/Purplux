import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class LogoArea extends Component {
    render() {
        return (
            <View style={styles.className}>
                <View>
                    <Image source={require('../Assets/image/logo.png')} style={styles.logoStyle}/>
                </View>
                <View>
                    <Text style={styles.nameTitle}>Purplux</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20
    },
    logoStyle:{
        width:50,
        height:50
    },
    nameTitle:{
        color:'#373737',
        fontSize:22,
        fontWeight:'600'
    }
});
