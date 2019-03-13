import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class LogoArea extends Component {
    render() {
        return (
            <View style={styles.className}>
                <View>
                    <Image source={require('../Assets/image/PurpleLogo.png')} style={styles.logoStyle}/>
                </View>
                <View>
                    <Image
                        source={require('../Assets/image/logo.png')}
                        style={{width:50,height:50}}
                    />
                    {/*<Text style={styles.nameTitle}>Your tasks</Text>*/}
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
        width:140,
        height:45
    },
    nameTitle:{
        color:'#52286d',
        fontSize:22,
        fontWeight:'600'
    }
});
