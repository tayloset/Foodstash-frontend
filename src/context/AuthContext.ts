import { User } from "firebase/auth";
import { createContext } from "react";
import Profile from "../models/Profile";
export interface AuthContextModel {
  user: User | null; // null when not logged in
  profile: Profile | null; // null when not logged in
  updateProfileHandler: (category: string, updateData: any) => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profile: null,
  updateProfileHandler: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
