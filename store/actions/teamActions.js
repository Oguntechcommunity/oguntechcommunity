import actions from "./index";
import http from "./http";

export const getUsers = () => async dispatch => {
  const users = await http.get("/user");
  return dispatch({ type: actions.GET_USERS, users: users.data });
};

// export const getUser = id => async dispatch => {
//   const user = await axios.get(`/users/${id}`);
//   return dispatch({ type: actions.GET_USER, user: user.data });
// };
