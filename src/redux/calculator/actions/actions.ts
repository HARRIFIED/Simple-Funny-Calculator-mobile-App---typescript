import { actionsTypes } from "./actionsTypes";

interface get_results {
  type: actionsTypes.GET_RESULTS;
  payload: any;
}

interface load_button {
  type: actionsTypes.LOAD_BUTTON;
  payload: any;
}

interface delete_action{
  type: actionsTypes.DELETE_ACTION;
  payload: any;
}

interface clear_screen {
  type: actionsTypes.CLEAR_SCREEN;
  payload: any;
}


export type Action = get_results | load_button | delete_action | clear_screen;
