import axios from "../config/axios";

export const updateUser = (user) => axios.patch("/users", user);
export const updateUserBio = (bio) => axios.patch("/users/bio", { bio });
export const getSuggestedUsers = (users) => axios.get("/users", users);
