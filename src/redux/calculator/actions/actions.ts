import { actionsTypes } from "./actionsTypes";

interface get_results {
  type: actionsTypes.GET_RESULTS;
  payload: any;
}

export function get_result(result: string):get_results {
  return {
    type: actionsTypes.GET_RESULTS,
    payload: result
  }
}
interface load_button {
  type: actionsTypes.LOAD_BUTTON;
  payload: any;
}

export function load_buttons(value: string): load_button {
  return {
    type: actionsTypes.LOAD_BUTTON,
    payload: value
  }
}

interface delete_action{
  type: actionsTypes.DELETE_ACTION;
  payload?: any;
}

export function delete_value(): delete_action {
  return {
    type: actionsTypes.DELETE_ACTION,
    
  }
}

interface clear_screen {
  type: actionsTypes.CLEAR_SCREEN;
  payload?: any;
}

export function clear_screen(value: string):clear_screen {
  return {
    type: actionsTypes.CLEAR_SCREEN,
    payload: value
  }
}


export type Action = get_results | load_button | delete_action | clear_screen;
