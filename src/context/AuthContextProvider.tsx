import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import Profile from "../models/Profile";
import { addProfile, getProfile } from "../services/FoodStashService";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      if (user) {
        getProfile(user.uid).then((array) => {
          if (array.length === 0) {
            addProfile(user.uid).then((response) => {
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
    <AuthContext.Provider value={{ user, profile }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
