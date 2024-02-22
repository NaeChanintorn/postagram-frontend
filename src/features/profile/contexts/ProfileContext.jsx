import { useEffect, createContext, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/use-auth";
import { useParams } from "react-router-dom";
import * as followApi from "../../../api/follow";
import * as userApi from "../../../api/user";
import * as postApi from "../../../api/post";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});
  const [follow, setFollow] = useState([]);
  const [post, setPost] = useState([]);

  const { userData } = useAuth();
  const { userId } = useParams();

  // console.log(userData, "----------------------------");

  const getFollowCount = async (userId) => {
    const res = await followApi.getAllFollow(userId);
    setFollow(res.data.isFollow);
  };

  const createFollow = async (id) => {
    const res = await followApi.createFollow(id);
    setFollow(res.data);
  };

  const getPostCount = async (userId) => {
    const res = await postApi.getAllPostsForEachUser(+userId);
    setPost(res.data.posts);
  };

  const deleteFollow = async (id) => {
    await followApi.unfollow(id);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // console.log(userId);
        const res = await userApi.getProfileByTargetUserId(+userId);
        // console.log(res);
        // console.log(userData);
        setUserProfile(res.data.profileUser);
      } catch (error) {
        toast.error(error.response?.data.message);
      }
    };
    fetchProfile();
  }, [userId]);

  // useEffect(() => {
  //   if (userProfile) {
  //     if (+userId === userProfile.id) {
  //       setUserProfile(userProfile);
  //     }
  //   }
  // }, [userId, userProfile]);

  return (
    <ProfileContext.Provider
      value={{
        follow,
        userProfile,
        getFollowCount,
        createFollow,
        deleteFollow,
        setUserProfile,
        getPostCount,
        post,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
