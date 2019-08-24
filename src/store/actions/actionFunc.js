import { ADD_LIST, FILTER, UPDATE } from "./actionType";

export function addListPhoneInState(list) {
  return {
    type: ADD_LIST,
    payload: list
  } 
}

export function updateListPhoneInState (list, searchList) {
  return {
    type: UPDATE,
    payload: list,
    payloadSearch: searchList
  } 
}

export function searchFilter(filterList) {
   return {
    type: FILTER,
    payload: filterList
  }
}