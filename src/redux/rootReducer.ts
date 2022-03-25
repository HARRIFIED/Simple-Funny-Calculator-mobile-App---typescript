import { combineReducers } from 'redux';
import { calculatorReducer, CALCULATOR_REDUCER } from './calculator/reducers/calculatorReducer';

export const rootReducer = combineReducers({
    [CALCULATOR_REDUCER]: calculatorReducer,
})
