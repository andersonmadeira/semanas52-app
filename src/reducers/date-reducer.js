import { UPDATE_START_DATE } from "../actions/actionTypes";

const initialValue = {
    date: '18/05/2018',
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