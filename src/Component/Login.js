import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, Animated, Easing} from 'react-native';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from "../Routes/HomeDrawerStack";
import SignUp from "../Pages/SignUp";
import {connect} from "react-redux";
import {ThemeContext} from './themes-context'

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            usernameError: '',
            passwordError: '',
            transformX: new Animated.Value(70),
            transformY: new Animated.Value(-70),
            opacity: new Animated.Value(0),
        };
    }
    
    componentDidMount() {
        this.animationParallel()
    }
    
    animationParallel = () => ([
        Animated.timing(
            this.state.transformX,
            {
                toValue: 0,
                duration: 1000,
                // easing: Easing.back(),
                useNativeDriver: true
            }
        ).start(),
        Animated.timing(
            this.state.transformY,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }
        ).start(),
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start(),
    ])
    
    static navigationOptions = ({navigation}) => {
        return {
            headerTransparent: true,
        }
    };
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.className, {backgroundColor: theme.backgroundColor}]}>
                        <View style={styles.topArea}>
                            <Animated.View style={[styles.imageStyleView, {opacity: this.state.opacity}]}>
                                <Image
                                    source={require('../Assets/image/mainPagePhoto.png')}
                                    style={styles.imageBack}
                                />
                            </Animated.View>
        
                        </View>
                        {!!this.state.usernameError && (
                            <View style={styles.errorFieldView}>
                                <Text style={styles.errorFieldText}>{this.state.usernameError}</Text>
                            </View>
                        )}
                        <Animated.View style={[styles.textInputView, {
                            opacity: this.state.opacity,
                            transform: [{translateY: this.state.transformX}]
                        }]}>
                            <TextInput
                                placeholder={'User name'}
                                onChangeText={userName => this.setState({userName})}
                                value={this.state.text}/>
                        </Animated.View>
                        <Animated.View style={[styles.textInputView, {
                            opacity: this.state.opacity,
                            transform: [{translateY: this.state.transformY}]
                        }]}>
                            <TextInput
                                placeholder={'Password'}
                                onChangeText={password => this.setState({password})}
                                value={this.state.text}/>
                        </Animated.View>
                        <View style={styles.bottomArea}>
                            <TouchableOpacity onPress={() => {
                                if (this.state.userName.trim() === "" || this.state.password.trim() === "") {
                                    this.setState({usernameError: "Required fields are empty"});
                                } else {
                                    this.props.navigation.navigate('Home')
                                }
                            }}
                            >
                                <Animated.View style={[styles.loginButton, {opacity: this.state.opacity}]}>
                                    <Text style={styles.textStyleButton}>Login</Text>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                <View>
                                    <Text style={styles.textStyleButtonSignIn}>You don't have a account?</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </ThemeContext.Consumer>
            
        );
    }
}


const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    topArea: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomArea: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: '#8979f3',
        width: 150,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        elevation: 10
    },
    textStyleButton: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 17
    },
    textStyleButtonSignIn: {
        color: '#4d4d4d',
        fontWeight: '600',
        fontSize: 15
    },
    textInputView: {
        backgroundColor: '#cfcfcf',
        marginHorizontal: 30,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    imageBack: {
        width: deviceWidth / 1.5,
        height: deviceHeight / 2.5,
    },
    imageStyleView: {
        backgroundColor: '#edebf6',
        borderRadius: 200,
        width: deviceWidth - 60,
        height: deviceHeight / 2.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorFieldView: {
        backgroundColor: '#ff5954',
        marginHorizontal: 30,
        borderRadius: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorFieldText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer,
    }
};
export default connect(mapStateToProps)(Login)
