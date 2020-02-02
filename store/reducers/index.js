import { combineReducers } from "redux";

import teamsReducer from "./teamReducer";
import memberReducer from "./memberReducer";

export default combineReducers({
  teamsReducer,
  memberReducer
});
