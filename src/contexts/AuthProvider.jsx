import { children, createContext, useState, useContext } from "react";
import {
  getTokenDataFromLocalStorage,
  getUserDataFromLocalStorage,
  setTokenDataToLocalStorage,
  setUserDataToLocalStorage,
} from "../utils/localStorage";

const initialTokenValues = {
  token_type: null,
  expries_in: 0,
  access_token: null,
  refresh_token: null,
};
const initialUserValues = {
  id: null,
  name: "",
  email: "",
  created_at: "",
  updated_at: "",
};
const AuthContext = createContext({
  user: {},
  token: {},
});
export const AuthProvider = ({ children }) => {
  const userStorage = getUserDataFromLocalStorage(initialUserValues);
  const tokenStorage = getTokenDataFromLocalStorage(initialTokenValues);
  const [user, setUser] = useState(userStorage);
  const [token, setToken] = useState(tokenStorage);
  const setUserData = (data) => {
    setUser(data);
    setUserDataToLocalStorage(data);
  };
  const setTokenData = (data) => {
    setToken(data);
    setTokenDataToLocalStorage(data);
  };
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(initialUserValues);
    setToken(initialTokenValues);
  };
  return (
    <AuthContext.Provider
      value={{ user, token, setUserData, setTokenData, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
