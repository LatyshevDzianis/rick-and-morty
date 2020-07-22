import {
  FETCH_CHARACTER_EPISODES_FAILURE,
  FETCH_CHARACTER_EPISODES_SUCCESS,
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS,
  SET_CHARACTERS_CURRENT_PAGE,
} from "../constants/actionTypes";

export const fetchCharactersBegin = () => {
  return {
    type: FETCH_CHARACTERS_BEGIN,
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

export const fetchCharacterEpisodes = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((episodes) => dispatch(fetchCharacterEpisodesSuccess(episodes)))
      .catch((error) => dispatch(fetchCharacterEpisodesFailure(error.message)));
  };
};

export const fetchCharacters = (url) => {
  return (dispatch) => {
    dispatch(fetchCharactersBegin());
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
