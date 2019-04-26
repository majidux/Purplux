import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    Animated,
    Easing,
    StatusBar,
} from 'react-native';
import SignUp from "./SignUp";
import {connect} from "react-redux";
import {ThemeContext} from '../Component/themes-context'
import Title from "../Component/Title";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const Auth = {defaultUserName: 'majid', defaultPassword: '123'};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            fieldError: '',
            transformX: new Animated.Value(30),
            transformY: new Animated.Value(-30),
            opacity: new Animated.Value(0),
            scale: new Animated.Value(1),
            eye: true
        };
    }
    
    componentWillMount() {
        this.animationParallel()
    }
    
    animationParallel = () => {
        Animated.parallel([
            Animated.timing(
                this.state.transformX,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.transformY,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.scale,
                {
                    toValue: .7,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
        ]).start();
    };
    
    static navigationOptions = ({navigation}) => {
        return {
            headerTransparent: true,
        }
    };
    
    eyeFunc = () => {
        this.setState({eye: !this.state.eye})
    };
    _login = async() => {
        if (Auth.defaultUserName === this.state.userName && Auth.defaultPassword === this.state.password) {
            await AsyncStorage.setItem('userToken','1');
            this.props.navigation.navigate('HomeSwitch')
        } else {
            this.setState({fieldError: "Required fields are empty"});
        }
    };
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.className, {backgroundColor: theme.backgroundColor}]}>
                        <StatusBar backgroundColor={theme.backgroundColor}
                                   barStyle={theme.backgroundColor === '#f4f4f4' ? 'dark-content' : 'light-content'}/>
                        <View style={styles.topArea}>
                            <Animated.View style={[styles.imageStyleView, {opacity: this.state.opacity}]}>
                                <Image
                                    source={require('../Assets/image/mainPagePhoto.png')}
                                    style={styles.imageBack}
                                />
                            </Animated.View>
                        </View>
                        <Animated.View style={[styles.titleView, {
                            transform: ([
                                {scale: this.state.scale}
                            ])
                        }]}>
                            <Title/>
                        </Animated.View>
                        {!!this.state.fieldError && (
                            <View style={styles.errorFieldView}>
                                <Text style={[styles.errorFieldText]}>{this.state.fieldError}</Text>
                            </View>
                        )}
                        <Animated.View style={[styles.textInputView, {
                            opacity: this.state.opacity,
                            transform: [{translateY: this.state.transformX}]
                        }]}>
                            <TextInput
                                style={{justifyContent: 'center'}}
                                placeholder={'User name'}
                                onChangeText={userName => this.setState({userName})}
                                // value={this.state.text}
                                autoCapitalize={'none'}
                            />
                        </Animated.View>
                        <Animated.View style={[styles.textInputView, {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            opacity: this.state.opacity,
                            transform: [{translateY: this.state.transformY}]
                        }]}>
                            <TextInput
                                style={{justifyContent: 'center', flex: 10}}
                                placeholder={'Password'}
                                secureTextEntry={this.state.eye}
                                onChangeText={password => this.setState({password})}
                                // value={this.state.text}
                                autoCapitalize={'none'}
                            />
                            <TouchableOpacity onPressIn={this.eyeFunc} onPressOut={this.eyeFunc} style={{flex: 1}}>
                                <Icon name={'eye'} size={25}/>
                            </TouchableOpacity>
                        </Animated.View>
                        <View style={styles.bottomArea}>
                            <TouchableOpacity onPress={this._login}
                            >
                                <Animated.View style={[styles.loginButton, {opacity: this.state.opacity}]}>
                                    <Text style={styles.textStyleButton}>Login</Text>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Animated.View style={{opacity: this.state.opacity}}>
                                    <Text style={styles.textStyleButtonSignIn}>You don't have a account?</Text>
                                </Animated.View>
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
        paddingHorizontal: 30,
        paddingVertical: 10,
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
    },
    titleTop: {
        fontSize: 50,
        color: '#7768f3',
        fontWeight: '600',
        fontFamily: 'cursive'
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer,
    }
};
export default connect(mapStateToProps)(Login)
