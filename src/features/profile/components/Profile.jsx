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
  const { userId } = useParams();
  const [profile, setProfile] = useState(userId);
  const [editModal, setEditModal] = useState(false);
  const [isClickFollow, setIsClickFollow] = useState(false);

  const { userData } = useAuth();
  const {
    userProfile,
    follow,
    createFollow,
    deleteFollow,
    countFollowingNumber,
    countFollowerNumber,
    setIsClick,
    isClick,
    getProfile,
  } = useProfile();
  console.log(userId, "------------------");
  // console.log(follow, "follow");

  const visitingOwnProfile = userData && userData.id === userProfile.id;
  const visitingAnotherProfile = userData && userData.id !== userProfile.id;

  // console.log(countFollowerNumber);

  let following = [];
  let follower = [];
  let isFollow = [];

  if (follow.length > 0) {
    following = follow.filter((el) => +el?.followerId === +userProfile?.id);
    follower = follow.filter((el) => +el?.followingId === +userProfile?.id);
    // console.log(following, "following");

    isFollow = follower.filter((el) => +el?.followerId === +userData.id);
  }

  // console.log(follow, "**************************");
  // console.log(isFollow, "----------------------");

  // console.log(follower, following);
  // console.log(userProfile);

  const onFollow = async () => {
    // setIsClickFollow((prev) => !prev);
    await createFollow(userId);
    setIsClick(() => true);
    // getProfile(userProfile?.id);
    await getProfile(userId);
  };

  const onUnFollow = async () => {
    // setIsClickFollow((prev) => !prev);

    // setIsClick(() => true);
    await deleteFollow(userId);
    setIsClick(() => false);
    // getProfile(userProfile?.id);
    await getProfile(userId);
  };

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
            <>
              {isFollow.length > 0 ? (
                <button
                  onClick={onUnFollow}
                  className="bg-green-500 text-sm font-medium px-4 py-2 rounded-lg "
                >
                  Following
                </button>
              ) : (
                <button
                  onClick={onFollow}
                  className="bg-gray-200 text-sm font-medium px-4 py-2 rounded-lg "
                >
                  Follow
                </button>
              )}
            </>
          )}
        </div>
        <div className="flex flex-row gap-16">
          {/* Count post */}
          <CountPost />

          {/* ************************************************* */}

          {/* <Follow follower={follower?.length} following={following?.length} /> */}
          <Follow
            follower={countFollowerNumber}
            following={countFollowingNumber}
          />

          {/* ************************************************** */}
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
