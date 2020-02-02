import actions from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_MEMBERS:
      return { ...state, users: action.users };
      
    default:
      return state;
  }
};
