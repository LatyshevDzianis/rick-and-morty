import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_EPISODES_BEGIN,
  FETCH_CHARACTER_EPISODES_FAILURE,
  FETCH_CHARACTER_EPISODES_SUCCESS,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS,
  SET_CHARACTERS_CURRENT_PAGE,
} from "../constants/actionTypes";

const initialState = {
  items: [],
  selectedCharacter: {},
  characterEpisodes: [],
  info: {},
  currentPage: 1,
  loading: false,
  error: null,
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCharacter: action.payload,
      };
    case FETCH_CHARACTERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        items: action.payload.results,
        info: action.payload.info,
        loading: false,
        error: null,
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_CHARACTER_EPISODES_BEGIN:
      return {
        ...state,
        loadingEpisodes: true,
      };
    case FETCH_CHARACTER_EPISODES_SUCCESS:
      return {
        ...state,
        characterEpisodes: action.payload,
        loadingEpisodes: false,
        error: null,
      };
    case FETCH_CHARACTER_EPISODES_FAILURE:
      return {
        ...state,
        loadingEpisodes: false,
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
