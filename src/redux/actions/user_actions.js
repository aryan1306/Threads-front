import { GET_USER, USER_ERROR } from "./types";
import axios from "axios";

const url = process.env.REACT_APP_baseUrl;
export const getloggedInUser = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/users/me`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err,
    });
  }
};
