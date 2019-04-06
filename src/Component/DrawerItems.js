import React, {Component} from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';

class DrawerItems extends Component {
    
    render() {
        return (
            <View style={styles.className}>
                <TouchableOpacity onPress={()=>
                    // this.props.navigation.navigate('Home');
                    this.props.navigation.closeDrawer()
                }>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
export default DrawerItems;
