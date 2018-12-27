import React, { Component } from 'react';
import { Text } from 'react-native';

export default class DetailsPage extends Component {
    static navigationOptions = {
        title: 'Details'
    };

    render() {
        return (
            <Text>Details Page</Text>
        );
    }
}