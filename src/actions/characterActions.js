import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_EPISODES_BEGIN,
  FETCH_CHARACTER_EPISODES_FAILURE,
  FETCH_CHARACTER_EPISODES_SUCCESS,
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

export const fetchCharacterSuccess = (character) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: character,
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

export const fetchCharacterEpisodesBegin = (url) => {
  return {
    type: FETCH_CHARACTER_EPISODES_BEGIN,
    payload: url,
  };
};

export const fetchCharacterEpisodesSuccess = (episodes) => {
  return {
    type: FETCH_CHARACTER_EPISODES_SUCCESS,
    payload: episodes,
  };
};

export const fetchCharacterEpisodesFailure = (error) => {
  return {
    type: FETCH_CHARACTER_EPISODES_FAILURE,
    payload: error,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CHARACTERS_CURRENT_PAGE,
    payload: currentPage,
  };
};
