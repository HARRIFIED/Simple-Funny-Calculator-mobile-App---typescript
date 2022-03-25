import { actionsTypes } from "../actions/actionsTypes";
import { Action } from "../actions/actions";

export const CALCULATOR_REDUCER = 'calculator_reducer'

const initialState = {
  value: "",
  result: "",
};

export function calculatorReducer(state = initialState, action: Action) {

  let { type, payload } = action;
  
  switch (type) {
    case actionsTypes.LOAD_BUTTON:
      return {
        ...state,
        ...payload,
        value: state.value.concat(action.payload),
      };

    case actionsTypes.GET_RESULTS:
      try {
        return {
          ...state,
          ...payload,
          result: eval(state.value).toString(),
        };
      } catch (err) {
        return {
          ...state,
          ...payload,
          result: "Bad expression",
        };
      }

    case actionsTypes.CLEAR_SCREEN:
      return {
        ...state,
        ...payload,
        value: "",
        result: "",
      };

    case actionsTypes.DELETE_ACTION:
      return {
        ...state,
        ...payload,
        value: state.value.slice(0, -1),
        result: "",
      };

    default:
      return state
  }
}