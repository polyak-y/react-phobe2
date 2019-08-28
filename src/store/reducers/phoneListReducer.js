import { ADD_LIST, UPDATE } from "../actions/actionType";

const initialState = {
  phoneList: [],
  isLoading: true
}

export default function phoneListReducer (state = initialState, action) {
  switch(action.type) {
    case ADD_LIST: 
      return {    
        phoneList: action.payload,
        isLoading: false
      }  
    
    case UPDATE: 
      return {
        ...state,
        phoneList: action.payload,
      } 

    default: 
      return state
  }
}