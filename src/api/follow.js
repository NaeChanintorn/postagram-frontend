import axios from "../config/axios";

export const getFollow = (id) => axios.get(`/follow/${id}`);
export const getAllFollow = () => axios.get(`/follow`);
export const createFollow = (id) => axios.post("/follow/create-follow", id);
export const unfollow = (id) => axios.delete(`/follow/${id}`);
