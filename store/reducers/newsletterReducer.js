import actions from "../actions";


export default (state = {}, action) => {
  switch (action.type) {
    case actions.NEWSLETTER_SUB:
      return { ...state, subscribe: actions.newsletter}
    default:
      return state;
  }
};
