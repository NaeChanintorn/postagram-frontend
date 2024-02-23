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
  const [countFollowingNumber, setCountFollowingNumber] = useState(0);
  const [countFollowerNumber, setCountFollowerNumber] = useState(0);

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

  const countFollowingContext = async (id) => {
    const res = await followApi.getCountFollowing(+id);
    setCountFollowingNumber(res.data.count);
    console.log(res.data.count);
  };

  const countFollowerContext = async (id) => {
    console.log(".............");
    const res = await followApi.getCountFollower(+id);
    console.log(res.data.count);
    setCountFollowerNumber(res.data.count);
  };

  countFollowingContext(+userId);
  countFollowerContext(+userId);

  useEffect(() => {
    // if (!isNaN(follow.length)) {
    //   return;
    // }
    const fetchProfile = async () => {
      try {
        // console.log(userId);

        const res = await userApi.getProfileByTargetUserId(+userId);

        // getFollowCount();
        // console.log(res);
        // console.log(userData);
        setUserProfile(res.data.profileUser);
        // if (userProfile) {
        if (!isNaN(follow.length)) {
          return;
        }
        getFollowCount(userProfile?.id);
        // console.log(userData);
        // }
      } catch (error) {
        toast.error(error.response?.data.message);
      }
    };
    fetchProfile();
  }, [userId, follow]);

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
        countFollowingNumber,
        countFollowerNumber,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
