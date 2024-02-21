import { createContext } from "react";
import * as postApi from "../../../api/post";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);
  const [postData, setPostData] = useState(null);

  const getAllPostsInHomePage = async (postId, caption) => {
    const res = await postApi.getAllPosts(caption);
    // console.log(res.data.posts, "*************");
    setAllPosts(res.data.posts);
  };

  const editPostInHomePage = async (postId, caption) => {
    const res = await postApi.editPost(postId, caption);
    // console.log(res);
    setPostData((prev) => ({ ...prev, caption: res.data.caption }));
  };

  const deletePostInHomePage = async (postId) => {
    // console.log(postId);
    await postApi.deletePost(postId);
  };

  const createPostImage = async (image, caption) => {
    const res = await postApi.createPostImage(image, caption);
    setPostData(res.data.post);
  };

  return (
    <PostContext.Provider
      value={{
        getAllPostsInHomePage,
        allPosts,
        editPostInHomePage,
        postData,
        deletePostInHomePage,
        createPostImage,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
