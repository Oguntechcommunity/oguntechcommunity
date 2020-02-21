import actions from './index';
import http from './http';

export const getMembers = () => async dispatch => {
  const members = await http.get('/user');
  return dispatch({ type: actions.GET_MEMBERS, members: members.data });
};

export const regMember = ({
  full_name,
  job_title,
  portfolio,
  email_address,
  avatar
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    full_name,
    job_title,
    portfolio,
    email_address,
    avatar
  });
  try {
    const res = await http.post('/user', body, config);
    dispatch({ type: actions.REG_MEMBER, reg_member: res.data });
    console.log(res.data);
  } catch (err) {
    const error = err.response.data.message;
    console.log(error);

    dispatch({
      type: actions.REG_FAILURE,
      error
    });
  }
};

export const onMemberSearch = text => async dispatch => {
  return dispatch({ type: actions.CHANGE_SEARCHFIELD, search: search.text });
};
