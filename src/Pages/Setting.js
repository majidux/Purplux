import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Picker} from 'react-native';
import {changeTheme} from '../Service/usersApi/usersAction';
import {connect} from 'react-redux';

class Setting extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            theme: false,
            language: ''
        }
    }
    
    sendThemeChange = () => {
        let changer = this.state.theme
        if (this.state.theme) {
            this.props.changeTheme(changer)
        } else {
            return;
        }
    }
    
    render() {
        return (
            <View style={styles.className}>
                <Picker selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue) =>
                            this.setState({language: itemValue},
                                () => this.setState({theme: !this.state.theme}))}
                >
                    <Picker.Item label="Light" value="light"/>
                    <Picker.Item label="Dark" value="dark"/>
                </Picker>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20
    }
});
const mapStateToProps =(state)=>{
    return{
        theme:state.userReducer
    }
}
export default connect(mapStateToProps, {changeTheme})(Setting)
