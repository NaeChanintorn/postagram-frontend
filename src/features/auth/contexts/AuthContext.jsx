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
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getToken()) {
      authApi
        .getMe()
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch((err) => {
          toast.error(err.response?.data.message);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  const login = async (credential) => {
    const res = await authApi.login(credential);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };

  const logout = async () => {
    setAuthUser(null);
    removeToken();
  };

  return (
    <AuthContext.Provider value={{ register, login, authUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
