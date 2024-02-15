import FriendProfile, { SuggestedProfile } from "../components/FriendProfile";
import useAuth from "../hooks/use-auth";

export default function HomePage() {
  const { userData } = useAuth();
  return (
    // width sidebar = 17.5 vw width searchbar = 24.5 vw
    <div className="overflow-auto flex flex-row w-[100vw] justify-between">
      <div className="w-[30vw] invisible">invicible</div>
      <div className="w-[35vw] text-center">Posts</div>
      {/* Profile and Suggested Users */}
      <div className="w-[30vw] mt-10 flex flex-col gap-8">
        <SuggestedProfile
          userName={userData.userName}
          fisrtName={userData.firstName}
          lastName={userData.lastName}
        />
        <h1 className="text-sm text-gray-500 font-medium ">
          Suggested for you
        </h1>
        <div className="flex flex-col gap-5">
          <SuggestedProfile userName="a" />
          <SuggestedProfile userName="b" />
          <SuggestedProfile userName="c" />
        </div>
      </div>
      {/* ------------------------------ */}
    </div>
  );
}
