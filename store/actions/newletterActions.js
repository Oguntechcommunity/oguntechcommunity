import actions from "./index";
import http from "./http";

export const newsletterSub = ({ email }) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({ email })
    try {
      const res = await http.post("/subscribe", body, config);
      dispatch({ type: actions.NEWSLETTER_SUB, newsletter: res.data})
    } catch(err) {
      const error = err.response.data.message
        console.log(error)
  
        dispatch({
          type: actions.NEWSLETTER_SUB_FAILURE,
          error
        })
    }
  }
  