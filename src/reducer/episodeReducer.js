import {
  FETCH_EPISODES_SUCCESS,
  SET_EPISODES_CURRENT_PAGE,
} from "../constants/actionTypes";

const initialState = {
  episodes: [],
  loading: false,
  error: null,
  info: {},
  currentPage: 1,
};

export default function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.payload.results,
        info: action.payload.info,
        loading: false,
        error: null,
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
