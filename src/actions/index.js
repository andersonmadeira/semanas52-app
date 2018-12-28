import { UPDATE_START_DATE, UPDATE_START_AMOUNT } from "./actionTypes";

export const updateStartAmount = value => ({
    type: UPDATE_START_AMOUNT,
    amount: value
});

export const updateStartDate = value => ({
    type: UPDATE_START_DATE,
    date: value, 
});