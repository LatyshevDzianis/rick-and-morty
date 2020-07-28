import { takeEvery, put, call, select } from "redux-saga/effects";

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

const getEpisodesUrl = (state) => state.episodes.currentUrl;

export function* episodesWatcher() {
  yield takeEvery(FETCH_EPISODES_BEGIN, episodesWorker);
  yield takeEvery(FETCH_EPISODE_CHARACTERS_BEGIN, episodeCharactersWorker);
}

function* episodesWorker() {
  try {
    let url = yield select(getEpisodesUrl);
    const payload = yield call(fetchData, url);
    yield put(fetchEpisodesSuccess(payload));
  } catch (e) {
    yield put(fetchEpisodesFailure(e));
  }
}

function* episodeCharactersWorker() {
  try {
    let url = yield select(getEpisodesUrl);
    const payload = yield call(fetchData, url);
    yield put(fetchEpisodeCharactersSuccess(payload));
  } catch (e) {
    yield put(fetchEpisodeCharactersFailure("Error with loading data("));
  }
}
