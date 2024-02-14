import { useState } from "react";
import Avatar from "../components/Avatar";
import PostInProfile from "../components/PostInProfile";
import { EditProfileModal } from "../components/Modal";

const countPost = 4;
const countFollower = 30;
const countFollowing = 22;
const userName = "johndoe";
const fullName = {
  firstName: "John",
  lastName: "Doe",
};
const bio = "Mockup Profile";

export default function ProfilePage() {
  const [editModal, setEditModal] = useState(false);
  return (
    <div className="flex flex-row">
      <div className=" w-[21.2vw] invisible">invicible</div>
      <div className="flex flex-col items-center w-full mt-9">
        <div className="flex flex-row gap-32">
          <div>
            <Avatar extendClassName="w-[9rem] h-[9rem]" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
              <h1 className="text-xl flex flex-col justify-center">
                {userName}
              </h1>
              <button
                onClick={() => setEditModal(true)}
                className="bg-gray-200 text-sm font-medium px-4 py-2 rounded-lg "
              >
                Edit profile
              </button>
              {editModal && (
                <EditProfileModal
                  onClose={() => setEditModal(false)}
                  userName={userName}
                  firstName={fullName.firstName}
                  lastName={fullName.lastName}
                />
              )}
            </div>
            <div className="flex flex-row gap-16">
              <div className="flex flex-row gap-2">
                <h1 className="font-medium">{countPost}</h1>
                {countPost > 1 ? <h1>posts</h1> : <h1>post</h1>}
              </div>
              <div className="flex flex-row gap-2">
                <h1 className="font-medium">{countFollower}</h1>
                {countFollower > 1 ? <h1>followers</h1> : <h1>follower</h1>}
              </div>
              <div className="flex flex-row gap-2">
                <h1 className="font-medium">{countFollowing}</h1>
                <h1>following</h1>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1">
                <h1 className="text-sm font-medium">{fullName.firstName}</h1>
                <h1 className="text-sm font-medium">{fullName.lastName}</h1>
              </div>
              <div className="text-sm">{bio}</div>
            </div>
          </div>
        </div>
        <div className="max-w-[48vw]">
          <hr className="w-full my-16" />
          <div className="grid grid-cols-3 gap-1">
            <PostInProfile />
            <PostInProfile />
            <PostInProfile />
            <PostInProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
