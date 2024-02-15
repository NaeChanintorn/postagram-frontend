import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/use-auth";
import { useParams } from "react-router-dom";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});

  const { authenticated } = useAuth();
  const { userId } = useParams();

  useEffect(() => {
    if (+userId === authenticated.id) {
      setUserProfile(authenticated);
    }
  }, [userId, authenticated]);

  return (
    <ProfileContext.Provider value={{ userProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
