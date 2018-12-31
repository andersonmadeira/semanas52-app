import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { updateStartDate, updateStartAmount } from '../actions';
import { bindActionCreators } from 'redux';

class ConfigPage extends Component {
    static navigationOptions = {
        title: 'Details'
    };
    
    constructor(props) {
        super(props);

        this.state = { date: props.date, amount: props.amount };

        this.openDatePicker = this.openDatePicker.bind(this);
    }

    async openDatePicker(updateDateAction) {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date()
            });

            if ( action !== DatePickerAndroid.dismissedAction ) {
                updateDateAction(day + '/' + month + '/' + year);
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }  
    }

    render() {
        const { updateStartAmount, updateStartDate, amount, date } = this.props;

        return (
            <View style={styles.page}>
                <View style={styles.topActionBar}>
                    <TouchableOpacity style={styles.backActionContainer} onPress={() => this.props.navigation.goBack()}>
                        <Icon name={'chevron-left'} style={[styles.topTextFont, styles.backIcon]} size={25} />
                        <Text style={[styles.topTextFont, styles.backLabel]}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.configPageWrapper}>
                    <Text style={styles.label}>Valor Inicial:</Text>
                    <TextInput style={styles.inputField} keyboardType='numeric' placeholder='Valor inicial' onChangeText={(amount) => updateStartAmount(amount)} value={`${amount}`} />
                    <Text style={styles.label}>Data de início:</Text>
                    <TouchableOpacity style={styles.dateContainer} onPress={() => this.openDatePicker(updateStartDate)}>
                        <Icon name={'calendar-alt'} style={styles.inputField} size={25} />
                        <Text style={styles.inputField}>{date}</Text>
                    </TouchableOpacity>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPage);

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#8BC34A',
    },
    topActionBar: {
        padding: 15,
    },
    backActionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topTextFont: {
        color: '#fff',
    },
    backLabel: {
        paddingLeft: 15,
        fontSize: 20
    },
    configPageWrapper: {
        flex: 1,
        flexDirection: 'column',
        padding: 50
    },
    label: {
        fontSize: 25,
    },
    inputField: {
        paddingLeft: 15,
        fontSize: 25,
        color: '#fff'
    }
});