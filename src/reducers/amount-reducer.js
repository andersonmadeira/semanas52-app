import { UPDATE_START_AMOUNT } from "../actions/actionTypes";

const initialValue = {
    amount: 1,
};

export const amountReducer = (state = initialValue, action) => {
    switch (action.type) {
        case UPDATE_START_AMOUNT:
            return {
                ...state,
                amount: action.amount
            };
        default:
            return state;
    }
};