import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {addUserData} from '../Service/usersApi/usersAction';
import {connect} from 'react-redux'

class SignUp extends Component {
    
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Sign Up'
        }
    }
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    
    userNameSetState = (username) => {
        this.setState({username: username})
    }
    
    emailSetState = (email) => {
        this.setState({email: email})
    }
    
    passwordSetState = (password) => {
        this.setState({password: password})
    }
    
    userNameFunc = () => {
        if (!this.state.username.length) {
            return;
        } else {
            let username = this.state.username;
            let email = this.state.email;
            let password = this.state.password;
            this.props.addUserData(username,email,password);
            this.setState({username: ''})
            this.props.navigation.navigate('Login')
        }
    }
    
    
    render() {
        return (
            <View style={styles.className}>
                <View style={styles.signUpTextArea}>
                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            placeholder={'User name'}
                            onChangeText={this.userNameSetState.bind(this)}
                        />
                    </View>
                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            placeholder={'Email'}
                            onChangeText={this.emailSetState.bind(this)}
                        />
                    </View>
                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            placeholder={'Password'}
                            onChangeText={this.passwordSetState.bind(this)}
                        />
                    </View>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity onPress={this.userNameFunc}>
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
const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}
export default connect(mapStateToProps, {addUserData})(SignUp);
