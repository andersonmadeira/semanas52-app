import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { updateStartDate, updateStartAmount } from '../actions';
import { bindActionCreators } from 'redux';

class ConfigPage extends Component {
    static navigationOptions = {
        title: 'Details'
    };

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
                    <Text>Valor Inicial:</Text>
                    <TextInput keyboardType='numeric' placeholder='Valor inicial' onChangeText={(amount) => updateStartAmount(amount)} value={`${amount}`} />
                    <Text>Data de início:</Text>
                    <TextInput placeholder='Valor inicial' onChangeText={(date) => updateStartDate(date)} value={date} />
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
    }
});