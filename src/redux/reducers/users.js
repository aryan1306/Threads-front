import { GET_USER, USER_ERROR } from "./../actions/types";

const initState = {
  loading: true,
  profile: {},
  error: {},
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        avatar: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
