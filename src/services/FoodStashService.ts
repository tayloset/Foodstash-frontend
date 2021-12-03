import axios from "axios";
import Profile from "../models/Profile";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getProfile = (uid: string): Promise<Profile[]> => {
  return axios
    .get(`${baseURL}/profiles/${encodeURIComponent(uid)}`)
    .then((response) => response.data);
};

export const addProfile = (uid: string): Promise<Profile> => {
  return axios
    .post(`${baseURL}/profiles/${encodeURIComponent(uid)}`)
    .then((response) => response.data);
};

export const updateProfile = (
  uid: string,
  category: string
): Promise<Profile> => {
  return axios
    .put(
      `${baseURL}/profiles/${encodeURIComponent(uid)}/${encodeURIComponent(
        category
      )}`
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};
