import { useEffect } from "react";
import { SuggestedProfile } from "../components/FriendProfile";
import useAuth from "../hooks/use-auth";
import { useState } from "react";
import * as userApi from "../api/user";
import { ProfileContext } from "../features/profile/contexts/ProfileContext";
import Post from "../features/post/components/Post";
import usePost from "../features/post/hooks/use-post";
import PostRender from "../features/post/components/PostRender";
import Loading from "../components/Loading";

export default function HomePage() {
  const { userData } = useAuth();
  const [suggested, setSuggested] = useState([]);
  const [onClick, setOnClick] = useState(false);
  const { getAllPostsInHomePage, allPosts, setIsClick, isClick } = usePost();

  console.log(allPosts, "HOmeeeeeeeeeeeee");
  // console.log(suggested);

  // useEffect(() => {
  //   getAllPostsInHomePage();
  // }, [isClick, onClick]);

  // useEffect(() => {
  //   // reload();
  // }, [allPosts.length]);

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
  // if (loading) {
  //   return <Loading />;
  // }

  return (
    // width sidebar = 17.5 vw width searchbar = 24.5 vw
    <div className="overflow-auto flex flex-row w-[100vw] justify-between">
      <div className="w-[25vw] invisible">invicible</div>
      <div className="flex flex-col gap-3 mt-5">
        <PostRender setOnClick={setIsClick} isClick={isClick} />
      </div>

      <div className="w-[30vw] mt-10 flex flex-col gap-8">
        <SuggestedProfile
          profileImage={userData?.profileImage}
          id={userData?.id}
          userName={userData?.userName}
          fisrtName={userData?.firstName}
          lastName={userData?.lastName}
        />
        <h1 className="text-sm text-gray-500 font-medium ">
          {onClick}Suggested for you
        </h1>

        <div className="flex flex-col gap-5">{suggestedRender}</div>
      </div>
    </div>
  );
}
