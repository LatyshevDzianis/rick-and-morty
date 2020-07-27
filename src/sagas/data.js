import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  FETCH_CHARACTER_EPISODES_BEGIN,
  FETCH_CHARACTERS_BEGIN,
  FETCH_EPISODE_CHARACTERS_BEGIN,
  FETCH_EPISODES_BEGIN,
  FETCH_LOCATION_CHARACTERS_BEGIN,
  FETCH_LOCATIONS_BEGIN,
} from "../constants/actionTypes";
import {
  fetchCharacterEpisodesFailure,
  fetchCharacterEpisodesSuccess,
  fetchCharactersFailure,
  fetchCharactersSuccess,
} from "../actions/characterActions";
import {
  fetchLocationCharactersFailure,
  fetchLocationCharactersSuccess,
  fetchLocationsFailure,
  fetchLocationsSuccess,
} from "../actions/locationActions";
import {
  fetchEpisodeCharactersFailure,
  fetchEpisodeCharactersSuccess,
  fetchEpisodesFailure,
  fetchEpisodesSuccess,
} from "../actions/episodeActions";

const getCharactersUrl = (state) => state.characters.currentUrl;
const getLocationsUrl = (state) => state.locations.currentUrl;
const getEpisodesUrl = (state) => state.episodes.currentUrl;

export function* charactersWatcher() {
  yield takeEvery(FETCH_CHARACTERS_BEGIN, charactersWorker);
  yield takeEvery(FETCH_CHARACTER_EPISODES_BEGIN, characterEpisodesWorker);
  yield takeEvery(FETCH_LOCATIONS_BEGIN, locationsWorker);
  yield takeEvery(FETCH_LOCATION_CHARACTERS_BEGIN, locationCharactersWorker);
  yield takeEvery(FETCH_EPISODES_BEGIN, episodesWorker);
  yield takeEvery(FETCH_EPISODE_CHARACTERS_BEGIN, episodeCharactersWorker);
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

function* locationsWorker() {
  try {
    let url = yield select(getLocationsUrl);
    const payload = yield call(fetchData, url);
    yield put(fetchLocationsSuccess(payload));
  } catch (e) {
    yield put(fetchLocationsFailure(e));
  }
}

function* locationCharactersWorker() {
  try {
    let url = yield select(getLocationsUrl);
    const payload = yield call(fetchData, url);
    yield put(fetchLocationCharactersSuccess(payload));
  } catch (e) {
    yield put(fetchLocationCharactersFailure("Error with loading data("));
  }
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

async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}
