import axios from "../config/axios";

export const getFollow = (id) => axios.get(`/follow/is-follow/${id}`);
export const getAllFollow = (userId) =>
  axios.get(`/follow/all-follow/${userId}`);
export const createFollow = (id) => axios.post("/follow/create-follow", id);
export const unfollow = (id) => axios.delete(`/follow/unfollow/${id}`);
