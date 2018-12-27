import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class App extends Component {
  constructor(props) {
    super(props);

    let startWeek = 40;

    this.state = {
      currentWeek: startWeek,
      percent: startWeek / 52 * 100,
      startDate: 'dd/mm/yyyy',
      endDate: 'dd/mm/yyyy',
    };

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
            <TouchableOpacity onPress={this.onPress}>
              <Icon name='info-circle' style={styles.appIcon} size={40}></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.rightButtons}>
            <TouchableOpacity onPress={this.onPress}>
              <Icon name='cog' style={styles.appIcon} size={40}></Icon>
            </TouchableOpacity>
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
                  Semana{'\n'}{this.state.currentWeek}
                </Text>
              )
            }
          </AnimatedCircularProgress>
        </View>
        <View style={styles.datesContainer}>
          <Text style={styles.date}>{this.state.startDate}</Text>
          <Icon name='calendar' style={styles.appIcon} size={40}></Icon>
          <Text style={styles.date}>{this.state.endDate}</Text>
        </View>
        <View style={styles.bottomButtons}>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={this.onPress}>
              <Icon name='money' style={styles.appIcon} size={50}></Icon>
            </TouchableOpacity>
            <Text>Meta Atual</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={this.onPress}>
              <Icon name='download' style={styles.appIcon} size={50}></Icon>
            </TouchableOpacity>
            <Text>Fazer Depósito</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={this.onPress}>
              <Icon name='bar-chart' style={styles.appIcon} size={50}></Icon>
            </TouchableOpacity>
            <Text>Acumulado</Text>
          </View>
        </View>
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
  appIcon: {
    color: '#fff',
  },
  graphContainer: {
    alignItems: 'center',
  },
  labelWeeks: {
    color: '#497127',
    fontSize: 30,
    textAlign: 'center',
  },
  datesContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  date: {
    fontSize: 20,
    color: '#497127',
  },
  bottomButtons: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  actionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  }
})