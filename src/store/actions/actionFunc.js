import { ADD_LIST, UPDATE } from "./actionType";

export function addListPhoneInState(list) {
  return {
    type: ADD_LIST,
    payload: list
  } 
}

export function updateListPhoneInState (list) {
  return {
    type: UPDATE,
    payload: list
  } 
}
