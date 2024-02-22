import axios from "../config/axios";

export const getAllPostsForEachUser = (userId) =>
  axios.get(`/posts/${userId}/get-post`);

export const getAllPosts = () => axios.get("/posts/get-posts");

export const createPostImage = (formData) =>
  axios.post("/posts/post-image", formData);

export const createPostVideo = (formData) =>
  axios.post("/posts/post-video", formData);

export const editPost = (postId, caption) =>
  axios.patch(`/posts/edit-post`, { postId, caption });

export const deletePost = (postId) =>
  axios.patch("/posts/delete-post", { postId }); // Fake Delete

// Likes

export const likePost = (postId, userId) =>
  axios.post(`/posts/like`, { postId, userId });

export const unlikePost = (postId, userId) =>
  axios.delete(`/posts/unlike`, { data: { postId, userId } });

// Comments

export const createComment = (comment, postId) =>
  axios.post("/posts/comment", { comment, postId });
