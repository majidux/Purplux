import React, {Component} from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import {ThemeContext} from "./themes-context";

class DrawerItems extends Component {
    
    render() {
        let theme = this.context;
        return (
            <View style={[styles.className,theme.backgroundColor]}>
                <View>
                    <TouchableOpacity onPress={()=>
                        this.props.navigation.navigate('Home')
                    }>
                        <Text>Home</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>
                        this.props.navigation.navigate('Setting')
                    }>
                        <Text>Setting</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>
                        this.props.navigation.navigate('About')
                    }>
                        <Text>About</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

DrawerItems.contextType = ThemeContext;

const styles = StyleSheet.create({
    className: {
        flex: 1,
        padding:20
    }
});
export default DrawerItems;
