"use client";

import API from "@/api/index.api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  refreshToken: () => void;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
  refreshToken: () => {},
};
const AuthContext = createContext<AuthContextValue>(initialValue);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    API.auth.logOut();
  };

  const refreshToken = async () => {
    const response = await API.auth.refreshToken();
    const data = response.result;
    if (data) {
      logIn();
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [router, isLoggedIn]);

  const value: AuthContextValue = { isLoggedIn, logIn, logOut, refreshToken };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
