import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () =>
  /* bad approach as it breaks the rules of redux
  const response = await jsonPlaceHolder.get("/posts");
  */

  async (dispatch) => {
    // inside this inner function there is no need to return an action.
    const response = await jsonPlaceHolder.get("./posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
