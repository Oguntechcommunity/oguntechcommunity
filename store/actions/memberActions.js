import actions from "./index";
import http from "./http";

export const getMembers = () => async dispatch => {
  const members = await http.get("/user");
  return dispatch({ type: actions.GET_MEMBERS, members: members.data });
};
