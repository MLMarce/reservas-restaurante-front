"use client";

import { IUserData } from "@/interfaces/user-interface";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  user: IUserData | null;
  setUser: (user: IUserData | null) => void;
}
const AuthContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
});
interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUserData | null>(null);

  useEffect(() => {
    // const tokenFromCookie = localStorage.getItem('authToken')
    // const userFromCookie = localStorage.getItem('user')
    // const user = userFromCookie ? JSON.parse(userFromCookie) : null
    // setUser(user)
    // if (tokenFromCookie) {
    // 	setToken(tokenFromCookie)
    // }
  }, []);
  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
};
export const useAuth = () => useContext(AuthContext);
