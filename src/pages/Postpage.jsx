import React from "react";
import Post from "../features/post/components/Post";
import usePost from "../features/post/hooks/use-post";
import { useEffect } from "react";

export default function PostPage() {
  const { getAllPostsInHomePage, allPosts } = usePost();

  useEffect(() => {
    getAllPostsInHomePage();
  }, []);

  const PostInHomePageRender = allPosts.map((post) => (
    // console.log(post)
    <Post
      key={post.id}
      id={post.posterId}
      userName={post.poster.userName}
      src={post.poster.profileImage}
      imageorvideo={post.imageOrVideo}
      caption={post.caption}
      countLike={post.likes.length}
      countComment={post.comments.length}
      createdAt={post.createdAt}
      postId={post.id}
    />
  ));
  return (
    <>
      <div className="flex flex-col gap-3 mt-5">{PostInHomePageRender}</div>
    </>
  );
}
