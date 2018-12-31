import { UPDATE_START_DATE } from "../actions/actionTypes";
import moment from 'moment';

const initialValue = {
    date: moment(),
};

export const dateReducer = (state = initialValue, action) => {
    switch (action.type) {
        case UPDATE_START_DATE:
            return {
                ...state,
                date: action.date
            };
        default:
            return state;
    }
};