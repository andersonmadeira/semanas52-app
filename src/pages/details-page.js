import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { updateStartDate, updateStartAmount } from '../actions';
import { bindActionCreators } from 'redux';

class DetailsPage extends Component {
    static navigationOptions = {
        title: 'Details'
    };

    render() {
        const { updateStartAmount, updateStartDate, amount, date } = this.props;

        return (
            <View>
                <Text>Details page</Text>
                <TextInput keyboardType='numeric' placeholder='Valor inicial' onChangeText={(amount) => updateStartAmount(amount)} value={`${amount}`} />
                <TextInput placeholder='Valor inicial' onChangeText={(date) => updateStartDate(date)} value={date} />
            </View>
        );
    }
}

const mapStateToProps = store => ({
    amount: store.amountState.amount,
    date: store.dateState.date
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateStartDate, updateStartAmount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);