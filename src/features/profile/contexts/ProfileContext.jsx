import { useEffect, createContext, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/use-auth";
import { useParams } from "react-router-dom";
import * as followApi from "../../../api/follow";
import * as userApi from "../../../api/user";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});
  const [follow, setFollow] = useState([]);

  const { authenticated, userData } = useAuth();
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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log(userId);
        const res = await userApi.getProfileByTargetUserId(userId);
        // console.log(res);
        // console.log(userData);
        setUserProfile(res.data.profileUser);
      } catch (error) {
        toast.error(error.response?.data.message);
      }
    };
    fetchProfile();
  }, [userId]);

  useEffect(() => {
    if (userData) {
      if (+userId === userData.id) {
        setUserProfile(userData);
      }
    }
  }, [userId, userData]);

  return (
    <ProfileContext.Provider
      value={{ follow, userProfile, getFollowCount, createFollow }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
