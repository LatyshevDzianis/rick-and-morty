import {
  FETCH_LOCATION_BEGIN,
  FETCH_LOCATION_CHARACTERS_BEGIN,
  FETCH_LOCATION_CHARACTERS_FAILURE,
  FETCH_LOCATION_CHARACTERS_SUCCESS,
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

export const fetchLocationSuccess = (location) => {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload: location,
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

export const fetchLocationCharactersBegin = (url) => {
  return {
    type: FETCH_LOCATION_CHARACTERS_BEGIN,
    payload: url,
  };
};

export const fetchLocationCharactersSuccess = (characters) => {
  return {
    type: FETCH_LOCATION_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const fetchLocationCharactersFailure = (error) => {
  return {
    type: FETCH_LOCATION_CHARACTERS_FAILURE,
    payload: error,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_LOCATIONS_CURRENT_PAGE,
    payload: currentPage,
  };
};
