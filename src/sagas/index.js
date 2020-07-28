import { all } from "redux-saga/effects";

import { charactersWatcher } from "./characters";
import { locationsWatcher } from "./locations";
import { episodesWatcher } from "./episodes";

export default function* rootSaga() {
  yield all([charactersWatcher(), locationsWatcher(), episodesWatcher()]);
}
