import {API_URL} from "../utils/config";
import axios from "axios";

const getPosts = () => {
  return axios.get(`${API_URL}/posts`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error getting the posts: ", error);
      return {error:error}
    });
};

const deletePost = (data) => {
  const {id,name,description} = data;
  return axios
    .delete(`${API_URL}/posts/${id}`,{name,description})
    .then((response) => {
      return response
    }).catch((error) => {
      console.log('Error deleting the post: ', error);
      return {error:error}
    });
}

const createPost = (data) => {
  const {name,description} = data;
  return axios
    .post(`${API_URL}/posts/`,{name,description})
    .then((response) => {
      return response
    }).catch((error) => {
      console.log('Error creating the post: ', error);
      return {error:error}
    });
}

const actionPost = {
  getPosts,deletePost,createPost
}

export default actionPost;
