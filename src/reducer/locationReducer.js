import {
  FETCH_LOCATION_BEGIN,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATIONS_BEGIN,
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  SET_LOCATIONS_CURRENT_PAGE,
} from "../constants/actionTypes";

const initialState = {
  items: [],
  selectedLocation: {},
  loading: false,
  error: null,
  info: {},
  currentPage: 1,
};

export default function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedLocation: action.payload,
      };
    case FETCH_LOCATIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        items: action.payload.results,
        info: action.payload.info,
        loading: false,
        error: null,
      };
    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
