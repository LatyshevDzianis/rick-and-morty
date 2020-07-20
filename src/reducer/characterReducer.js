import {FETCH_CHARACTERS_BEGIN, FETCH_CHARACTERS_SUCCESS} from '../constants/actionTypes';

const initialState = {
  characters: [],
  loading: false,
  error: null
}

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: null
      }
    default:
      return state
  }
}