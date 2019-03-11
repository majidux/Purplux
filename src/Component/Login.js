import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class Login extends Component {
    
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
                <View style={styles.textInputView}>
                    <TextInput placeholder={'User name'}/>
                </View>
                <View style={styles.textInputView}>
                    <TextInput placeholder={'Password'}/>
                </View>
                <View style={styles.bottomArea}>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={styles.loginButton}>
                            <Text style={styles.textStyleButton}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                        <View>
                            <Text style={styles.textStyleButtonSignIn}>Have already account?</Text>
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
        Home: Home
    }
);

export default RouteSwitch;

const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#f4f4f4',
    },
    topArea: {
        flex: 2,
        alignItems:'center',
        justifyContent:'center',
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
        borderRadius:30,
        elevation:10
    },
    textStyleButton:{
        color:'#fff',
        fontWeight:'600',
        fontSize:17
    },
    textStyleButtonSignIn:{
        color:'#4d4d4d',
        fontWeight:'600',
        fontSize:15
    },
    textInputView:{
        backgroundColor:'#cfcfcf',
        marginHorizontal:30,
        borderRadius: 5,
        paddingHorizontal:10,
        marginVertical:10,
    },
    imageBack:{
        width:deviceWidth/1.5,
        height:deviceHeight/2.5,
    },
    imageStyleView:{
        backgroundColor:'#edebf6',
        borderRadius:200,
        width:deviceWidth-60,
        height:deviceHeight/2.2,
        justifyContent:'center',
        alignItems:'center'
    }
});
