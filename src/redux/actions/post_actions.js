import axios from "axios";
import { CREATE_POST, POST_ERROR, GET_ALL_POSTS } from "./types";
import { setAlert } from "./alert_actions";
const url = process.env.REACT_APP_baseUrl;

export const getFollowersPost = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/feed`);
    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/feed/all`);
    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
