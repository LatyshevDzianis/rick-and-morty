import {
  FETCH_LOCATION_CHARACTERS_FAILURE,
  FETCH_LOCATION_CHARACTERS_SUCCESS,
  FETCH_LOCATIONS_BEGIN,
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  SET_LOCATIONS_CURRENT_PAGE,
} from "../constants/actionTypes";

export const fetchLocationsBegin = () => {
  return {
    type: FETCH_LOCATIONS_BEGIN,
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

export const fetchLocationCharacters = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((characters) =>
        dispatch(fetchLocationCharactersSuccess(characters))
      )
      .catch((error) => dispatch(fetchLocationCharactersFailure(error)));
  };
};

export const fetchLocations = (url) => {
  return (dispatch) => {
    dispatch(fetchLocationsBegin());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((locations) => dispatch(fetchLocationsSuccess(locations)))
      .catch((error) => dispatch(fetchLocationsFailure(error)));
  };
};
