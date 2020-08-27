import {
  FETCH_EPISODE_BEGIN,
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

export const fetchEpisodeSuccess = (data) => {
  return {
    type: FETCH_EPISODE_SUCCESS,
    payload: data,
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

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_EPISODES_CURRENT_PAGE,
    payload: currentPage,
  };
};
