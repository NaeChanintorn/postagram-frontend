import axios from "../config/axios";

export const updateUser = (user) => axios.patch("/users", user);
export const updateUserBio = (bio) => axios.patch("/users/bio", { bio });
export const getSuggestedUsers = () => axios.get("/users/suggest");

export const getProfileByTargetUserId = (targetUserId) =>
  //   return console.log(targetUserId);
  axios.get(`/users/${targetUserId}/profile`);
