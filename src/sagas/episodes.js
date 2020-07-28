import { takeEvery, put, call } from "redux-saga/effects";

import {
  FETCH_EPISODE_CHARACTERS_BEGIN,
  FETCH_EPISODES_BEGIN,
} from "../constants/actionTypes";
import {
  fetchEpisodeCharactersFailure,
  fetchEpisodeCharactersSuccess,
  fetchEpisodesFailure,
  fetchEpisodesSuccess,
} from "../actions/episodeActions";
import fetchData from "./fetchData";
import { EPISODE_CHARACTERS_URL, EPISODES_URL } from "../constants/api";

export function* episodesWatcher() {
  yield takeEvery(FETCH_EPISODES_BEGIN, episodesWorker);
  yield takeEvery(FETCH_EPISODE_CHARACTERS_BEGIN, episodeCharactersWorker);
}

function* episodesWorker(action) {
  try {
    const payload = yield call(fetchData, EPISODES_URL.concat(action.payload));
    yield put(fetchEpisodesSuccess(payload));
  } catch (e) {
    yield put(fetchEpisodesFailure(e));
  }
}

function* episodeCharactersWorker(action) {
  try {
    const payload = yield call(
      fetchData,
      EPISODE_CHARACTERS_URL.concat(action.payload.join(","))
    );
    yield put(fetchEpisodeCharactersSuccess(payload));
  } catch (e) {
    yield put(fetchEpisodeCharactersFailure("Error with loading data("));
  }
}
