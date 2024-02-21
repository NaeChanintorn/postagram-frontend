import axios from "../config/axios";

export const getAllPostsForEachUser = (userId) =>
  axios.get(`/posts/${userId}/get-post`);

export const getAllPosts = () => axios.get("/posts/get-posts");

export const editPost = (postId, caption) =>
  axios.patch(`/posts/edit-post/${postId}`, { caption });
