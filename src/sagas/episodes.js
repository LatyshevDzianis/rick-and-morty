import { takeEvery, put, call } from "redux-saga/effects";
import qs from "querystring";

import {
  FETCH_EPISODE_BEGIN,
  FETCH_EPISODES_BEGIN,
} from "../constants/actionTypes";
import {
  fetchEpisodesFailure,
  fetchEpisodesSuccess,
  fetchEpisodeSuccess,
} from "../actions/episodeActions";
import fetchData from "./fetchData";
import { CHARACTERS_URL, EPISODES_URL } from "../constants/api";

export function* episodesWatcher() {
  yield takeEvery(FETCH_EPISODES_BEGIN, episodesWorker);
  yield takeEvery(FETCH_EPISODE_BEGIN, episodeWorker);
}

function* episodeWorker(action) {
  const episode = yield call(fetchData, `${EPISODES_URL}/${action.payload}`);

  const characterIds = episode.characters.map((item) =>
    item.substring(item.lastIndexOf("/") + 1)
  );

  const episodeCharacters = yield call(
    fetchData,
    `${CHARACTERS_URL}/${characterIds}`
  );

  yield put(fetchEpisodeSuccess({ ...episode, episodeCharacters }));
}

function* episodesWorker(action) {
  try {
    const payload = yield call(
      fetchData,
      `${EPISODES_URL}/?${qs.stringify(action.payload)}`
    );
    yield put(fetchEpisodesSuccess(payload));
  } catch (e) {
    yield put(fetchEpisodesFailure(e));
  }
}
