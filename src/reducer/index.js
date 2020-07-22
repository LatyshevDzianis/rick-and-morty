import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import episodeReducer from "./episodeReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  characters: characterReducer,
  episodes: episodeReducer,
  locations: locationReducer,
});

export default rootReducer;
