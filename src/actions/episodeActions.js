import {
  FETCH_EPISODES_SUCCESS,
  SET_EPISODES_CURRENT_PAGE,
} from "../constants/actionTypes";

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

export const fetchEpisodes = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((episodes) => dispatch(fetchEpisodesSuccess(episodes)));
  };
};
