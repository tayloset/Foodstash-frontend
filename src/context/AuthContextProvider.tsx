import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import Profile from "../models/Profile";
import {
  addProfile,
  getProfile,
  updateProfileV2,
} from "../services/FoodStashService";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const updateProfileHandler = (updatedProfile: Profile): void => {
    updateProfileV2(updatedProfile).then(() => {
      getProfile(updatedProfile?.uid!).then((array) => setProfile(array[0]));
      console.log(updatedProfile);
    });
  };

  useEffect(() => {
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      if (newUser) {
        getProfile(newUser.uid).then((array) => {
          if (array.length === 0) {
            addProfile(newUser.uid).then((response) => {
              console.log(response);
              setProfile(response);
            });
          } else {
            setProfile(array[0]);
          }
        });
      } else {
        setProfile(null);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, profile, updateProfileHandler }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
