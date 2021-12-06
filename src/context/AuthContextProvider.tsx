import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import Profile from "../models/Profile";
import {
  addProfile,
  getProfile,
  updateProfile,
} from "../services/FoodStashService";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const updateProfileHandler = (category: string, updateData: string): void => {
    updateProfile(profile?.uid!, category, updateData).then(() => {
      getProfile(user?.uid!).then((array) => setProfile(array[0]));
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
