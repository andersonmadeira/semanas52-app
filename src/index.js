import React, { Component } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import Store from './store';
import { getLocale } from './util';
import moment from 'moment';

moment.locale(getLocale());

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Routes />
            </Provider>
        );
    }
}
