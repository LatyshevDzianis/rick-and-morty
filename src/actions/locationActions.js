import {
  FETCH_LOCATION_BEGIN,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATIONS_BEGIN,
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  SET_LOCATIONS_CURRENT_PAGE,
} from "../constants/actionTypes";

export const fetchLocationBegin = (url) => {
  return {
    type: FETCH_LOCATION_BEGIN,
    payload: url,
  };
};

export const fetchLocationSuccess = (data) => {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload: data,
  };
};

export const fetchLocationsBegin = (url) => {
  return {
    type: FETCH_LOCATIONS_BEGIN,
    payload: url,
  };
};

export const fetchLocationsSuccess = (locations) => {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    payload: locations,
  };
};

export const fetchLocationsFailure = (error) => {
  return {
    type: FETCH_LOCATIONS_FAILURE,
    payload: error,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_LOCATIONS_CURRENT_PAGE,
    payload: currentPage,
  };
};
