import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS,
  SET_CHARACTERS_CURRENT_PAGE,
} from "../constants/actionTypes";

export const fetchCharacterBegin = (url) => {
  return {
    type: FETCH_CHARACTER_BEGIN,
    payload: url,
  };
};

export const fetchCharacterSuccess = (data) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: data,
  };
};

export const fetchCharactersBegin = (url) => {
  return {
    type: FETCH_CHARACTERS_BEGIN,
    payload: url,
  };
};

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
