import {
  FETCH_LOCATIONS_SUCCESS,
  SET_LOCATIONS_CURRENT_PAGE,
} from "../constants/actionTypes";

const initialState = {
  locations: [],
  loading: false,
  error: null,
  info: {},
  currentPage: 1,
};

export default function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.payload.results,
        info: action.payload.info,
        loading: false,
        error: null,
      };
    case SET_LOCATIONS_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
