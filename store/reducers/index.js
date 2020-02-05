import { combineReducers } from "redux";

import teamsReducer from "./teamReducer";
import memberReducer from "./memberReducer";
import newsletterReducer from "./newsletterReducer";


export default combineReducers({
  teamsReducer,
  memberReducer,
  newsletterReducer
});
