import axios from "../config/axios";

export const searchUser = (userName) => axios.post("/search", { userName });
