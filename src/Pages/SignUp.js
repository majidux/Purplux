import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class SignUp extends Component {
    
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Sign Up'
        }
    }
    
    render() {
        return (
            <View style={styles.className}>
                <View style={styles.signUpTextArea}>
                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            placeholder={'User name'}
                        />
                    </View>
                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            placeholder={'Email'}
                        />
                    </View>
                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            placeholder={'Password'}
                        />
                    </View>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <View style={styles.signUpButton}>
                                <Text style={styles.textStyleButton}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        marginTop: 10
    },
    signUpTextArea: {
        flex: 1
    },
    textInputViewStyle: {
        backgroundColor: '#cfcfcf',
        marginHorizontal: 30,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    signUpButton: {
        backgroundColor: '#8979f3',
        width: 150,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        elevation: 10
    },
    buttonArea: {
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    textStyleButton: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 17
    },
});
