import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  // inside this inner function there is no need to return an action.
  const response = await jsonPlaceHolder.get("./posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

/*
---Commenting out to try alternative method---
export const fetchUser = (id) => async (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`./users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
*/
