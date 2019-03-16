import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class LogoArea extends Component {
    
    
    render() {
        return (
            <View style={styles.className}>
                <View>
                    <Image source={require('../Assets/image/PurpleLogo.png')} style={styles.logoStyle}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    logoStyle: {
        width: 100,
        height: 40
    },
    nameTitle: {
        color: '#52286d',
        fontSize: 22,
        fontWeight: '600'
    }
});
