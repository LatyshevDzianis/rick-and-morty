import {
  FETCH_EPISODE_BEGIN,
  FETCH_EPISODE_SUCCESS,
  FETCH_EPISODES_BEGIN,
  FETCH_EPISODES_FAILURE,
  FETCH_EPISODES_SUCCESS,
  SET_EPISODES_CURRENT_PAGE,
} from "../constants/actionTypes";

const initialState = {
  items: [],
  selectedEpisode: {},
  loading: false,
  error: null,
  info: {},
  currentPage: 1,
};

export default function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EPISODE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EPISODE_SUCCESS:
      return {
        ...state,
        selectedEpisode: action.payload,
        loading: false,
      };
    case FETCH_EPISODES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        items: action.payload.results,
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
    case SET_EPISODES_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
