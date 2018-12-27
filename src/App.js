import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function Greeting(props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text >Hello {props.name}</Text>
    </View>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    let startWeek = 40;

    this.state = { currentWeek: startWeek, percent: startWeek / 52 * 100 };

    this.getPercentualFromWeek = this.getPercentualFromWeek.bind(this);
  }

  getPercentualFromWeek(weekNumber) {
    return (weekNumber / 52) * 100;
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.topIconBar}>
          <View style={styles.leftButtons}>
            <Icon name='info-circle' style={styles.topButton} size={40}></Icon>
          </View>
          <View style={styles.rightButtons}>
            <Icon name='cog' style={styles.topButton} size={40}></Icon>
          </View>
        </View>
        <View style={styles.graphContainer}>
          <AnimatedCircularProgress
            size={250}
            width={35}
            fill={this.state.percent}
            tintColor="#fff"
            backgroundColor="#689F38">
            {
              (fill) => (
                <Text style={styles.labelWeeks}>
                  Semana{'\n'}{ this.state.currentWeek }
                </Text>
              )
            }
          </AnimatedCircularProgress>
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
    backgroundColor: '#8BC34A',
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
  },
  graphContainer: {
    alignItems: 'center',
  },
  labelWeeks: {
    color: '#497127',
    fontSize: 30,
    textAlign: 'center',
  }
})