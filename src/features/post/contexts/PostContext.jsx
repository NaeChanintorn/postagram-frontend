import { createContext } from "react";
import * as postApi from "../../../api/post";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [postData, setPostData] = useState(null);
  const { userData } = useAuth();

  const getAllPostsInHomePage = async (postId, caption) => {
    const res = await postApi.getAllPosts(caption);
    // console.log(res.data.posts, "*************");
    setAllPosts(res.data.posts);
  };

  const editPostInHomePage = async (caption) => {
    const res = await postApi.editPost(caption);
    // console.log(res);
    setPostData((prev) => ({ ...prev, caption: res.data.caption }));
  };

  return (
    <PostContext.Provider
      value={{ getAllPostsInHomePage, allPosts, editPostInHomePage, postData }}
    >
      {children}
    </PostContext.Provider>
  );
}
