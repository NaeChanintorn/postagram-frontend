import React from "react";
import Avatar from "../../../components/Avatar";
import { toast } from "react-toastify";
import useProfile from "../hooks/use-profile";
import useAuth from "../../../hooks/use-auth";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMe } from "../../../api/auth";
import { EditProfileModal } from "./EditProfileModal";
import Follow from "./Follow";

const countPost = 4;
const countFollower = 30;
const countFollowing = 22;

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [editModal, setEditModal] = useState(false);

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
          src={userData?.profileImage}
          extendClassName="w-[9rem] h-[9rem]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <h1 className="text-xl flex flex-col justify-center">
            {userData?.userName}
          </h1>
          <button
            onClick={() => setEditModal(true)}
            className="bg-gray-200 text-sm font-medium px-4 py-2 rounded-lg "
          >
            Edit profile
          </button>
          {editModal && (
            <EditProfileModal onClose={() => setEditModal(false)} />
          )}
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex flex-row gap-2">
            <h1 className="font-medium">{countPost}</h1>
            {countPost > 1 ? <h1>posts</h1> : <h1>post</h1>}
          </div>
          <Follow
            countFollower={countFollower}
            countFollowing={countFollowing}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1">
            <h1 className="text-sm font-medium">{userData?.firstName}</h1>
            <h1 className="text-sm font-medium">{userData?.lastName}</h1>
          </div>
          <div className="text-sm">{userData?.bio}</div>
        </div>
      </div>
    </div>
  );
}
