import { takeEvery, put, call } from "redux-saga/effects";

import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_EPISODES_BEGIN,
  FETCH_CHARACTERS_BEGIN,
} from "../constants/actionTypes";
import fetchData from "./fetchData";
import {
  fetchCharacterEpisodesFailure,
  fetchCharacterEpisodesSuccess,
  fetchCharactersFailure,
  fetchCharactersSuccess,
  fetchCharacterSuccess,
} from "../actions/characterActions";
import {
  CHARACTER_EPISODES_URL,
  CHARACTERS_URL,
  EPISODE_CHARACTERS_URL,
} from "../constants/api";

export function* charactersWatcher() {
  yield takeEvery(FETCH_CHARACTERS_BEGIN, charactersWorker);
  yield takeEvery(FETCH_CHARACTER_EPISODES_BEGIN, characterEpisodesWorker);
  yield takeEvery(FETCH_CHARACTER_BEGIN, characterWorker);
}

function* characterWorker(action) {
  const payload = yield call(
    fetchData,
    EPISODE_CHARACTERS_URL.concat(action.payload)
  );
  yield put(fetchCharacterSuccess(payload));
}

function* charactersWorker(action) {
  try {
    const payload = yield call(
      fetchData,
      CHARACTERS_URL.concat(action.payload)
    );
    yield put(fetchCharactersSuccess(payload));
  } catch (e) {
    yield put(fetchCharactersFailure(e));
  }
}

function* characterEpisodesWorker(action) {
  try {
    const payload = yield call(
      fetchData,
      CHARACTER_EPISODES_URL.concat(action.payload.join(","))
    );
    yield put(fetchCharacterEpisodesSuccess(payload));
  } catch (e) {
    yield put(fetchCharacterEpisodesFailure("Error with loading data("));
  }
}
