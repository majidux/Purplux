import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Picker, Animated,TouchableOpacity,AsyncStorage} from 'react-native';
import {changeTheme} from '../Service/usersApi/usersAction';
import {connect} from 'react-redux';

class Setting extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            theme: true,
            themeChanger: "night",
            toggleTheme: this.toggleTheme
        }
    }
    
    
    sendThemeChange = () => {
        this.setState({theme:!this.state.theme})
        let changer = this.state.theme
        this.props.changeTheme(changer)
    }
    
    
    toggleTheme = evt => {
        this.setState({ toggleTheme: evt.target.checked ? "night" : "day" });
    };
    
    
    render() {
        return (
            <View style={this.props.theme.theme ? styles.dark : styles.light}>
                {
                    this.props.theme.theme &&
                    <View>
                        <TouchableOpacity onPress={this.sendThemeChange}>
                            <Text style={styles.darkFont}>Dark</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    !this.props.theme.theme &&
                    <View>
                        <TouchableOpacity onPress={this.sendThemeChange}>
                            <Text style={styles.lightFont}>Light</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    light: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    dark: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        backgroundColor: '#373737',
        justifyContent:'center',
        alignItems:'center'
    },
    lightFont:{
        fontSize:20,
        fontWeight:'600',
        color:'#000',
    },
    darkFont:{
        fontSize:20,
        fontWeight:'600',
        color:'#fff',
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer
    }
}
export default connect(mapStateToProps, {changeTheme})(Setting)
