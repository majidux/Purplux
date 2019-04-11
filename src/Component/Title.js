import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connectToHoc} from "./hoc";

class Title extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            creator:'Majid'
        }
    }
    static navigationOptions =({navigation})=>{
        return {
            headerTransparent: true
        }
    };
    
    render() {
        let theme = this.context;
        return (
            <View>
                <Text style={styles.appTitle}>{this.props.data}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    appTitle: {
        fontSize: 50,
        color: '#7768f3',
        fontWeight: '600',
        fontFamily: 'cursive'
    }
});
export default connectToHoc(Title)
