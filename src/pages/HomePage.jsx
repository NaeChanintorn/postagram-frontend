import { useEffect } from "react";
import { SuggestedProfile } from "../components/FriendProfile";
import useAuth from "../hooks/use-auth";
import { useState } from "react";
import * as userApi from "../api/user";
import usePost from "../features/post/hooks/use-post";
import PostRender from "../features/post/components/PostRender";

export default function HomePage() {
  const { userData } = useAuth();
  const [suggested, setSuggested] = useState([]);
  const { setIsClick, isClick } = usePost();

  useEffect(() => {
    suggestedRandom();
  }, []);

  // Suggested Users

  const suggestedRandom = async () => {
    const res = await userApi.getSuggestedUsers();
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

  return (
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
          Suggested for you
        </h1>

        <div className="flex flex-col gap-5">{suggestedRender}</div>
      </div>
    </div>
  );
}
