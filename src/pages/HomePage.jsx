import { useEffect } from "react";
import { SuggestedProfile } from "../components/FriendProfile";
import useAuth from "../hooks/use-auth";
import { useState } from "react";
import * as userApi from "../api/user";
import { ProfileContext } from "../features/profile/contexts/ProfileContext";
import Post from "../features/post/components/Post";
import usePost from "../features/post/hooks/use-post";
import PostPage from "./Postpage";

export default function HomePage() {
  const { userData } = useAuth();
  const [suggested, setSuggested] = useState([]);

  // const { getAllPostsInHomePage, allPosts } = usePost();

  // useEffect(() => {
  //   getAllPostsInHomePage();
  // }, []);

  useEffect(() => {
    suggestedRandom();
  }, []);

  // Suggested Users

  const suggestedRandom = async () => {
    const res = await userApi.getSuggestedUsers();
    // console.log(res.data.randomUser, "-------------------");
    setSuggested(res.data.randomUser);
  };

  const suggestedRender = suggested.map((user) => (
    <SuggestedProfile
      key={user.id}
      id={user.id}
      userName={user.userName}
      profileImage={user.profileImage}
      fisrtName={user.firstName}
      lastName={user.lastName}
    />
  ));
  // console.log(suggestedRender, "****************");

  // Posts AllUsers

  // const PostInHomePageRender = allPosts.map((post) => (
  //   // console.log(post)
  //   <Post
  //     key={post.id}
  //     id={post.posterId}
  //     userName={post.poster.userName}
  //     src={post.poster.profileImage}
  //     imageorvideo={post.imageOrVideo}
  //     caption={post.caption}
  //     countLike={post.likes.length}
  //     countComment={post.comments.length}
  //     createdAt={post.createdAt}
  //     postId={post.id}
  //   />
  // ));

  return (
    // width sidebar = 17.5 vw width searchbar = 24.5 vw
    <div className="overflow-auto flex flex-row w-[100vw] justify-between">
      <div className="w-[25vw] invisible">invicible</div>
      <PostPage />
      {/* <div className="flex flex-col gap-3 mt-5">{PostInHomePageRender}</div> */}
      {/* Profile and Suggested Users */}
      <div className="w-[30vw] mt-10 flex flex-col gap-8">
        {/*  ME */}
        <SuggestedProfile
          src={userData?.profileImage}
          id={userData?.id}
          userName={userData?.userName}
          fisrtName={userData?.firstName}
          lastName={userData?.lastName}
        />
        <h1 className="text-sm text-gray-500 font-medium ">
          Suggested for you
        </h1>
        {/* Suggested Users */}
        <div className="flex flex-col gap-5">{suggestedRender}</div>
      </div>
      {/* ------------------------------ */}
    </div>
  );
}
