import {
  FETCH_EPISODE_CHARACTERS_BEGIN,
  FETCH_EPISODE_CHARACTERS_FAILURE,
  FETCH_EPISODE_CHARACTERS_SUCCESS,
  FETCH_EPISODES_BEGIN,
  FETCH_EPISODES_FAILURE,
  FETCH_EPISODES_SUCCESS,
  SET_EPISODES_CURRENT_PAGE,
} from "../constants/actionTypes";

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

// export const fetchEpisodeCharacters = (url) => {
//   return (dispatch) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response;
//       })
//       .then((response) => response.json())
//       .then((episodes) => dispatch(fetchEpisodeCharactersSuccess(episodes)))
//       .catch((error) => dispatch(fetchEpisodeCharactersFailure(error)));
//   };
// };
//
// export const fetchEpisodes = (url) => {
//   return (dispatch) => {
//     dispatch(fetchEpisodesBegin());
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response;
//       })
//       .then((response) => response.json())
//       .then((episodes) => dispatch(fetchEpisodesSuccess(episodes)))
//       .catch((error) => dispatch(fetchEpisodesFailure(error)));
//   };
// };
