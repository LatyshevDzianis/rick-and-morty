import {
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS,
  SET_CHARACTERS_CURRENT_PAGE,
} from "../constants/actionTypes";

// export const fetchCharactersBegin = () => {
//   return {
//     type: FETCH_CHARACTERS_BEGIN,
//   };
// };

export const fetchCharactersSuccess = (characters) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const fetchCharactersFailure = (error) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CHARACTERS_CURRENT_PAGE,
    payload: currentPage,
  };
};

export const fetchCharacters = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((characters) => dispatch(fetchCharactersSuccess(characters)))
      .catch((error) => dispatch(fetchCharactersFailure(error.message)));
  };
};
