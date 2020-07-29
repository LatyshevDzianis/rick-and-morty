import {
  FETCH_EPISODE_BEGIN,
  FETCH_EPISODE_CHARACTERS_BEGIN,
  FETCH_EPISODE_CHARACTERS_FAILURE,
  FETCH_EPISODE_CHARACTERS_SUCCESS,
  FETCH_EPISODE_SUCCESS,
  FETCH_EPISODES_BEGIN,
  FETCH_EPISODES_FAILURE,
  FETCH_EPISODES_SUCCESS,
  SET_EPISODES_CURRENT_PAGE,
} from "../constants/actionTypes";

export const fetchEpisodeBegin = (url) => {
  return {
    type: FETCH_EPISODE_BEGIN,
    payload: url,
  };
};

export const fetchEpisodeSuccess = (episode) => {
  return {
    type: FETCH_EPISODE_SUCCESS,
    payload: episode,
  };
};

export const fetchEpisodesBegin = (url) => {
  return {
    type: FETCH_EPISODES_BEGIN,
    payload: url,
  };
};

export const fetchEpisodesFailure = (error) => {
  return {
    type: FETCH_EPISODES_FAILURE,
    payload: error,
  };
};

export const fetchEpisodesSuccess = (episodes) => {
  return {
    type: FETCH_EPISODES_SUCCESS,
    payload: episodes,
  };
};

export const fetchEpisodeCharactersBegin = (url) => {
  return {
    type: FETCH_EPISODE_CHARACTERS_BEGIN,
    payload: url,
  };
};

export const fetchEpisodeCharactersFailure = (error) => {
  return {
    type: FETCH_EPISODE_CHARACTERS_FAILURE,
    payload: error,
  };
};

export const fetchEpisodeCharactersSuccess = (characters) => {
  return {
    type: FETCH_EPISODE_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_EPISODES_CURRENT_PAGE,
    payload: currentPage,
  };
};
