import { ReactNode, useState } from "react";
import { auth } from "../firebaseConfig";
import UpdateProfileContext from "./UpdateProfileContext";
import Profile from "../models/Profile";
import { getProfile, updateProfile } from "../services/FoodStashService";

function UpdateProfileContextProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const grabUserProfile = () => {
    getProfile(auth.currentUser?.uid!).then((array) => setProfile(array[0]));
  };
  const updateProfileHandler = (category: string, updateData: string): void => {
    grabUserProfile();
    updateProfile(profile?.uid!, category, updateData);
  };

  return (
    <UpdateProfileContext.Provider value={{ profile, updateProfileHandler }}>
      {children}
    </UpdateProfileContext.Provider>
  );
}

export default UpdateProfileContextProvider;
