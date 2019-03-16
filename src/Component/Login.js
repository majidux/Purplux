import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, Button} from 'react-native';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from "../Routes/HomeDrawerStack";
import SignUp from "../Pages/SignUp";
import {connect} from "react-redux";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            lastName:''
        };
    }
    
    static navigationOptions = ({navigation}) => {
        return {
            headerTransparent: true,
        }
    };
    
    render() {
        return (
            <View style={styles.className}>
                <View style={styles.topArea}>
                    <View style={styles.imageStyleView}>
                        <Image
                            source={require('../Assets/image/mainPagePhoto.png')}
                            style={styles.imageBack}
                        />
                    </View>
                
                </View>
                {!!this.state.nameError && (
                    <View style={styles.errorFieldView}>
                        <Text style={styles.errorFieldText}>{this.state.nameError}</Text>
                    </View>
                )}
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder={'User name'}
                        onChangeText={userName => this.setState({userName})}
                        value={this.state.text}/>
                </View>
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder={'Password'}
                        onChangeText={lastName => this.setState({lastName})}
                        value={this.state.text}/>
                </View>
                <View style={styles.bottomArea}>
                    <TouchableOpacity onPress={() => {
                        if (this.state.userName.trim() === "" || this.state.lastName.trim() === "") {
                            this.setState({nameError: "You need to type your User name and password"});
                        } else {
                            this.props.navigation.navigate('Home')
                        }
                    }}>
                        <View style={styles.loginButton}>
                            <Text style={styles.textStyleButton}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                        <View>
                            <Text style={styles.textStyleButtonSignIn}>You don't have a account?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const RouteStack = createStackNavigator(
    {
        Login: Login,
        SignUp: SignUp,
    }
);

const RouteSwitch = createSwitchNavigator(
    {
        RouteStack: RouteStack,
        Home: DrawerNavigator
    }
);


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
    errorFieldView:{
        backgroundColor: '#ff5954',
        marginHorizontal: 30,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    errorFieldText:{
        color:'#fff',
        fontWeight:'600',
        fontSize:16
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer,
    }
};
export default connect(mapStateToProps)(RouteSwitch)
