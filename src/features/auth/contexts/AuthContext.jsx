import { createContext } from "react";

import * as authApi from "../../../api/auth";
import { useState } from "react";
import {
  getToken,
  removeToken,
  storeToken,
} from "../../../utilities/local-storage";
import { useEffect } from "react";
import { toast } from "react-toastify";

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

  return (
    <AuthContext.Provider
      value={{ register, login, userData, logout, authenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}
