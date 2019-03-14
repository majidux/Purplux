import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SvgUri from "react-native-svg-uri";

export default class LogoArea extends Component {
    
    
    render() {
        return (
            <View style={styles.className}>
                <View>
                    <Image source={require('../Assets/image/PurpleLogo.png')} style={styles.logoStyle}/>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <View>
                        <SvgUri
                            width={'24'}
                            height={'24'}
                            source={require('../Assets/image/three-lines.svg')}
                            strokeWidth={10}
                            stroke={'#000'}
                            strokeLinejoin={'bevel'}
                            fill={'#e45'}
                        />
                    </View>
                </TouchableOpacity>
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
        width: 140,
        height: 45
    },
    nameTitle: {
        color: '#52286d',
        fontSize: 22,
        fontWeight: '600'
    }
});
