import { useState, useEffect, createContext } from "react";
import * as authApi from "../../../api/auth";
import * as userApi from "../../../api/user";
import {
  getToken,
  removeToken,
  storeToken,
} from "../../../utilities/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [authenticated, setAuthenticated] = useState(getToken() ? true : null);

  useEffect(() => {
    if (authenticated) {
      fetchAuthUser();
    }
  }, [authenticated]);

  const fetchAuthUser = async () => {
    const res = await authApi.getMe();
    setUserData(res.data.user);
  };

  const register = async (user) => {
    const res = await authApi.register(user);
    storeToken(res.data.accessToken);
    setAuthenticated(true);
  };

  const login = async (credential) => {
    const res = await authApi.login(credential);
    storeToken(res.data.accessToken);
    setAuthenticated(true);
  };

  const logout = async () => {
    removeToken();
    setAuthenticated(null);
  };

  const updateUser = async (user) => {
    const res = await userApi.updateUser(user);
    setUserData((prev) => ({ ...prev, profileImage: res.data }));
  };

  const updateUserBioContext = async (bio) => {
    console.log(bio);
    const res = await userApi.updateUserBio(bio);
    console.log(res);
    setUserData((prev) => ({ ...prev, bio: res.data.bio }));
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        userData,
        logout,
        authenticated,
        updateUser,
        updateUserBioContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
