import { createContext } from "react";
import * as postApi from "../../../api/post";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";
import { useEffect } from "react";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(allPosts, "allPostsContext");

  const getAllPostsInHomePage = async () => {
    try {
      const res = await postApi.getAllPosts();
      // console.log(res.data.posts, "context");
      setAllPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const editPostInHomePage = async (postId, caption) => {
    const res = await postApi.editPost(postId, caption);
    // console.log(res);
    setPostData((prev) => ({ ...prev, caption: res.data.caption }));
  };

  const deletePostInHomePage = async (postId, isDeleted) => {
    const res = await postApi.deletePost(postId, isDeleted);
    // console.log(res, "----------------");
    // console.log(postId);
    setPostData((prev) => ({ ...prev, isDeleted: res.data.isDeleted }));
  };

  const createPostImageContext = async (formData) => {
    const res = await postApi.createPostImage(formData);
    console.log(res.data, "res.data");
    // await getAllPostsInHomePage();
    // setPostData(res.data.post);
    setAllPosts((prev) => [res.data.post, ...prev]);
  };

  console.log(postData, "postData");

  const createPostVideoContext = async (formData) => {
    const res = await postApi.createPostVideo(formData);
    setPostData(res.data.post);
    // await getAllPostsInHomePage();
  };

  // LIKES

  const createLike = async (postId, userId) => {
    // console.log(postId);
    await postApi.likePost(postId, userId);
    // console.log(res);
    setIsClick((prev) => !prev);
  };

  const deleteLike = async (postId, userId) => {
    // console.log(postId);
    await postApi.unlikePost(postId, userId);
    setIsClick((prev) => !prev);
  };

  // COMMENTS

  const createCommentContext = async (comment, postId) => {
    const res = await postApi.createComment(comment, postId);
    setCommentData(res.data.newComment);
    getCommentContext(postId);
  };

  const getCommentContext = async (postId) => {
    const res = await postApi.getAllComment(postId);
    setCommentData(res.data.allComments);
  };

  const editCommentContext = async (comment, postId, commentId) => {
    const res = await postApi.editComment(comment, postId, commentId);
    getCommentContext(postId);
    setCommentData((prev) => ({ ...prev, comment: res.data.edit.comment }));
  };

  useEffect(() => {
    getAllPostsInHomePage();
  }, [isClick, postData]);

  return (
    <PostContext.Provider
      value={{
        getAllPostsInHomePage,
        allPosts,
        editPostInHomePage,
        postData,
        deletePostInHomePage,
        createPostImageContext,
        createPostVideoContext,
        createLike,
        deleteLike,
        isClick,
        setIsClick,
        createCommentContext,
        commentData,
        getCommentContext,
        editCommentContext,
        loading,
        setLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
