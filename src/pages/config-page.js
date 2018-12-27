import React, { Component } from 'react';
import { Text } from 'react-native';

export default class ConfigPage extends Component {
    static navigationOptions = {
        title: 'Config'
    };

    render() {
        return (
            <Text>Config Page</Text>
        );
    }
}