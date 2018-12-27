import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Greeting(props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text >Hello {props.name}</Text>
    </View>
  );
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.topIconBar}>
          <View style={styles.leftButtons}>
            <Icon name='info-circle' style={styles.topButton} size={50}></Icon>
          </View>
          <View style={styles.rightButtons}>
            <Icon name='cog' style={styles.topButton} size={50}></Icon>
          </View>
        </View>
        <Greeting name='Anderson'></Greeting>
        <Greeting name='Emanuelle'></Greeting>
        <Text>asdfasdf</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'red',
  },
  topIconBar: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  leftButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  topButton: {
    color: '#fff',
  }
})