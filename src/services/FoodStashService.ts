import axios from "axios";
import Profile from "../models/Profile";
import Recipe from "../models/Recipe";

const baseURL: string = process.env.REACT_APP_API_URL || "";
const spoonacularBaseURL: string = process.env.SPOONACULAR_API_URL || "";
const spoonacularApiKey: string = process.env.SPOONACULAR_API_KEY || "";

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
  category: string,
  updateData: any
): Promise<Profile> => {
  return axios
    .put(
      `${baseURL}/profiles/${encodeURIComponent(uid)}/${encodeURIComponent(
        category
      )}`,
      { updateData }
    )
    .then((response) => {
      console.log(response.data);
      console.log(updateData);
      return response.data;
    });
};

export const searchRecipes = (qsp: any): Promise<Recipe[]> => {
  return axios.get(`${spoonacularBaseURL}/complexSearch`, {
    params: {
      apiKey: spoonacularApiKey,
      ...(qsp.searchTerm ? { query: qsp.searchTerm } : {}),
      ...(qsp.searchCuisine ? { cuisine: qsp.searchCuisine } : {}),
      ...(qsp.searchDiet ? { diet: qsp.searchDiet } : {}),
      ...(qsp.searchIntolerances
        ? { intolerances: qsp.searchIntolerances }
        : {}),
      ...(qsp.searchEquipment ? { equipment: qsp.searchEquipment } : {}),
    },
  });
};
