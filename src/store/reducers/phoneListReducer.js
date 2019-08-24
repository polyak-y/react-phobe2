import { ADD_LIST, FILTER, UPDATE } from "../actions/actionType";

const initialState = {
  phoneList: [],
  searchList: [],
  isLoading: true
}

export default function phoneListReducer (state = initialState, action) {
  switch(action.type) {
    case ADD_LIST: 
      return {    
        ...state,    
        phoneList: action.payload,
        searchList: action.payload,
        isLoading: false
      }  
    
    case UPDATE: 
      return {
        ...state,
        phoneList: action.payload,
        searchList: action.payloadSearch
      }
    
    case FILTER:
      return {
        ...state,
        searchList: action.payload
      } 

    default: 
      return state
  }
}