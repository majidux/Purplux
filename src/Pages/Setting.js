import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Picker,
    Animated,
    TouchableOpacity,
    LayoutAnimation,
    UIManager
} from 'react-native';
import {themeChanger} from '../Service/usersApi/usersAction';
import {connect} from 'react-redux';
import {ThemeContext} from "../Component/themes-context";
import {NavigationEvents} from "react-navigation";
import LogoArea from "../Component/LogoArea";
import Icon from "react-native-vector-icons/Ionicons";


UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class Setting extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            button: new Animated.Value(true)
        };
    }
    
    
    
    animate = {
        duration: 1000,
        create: {
            property: 'scaleXY',
            type: 'spring',
            duration: 1000,
            springDamping: 0.2
        },
        update: {
            property: 'scaleXY',
            type: 'easeOut',
            duration: 400,
            springDamping: 0.4,
            initialVelocity: .1
        },
        delete: {
            property: 'scaleXY',
            type: 'spring',
            duration: 1000,
            springDamping: 0.5
        }
    };
    
    toggleTheme = () => {
        LayoutAnimation.configureNext(this.animate);
        this.props.themeChanger();
        this.setState({button: !this.state.button})
    };
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.setting, {backgroundColor: theme.backgroundColor}]}>
                        <Text style={{color: theme.fontColor, fontWeight: '600'}}>Theme</Text>
                        <View>
                            <TouchableOpacity onPress={this.toggleTheme}>
                                <View style={this.state.button ? styles.button : styles.buttonDark}>
                                    <View style={[styles.buttonWrapper]}></View>
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
    setting: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#b7b7b7',
        width: 60,
        height: 25,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'flex-end'
    },
    buttonDark: {
        backgroundColor: '#afafaf',
        width: 60,
        height: 25,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'flex-start'
    },
    buttonWrapper: {
        width: 20,
        height: 20,
        backgroundColor: '#8979f3',
        borderRadius: 50,
        marginHorizontal: 5
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer
    }
};
export default connect(mapStateToProps, {themeChanger})(Setting)
