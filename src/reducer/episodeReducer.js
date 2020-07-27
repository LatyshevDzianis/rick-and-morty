import {
  FETCH_EPISODE_CHARACTERS_BEGIN,
  FETCH_EPISODE_CHARACTERS_FAILURE,
  FETCH_EPISODE_CHARACTERS_SUCCESS,
  FETCH_EPISODES_BEGIN,
  FETCH_EPISODES_FAILURE,
  FETCH_EPISODES_SUCCESS,
  SET_EPISODES_CURRENT_PAGE,
} from "../constants/actionTypes";

const initialState = {
  episodes: [],
  episodeCharacters: [],
  currentUrl: "",
  loading: false,
  error: null,
  info: {},
  currentPage: 1,
};

export default function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EPISODES_BEGIN:
      return {
        ...state,
        currentUrl: action.payload,
        loading: true,
        error: null,
      };
    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.payload.results,
        info: action.payload.info,
        loading: false,
        error: null,
      };
    case FETCH_EPISODES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_EPISODE_CHARACTERS_BEGIN:
      return {
        ...state,
        currentUrl: action.payload,
        loading: true,
      };
    case FETCH_EPISODE_CHARACTERS_SUCCESS:
      return {
        ...state,
        episodeCharacters: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_EPISODE_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_EPISODES_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
