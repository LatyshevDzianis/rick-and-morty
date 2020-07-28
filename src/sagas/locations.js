import { takeEvery, put, call, select } from "redux-saga/effects";

import {
  FETCH_LOCATION_CHARACTERS_BEGIN,
  FETCH_LOCATIONS_BEGIN,
} from "../constants/actionTypes";
import {
  fetchLocationCharactersFailure,
  fetchLocationCharactersSuccess,
  fetchLocationsFailure,
  fetchLocationsSuccess,
} from "../actions/locationActions";
import fetchData from "./fetchData";

const getLocationsUrl = (state) => state.locations.currentUrl;

export function* locationsWatcher() {
  yield takeEvery(FETCH_LOCATIONS_BEGIN, locationsWorker);
  yield takeEvery(FETCH_LOCATION_CHARACTERS_BEGIN, locationCharactersWorker);
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
