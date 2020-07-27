import { all } from "redux-saga/effects";
import { charactersWatcher } from "./data";

export default function* rootSaga() {
  yield all([charactersWatcher()]);
}
