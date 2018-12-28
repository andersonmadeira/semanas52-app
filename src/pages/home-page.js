import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux'; 

class HomePage extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);

    let startWeek = 40;

    this.state = {
      currentWeek: startWeek,
      percent: startWeek / 52 * 100,
      startDate: 'dd/mm/yyyy',
      endDate: 'dd/mm/yyyy',
    };
  }

  getPercentualFromWeek(weekNumber) {
    return (weekNumber / 52) * 100;
  }

  render() {
    const { amount, date } = this.props;

    return (
      <View style={styles.page}>
        <View style={styles.topIconBar}>
          <View style={styles.leftButtons}>
          <View style={styles.actionContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                <Icon name={'info-circle'} style={styles.appIcon} size={40}></Icon>
              </TouchableOpacity>
              <Text>Detalhes</Text>
            </View>
          </View>
          <View style={styles.rightButtons}>
            <View style={styles.actionContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Config')}>
                <Icon name={'cog'} style={styles.appIcon} size={40}></Icon>
              </TouchableOpacity>
              <Text>Configurações</Text>
            </View>
          </View>
        </View>
        <View style={styles.graphContainer}>
          <AnimatedCircularProgress
            size={200}
            width={25}
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
          <Icon name={'calendar-alt'} style={styles.appIcon} size={40}></Icon>
          <Text style={styles.date}>{this.state.endDate}</Text>
        </View>
        <View>
          <Text>Amount: {amount}</Text>
          <Text>Date: {date}</Text>
        </View>
        <View style={styles.bottomButtons}>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={this.onPress}>
              <Icon name={'money-bill'} style={styles.appIcon} size={50}></Icon>
            </TouchableOpacity>
            <Text>Meta Atual</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={this.onPress}>
              <Icon name={'download'} style={styles.appIcon} size={50}></Icon>
            </TouchableOpacity>
            <Text>Fazer Depósito</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={this.onPress}>
              <Icon name={'chart-bar'} style={styles.appIcon} size={50}></Icon>
            </TouchableOpacity>
            <Text>Acumulado</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = store => ({
  amount: store.amountState.amount,
  date: store.dateState.date
});

export default connect(mapStateToProps)(HomePage);

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
    paddingBottom: 5
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