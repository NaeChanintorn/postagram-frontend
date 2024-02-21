import { createContext } from "react";
import * as postApi from "../../../api/post";
import { useState } from "react";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPostsInHomePage = async () => {
    const res = await postApi.getAllPosts();
    // console.log(res.data.posts, "*************");
    setAllPosts(res.data.posts);
  };

  return (
    <PostContext.Provider value={{ getAllPostsInHomePage, allPosts }}>
      {children}
    </PostContext.Provider>
  );
}
