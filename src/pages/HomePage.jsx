import { useEffect } from "react";
import { SuggestedProfile } from "../components/FriendProfile";
import useAuth from "../hooks/use-auth";
import { useState } from "react";
import * as userApi from "../api/user";

export default function HomePage() {
  const { userData } = useAuth();
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    suggestedRandom();
  }, []);

  const suggestedRandom = async () => {
    const res = await userApi.getSuggestedUsers();
    console.log(res.data.randomUser, "-------------------");
    setSuggested(res.data.randomUser);
  };

  const suggestedRender = suggested.map((user) => (
    <SuggestedProfile
      key={user.id}
      userName={user.userName}
      profileImage={user.profileImage}
      fisrtName={user.firstName}
      lastName={user.lastName}
    />
  ));

  console.log(suggestedRender, "****************");

  return (
    // width sidebar = 17.5 vw width searchbar = 24.5 vw
    <div className="overflow-auto flex flex-row w-[100vw] justify-between">
      <div className="w-[30vw] invisible">invicible</div>
      <div className="w-[35vw] text-center">Posts</div>
      {/* Profile and Suggested Users */}
      <div className="w-[30vw] mt-10 flex flex-col gap-8">
        {/*  ME */}
        <SuggestedProfile
          src={userData?.profileImage}
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
