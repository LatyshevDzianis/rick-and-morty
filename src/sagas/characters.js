import { takeEvery, put, call } from "redux-saga/effects";
import qs from "querystring";

import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTERS_BEGIN,
} from "../constants/actionTypes";
import fetchData from "./fetchData";
import {
  fetchCharactersFailure,
  fetchCharactersSuccess,
  fetchCharacterSuccess,
} from "../actions/characterActions";
import { CHARACTERS_URL, EPISODES_URL } from "../constants/api";

export function* charactersWatcher() {
  yield takeEvery(FETCH_CHARACTERS_BEGIN, charactersWorker);
  yield takeEvery(FETCH_CHARACTER_BEGIN, characterWorker);
}

function* characterWorker(action) {
  const character = yield call(
    fetchData,
    `${CHARACTERS_URL}/${action.payload}`
  );

  const episodeIds = character.episode.map((item) =>
    item.substring(item.lastIndexOf("/") + 1)
  );

  const characterEpisodes = yield call(
    fetchData,
    `${EPISODES_URL}/${episodeIds}`
  );

  yield put(fetchCharacterSuccess({ ...character, characterEpisodes }));
}

function* charactersWorker(action) {
  try {
    const payload = yield call(
      fetchData,
      `${CHARACTERS_URL}/?${qs.stringify(action.payload)}`
    );
    yield put(fetchCharactersSuccess(payload));
  } catch (e) {
    yield put(fetchCharactersFailure(e));
  }
}
