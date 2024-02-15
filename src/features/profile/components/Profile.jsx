import React from "react";
import Avatar from "../../../components/Avatar";
import { EditProfileModal } from "../../../components/Modal";
import { toast } from "react-toastify";
import useProfile from "../hooks/use-profile";
import useAuth from "../../../hooks/use-auth";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMe } from "../../../api/auth";

export default function Profile() {
  const [profile, setProfile] = useState({});

  const { userData } = useAuth();

  useEffect(() => {
    const fetchMe = async () => {
      const res = await getMe();
      setProfile(res.data);
    };
    fetchMe();
  }, []);

  return (
    <div className="flex flex-row gap-32">
      <div>
        <Avatar
          profileImage={userData?.profileImage}
          extendClassName="w-[9rem] h-[9rem]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <h1 className="text-xl flex flex-col justify-center">
            {userData.userName}
          </h1>
          <button
            onClick={onClick}
            className="bg-gray-200 text-sm font-medium px-4 py-2 rounded-lg "
          >
            Edit profile
          </button>
          {editModal && <EditProfileModal onClose={onClose} />}
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
            <h1 className="text-sm font-medium">{userData.firstName}</h1>
            <h1 className="text-sm font-medium">{userData.lastName}</h1>
          </div>
          <div className="text-sm">{userData?.bio}</div>
        </div>
      </div>
    </div>
  );
}
