import React, { Component } from 'react';
import { Text } from 'react-native';

export default class DetailsPage extends Component {
    static navigationOptions = {
        title: 'Config'
    };

    render() {
        return (
            <Text>Details Page</Text>
        );
    }
}