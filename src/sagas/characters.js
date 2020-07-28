import { takeEvery, put, call, select } from "redux-saga/effects";

import {
  FETCH_CHARACTER_EPISODES_BEGIN,
  FETCH_CHARACTERS_BEGIN,
} from "../constants/actionTypes";
import fetchData from "./fetchData";
import {
  fetchCharacterEpisodesFailure,
  fetchCharacterEpisodesSuccess,
  fetchCharactersFailure,
  fetchCharactersSuccess,
} from "../actions/characterActions";

const getCharactersUrl = (state) => state.characters.currentUrl;

export function* charactersWatcher() {
  yield takeEvery(FETCH_CHARACTERS_BEGIN, charactersWorker);
  yield takeEvery(FETCH_CHARACTER_EPISODES_BEGIN, characterEpisodesWorker);
}

function* charactersWorker() {
  try {
    let url = yield select(getCharactersUrl);
    const payload = yield call(fetchData, url);
    yield put(fetchCharactersSuccess(payload));
  } catch (e) {
    yield put(fetchCharactersFailure(e));
  }
}

function* characterEpisodesWorker() {
  try {
    let url = yield select(getCharactersUrl);
    const payload = yield call(fetchData, url);
    yield put(fetchCharacterEpisodesSuccess(payload));
  } catch (e) {
    yield put(fetchCharacterEpisodesFailure("Error with loading data("));
  }
}
