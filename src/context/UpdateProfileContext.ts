import { createContext } from "react";
import Profile from "../models/Profile";
export interface UpdateProfileContextModel {
  profile: Profile | null; // null when not logged in
  updateProfileHandler: (category: string, updateData: string) => void;
}
const defaultValue: UpdateProfileContextModel = {
  profile: null,
  updateProfileHandler: () => {},
};
const UpdateProfileContext = createContext(defaultValue);
export default UpdateProfileContext;
