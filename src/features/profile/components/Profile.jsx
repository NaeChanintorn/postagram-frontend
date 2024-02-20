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
import { useParams } from "react-router-dom";
import * as userApi from "../../../api/user";
import CountPost from "./CountPost";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [editModal, setEditModal] = useState(false);

  const { userId } = useParams();
  const { userData } = useAuth();
  const { userProfile, follow, getFollowCount, setUserProfile } = useProfile();

  const visitingOwnProfile = userData && userData.id === userProfile.id;
  const visitingAnotherProfile = userData && userData.id !== userProfile.id;

  const following = follow.filter((el) => +el.followerId === +userProfile?.id);
  const follower = follow.filter((el) => +el.followingId === +userProfile?.id);
  // console.log(follower, following);

  // useEffect(() => {
  //   // console.log(follow);
  //   if (follow.length > 0) {
  //     return;
  //   }
  //   const fetchMe = async () => {
  //     const res = await getMe();
  //     setProfile(res.data);
  //   };
  //   fetchMe();
  //   if (userData) {
  //     getFollowCount(userData.id);
  //     // console.log(userData);
  //   }
  // }, [userData, follow]);

  useEffect(() => {
    if (follow.length > 0) {
      return;
    }

    const fetchProfile = async () => {
      // console.log(userId);
      const res = await userApi.getProfileByTargetUserId(userId);
      console.log(res);
      // console.log(userData);
      setUserProfile(res.data.profileUser);
    };
    fetchProfile();
    if (userProfile) {
      getFollowCount(userProfile.id);
      // console.log(userData);
    }
  }, [userId, follow]);

  return (
    <div className="flex flex-row gap-32">
      <div>
        <Avatar
          src={userProfile?.profileImage}
          extendClassName="w-[9rem] h-[9rem]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <h1 className="text-xl flex flex-col justify-center">
            {userProfile?.userName}
          </h1>
          {/* Visiting OwnProfile */}
          {visitingOwnProfile && (
            <button
              onClick={() => setEditModal(true)}
              className="bg-gray-200 text-sm font-medium px-4 py-2 rounded-lg "
            >
              Edit profile
            </button>
          )}
          {editModal && (
            <EditProfileModal onClose={() => setEditModal(false)} />
          )}
          {visitingAnotherProfile && (
            <button
              onClick={() => setEditModal(true)}
              className="bg-gray-200 text-sm font-medium px-4 py-2 rounded-lg "
            >
              Follow
            </button>
          )}
          {editModal && (
            <EditProfileModal onClose={() => setEditModal(false)} />
          )}
        </div>
        <div className="flex flex-row gap-16">
          {/* Count post */}
          {/* <CountPost /> */}
          <Follow follower={follower.length} following={following.length} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1">
            <h1 className="text-sm font-medium">{userProfile?.firstName}</h1>
            <h1 className="text-sm font-medium">{userProfile?.lastName}</h1>
          </div>
          <div className="text-sm">{userProfile?.bio}</div>
        </div>
      </div>
    </div>
  );
}
