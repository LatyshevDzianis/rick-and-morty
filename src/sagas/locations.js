import { takeEvery, put, call } from "redux-saga/effects";
import qs from "querystring";

import {
  FETCH_LOCATION_BEGIN,
  FETCH_LOCATIONS_BEGIN,
} from "../constants/actionTypes";
import {
  fetchLocationCharactersBegin,
  fetchLocationCharactersSuccess,
  fetchLocationsFailure,
  fetchLocationsSuccess,
  fetchLocationSuccess,
} from "../actions/locationActions";
import fetchData from "./fetchData";
import { CHARACTERS_URL, LOCATIONS_URL } from "../constants/api";

export function* locationsWatcher() {
  yield takeEvery(FETCH_LOCATIONS_BEGIN, locationsWorker);
  yield takeEvery(FETCH_LOCATION_BEGIN, locationWorker);
}

function* locationWorker(action) {
  const payload = yield call(fetchData, `${LOCATIONS_URL}/${action.payload}`);
  yield put(fetchLocationCharactersBegin());

  const characterIds = payload.residents.map((item) =>
    item.substring(item.lastIndexOf("/") + 1)
  );

  yield put(fetchLocationSuccess(payload));

  if (characterIds.length > 0) {
    const locationCharacters = yield call(
      fetchData,
      `${CHARACTERS_URL}/${characterIds}`
    );

    yield put(fetchLocationCharactersSuccess(locationCharacters));
  } else {
    yield put(fetchLocationCharactersSuccess([]));
  }
}

function* locationsWorker(action) {
  try {
    const payload = yield call(
      fetchData,
      `${LOCATIONS_URL}/?${qs.stringify(action.payload)}`
    );
    yield put(fetchLocationsSuccess(payload));
  } catch (e) {
    yield put(fetchLocationsFailure(e));
  }
}
