import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => {
  /* bad approach as it breaks the rules of redux
  const response = await jsonPlaceHolder.get("/posts");
  */

  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
