import {
  FETCH_CHARACTER_EPISODES_FAILURE,
  FETCH_CHARACTER_EPISODES_SUCCESS,
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_SUCCESS,
  SET_CHARACTERS_CURRENT_PAGE,
} from "../constants/actionTypes";

const initialState = {
  characters: [],
  characterEpisodes: [],
  info: {},
  currentPage: 1,
  loading: false,
  error: null,
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        loading: false,
        error: null,
      };
    case FETCH_CHARACTER_EPISODES_SUCCESS:
      return {
        ...state,
        characterEpisodes: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CHARACTER_EPISODES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_CHARACTERS_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
