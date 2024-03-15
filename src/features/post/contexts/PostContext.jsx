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

  const getAllPostsInHomePage = async () => {
    try {
      const res = await postApi.getAllPosts();
      setAllPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const editPostInHomePage = async (postId, caption) => {
    const res = await postApi.editPost(postId, caption);
    setPostData((prev) => ({ ...prev, caption: res.data.caption }));
  };

  const deletePostInHomePage = async (postId, isDeleted) => {
    const res = await postApi.deletePost(postId, isDeleted);
    setPostData((prev) => ({ ...prev, isDeleted: res.data.isDeleted }));
  };

  const createPostImageContext = async (formData) => {
    const res = await postApi.createPostImage(formData);
    setAllPosts((prev) => [res.data.post, ...prev]);
  };

  const createPostVideoContext = async (formData) => {
    const res = await postApi.createPostVideo(formData);
    setAllPosts((prev) => [res.data.post, ...prev]);
  };

  // LIKES

  const createLike = async (postId, userId) => {
    await postApi.likePost(postId, userId);
    setIsClick((prev) => !prev);
  };

  const deleteLike = async (postId, userId) => {
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
