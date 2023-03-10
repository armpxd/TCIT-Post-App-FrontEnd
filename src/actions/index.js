import {
  GET_POSTS,
  DELETE_POSTS,
  CREATE_POSTS,
  FILTER_POSTS,
} from "./types.js";

import postsServices from "../service/posts";

export const getPosts = () => {
  return (dispatch) => {
    return postsServices.getPosts().then((posts) => {
      if (!posts.error) {
        dispatch({
          type: GET_POSTS,
          payload: posts,
        });
      } else {
        alert("Error de conexion");
      }
    });
  };
};

export const deletePost = (data) => {
  return (dispatch) => {
    return postsServices.deletePost(data).then((response) => {
      if (!response.error) {
        dispatch({
          type: DELETE_POSTS,
          payload: data,
        });
      } else {
        alert("El post no se elimino correctamente intente de nuevo");
      }
    });
  };
};

export const filterPosts = (data) => {
  return { type: FILTER_POSTS, payload: data };
};

export const createPost = (data) => {
  return (dispatch) => {
    return postsServices.createPost(data).then((response) => {
      if (!response.error) {
        let post = response.data;
        dispatch({
          type: CREATE_POSTS,
          payload: [post],
        });
      } else {
        alert("El post no se creo correctamente intente de nuevo");
      }
    });
  };
};
