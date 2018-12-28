import { combineReducers } from 'redux';
import { dateReducer } from './date-reducer';
import { amountReducer } from './amount-reducer';

export const Reducers = combineReducers({
    dateState: dateReducer,
    amountState: amountReducer,
});

