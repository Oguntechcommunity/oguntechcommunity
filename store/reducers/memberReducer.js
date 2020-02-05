import actions from "../actions";


export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_MEMBERS:
      return { ...state, users: action.users };
    case actions.REG_MEMBER:
      return { ...state, reg: action.reg };
    case actions.REG_FAILURE:
      return { ...state, error: action.error}
    case actions.CHANGE_SEARCHFIELD:
      return { ...state, onSearch: action.search }
    default:
      return state;
  }
};
