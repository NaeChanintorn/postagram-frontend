import { useEffect, createContext, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/use-auth";
import { useParams } from "react-router-dom";
import * as followApi from "../../../api/follow";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});
  const [follow, setFollow] = useState([]);

  const { authenticated } = useAuth();
  const { userId } = useParams();

  const getFollowCount = async (userId) => {
    const res = await followApi.getAllFollow(userId);
    // console.log(res);
    setFollow(res.data.isFollow);
  };

  const createFollow = async (id) => {
    const res = await followApi.createFollow(id);
    setFollow(res.data);
  };

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const res = await
  //     } catch (error) {
  //       toast.error(error.response?.data.message);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    if (+userId === authenticated.id) {
      setUserProfile(authenticated);
    }
  }, [userId, authenticated]);

  return (
    <ProfileContext.Provider
      value={{ follow, userProfile, getFollowCount, createFollow }}
    >
      {children}
    </ProfileContext.Provider>
  );
}