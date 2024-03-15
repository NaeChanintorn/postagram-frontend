import React from "react";
import Post from "./Post";
import usePost from "../hooks/use-post";
import { useEffect } from "react";

export default function PostRender({ setOnClick, isClick }) {
  const { allPosts, getAllPostsInHomePage } = usePost();

  // console.log(allPosts, "allPosts");

  useEffect(() => {
    getAllPostsInHomePage();
  }, []);

  return (
    <div>
      {allPosts.map((post) => {
        // console.log(allPosts, "kwaiiiiiiiiiiiiiiiii");
        return (
          <Post
            key={post?.id}
            id={post?.posterId}
            userName={post?.poster?.userName}
            src={post?.poster?.profileImage}
            imageorvideo={post?.imageOrVideo}
            caption={post?.caption}
            countLike={post?.likes?.length}
            countComment={post?.comments?.length}
            createdAt={post?.createdAt}
            postId={post?.id}
            isDeleted={post?.isDeleted}
            like={post?.likes}
            setIsClick={setOnClick}
            onClick={isClick}
          />
        );
      })}
    </div>
  );
}
