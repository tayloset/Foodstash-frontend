import { User } from "firebase/auth";
import { createContext, Profiler } from "react";
import Profile from "../models/Profile";
export interface AuthContextModel {
  user: User | null; // null when not logged in
  profile: Profile | null; // null when not logged in
}
const defaultValue: AuthContextModel = {
  user: null,
  profile: null,
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
