import PostProfile from "../features/profile/components/PostProfile";
import Profile from "../features/profile/components/Profile";

export default function ProfilePage() {
  return (
    <div className="flex flex-row">
      <div className=" w-[21.2vw] invisible">invicible</div>
      <div className="flex flex-col items-center w-full mt-9">
        <Profile />
        <div className="max-w-[48vw]">
          <hr className="w-full my-16" />
          <PostProfile />
        </div>
      </div>
    </div>
  );
}
