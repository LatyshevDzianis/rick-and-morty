import {
  FETCH_LOCATIONS_SUCCESS,
  SET_LOCATIONS_CURRENT_PAGE,
} from "../constants/actionTypes";

export const fetchLocationsSuccess = (locations) => {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    payload: locations,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_LOCATIONS_CURRENT_PAGE,
    payload: currentPage,
  };
};

export const fetchLocations = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((locations) => dispatch(fetchLocationsSuccess(locations)));
  };
};
