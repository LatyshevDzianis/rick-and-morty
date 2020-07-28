import { takeEvery, put, call } from "redux-saga/effects";

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
import { LOCATION_CHARACTERS_URL, LOCATIONS_URL } from "../constants/api";

export function* locationsWatcher() {
  yield takeEvery(FETCH_LOCATIONS_BEGIN, locationsWorker);
  yield takeEvery(FETCH_LOCATION_CHARACTERS_BEGIN, locationCharactersWorker);
}

function* locationsWorker(action) {
  try {
    const payload = yield call(fetchData, LOCATIONS_URL.concat(action.payload));
    yield put(fetchLocationsSuccess(payload));
  } catch (e) {
    yield put(fetchLocationsFailure(e));
  }
}

function* locationCharactersWorker(action) {
  try {
    const payload = yield call(
      fetchData,
      LOCATION_CHARACTERS_URL.concat(action.payload.join(","))
    );
    yield put(fetchLocationCharactersSuccess(payload));
  } catch (e) {
    yield put(fetchLocationCharactersFailure("Error with loading data("));
  }
}
