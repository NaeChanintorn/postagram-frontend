import axios from "../config/axios";

export const createFollow = (followingId) =>
  axios.post("/follow/create-follow", { followingId });
export const getFollow = (id) => axios.get(`/follow/${id}`);
export const getAllFollow = () => axios.get(`/follow`);
export const unfollow = (id) => axios.delete(`/follow/${id}`);

// count
export const getCountFollowing = (id) =>
  axios.get(`/follow/count-following/${id}`);
export const getCountFollower = (id) =>
  axios.get(`/follow/count-follower/${id}`);
