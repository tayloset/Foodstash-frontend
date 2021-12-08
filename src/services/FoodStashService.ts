import axios from "axios";
import Profile from "../models/Profile";
import Recipe from "../models/Recipe";
import SearchResult from "../models/SearchResult";

const baseURL: string = process.env.REACT_APP_API_URL || "";
const spoonacularBaseURL: string =
  process.env.REACT_APP_SPOONACULAR_API_URL || "";
const spoonacularApiKey: string =
  process.env.REACT_APP_SPOONACULAR_API_KEY || "";

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

export const searchRecipes = (qsp: any): Promise<SearchResult> => {
  return axios
    .get(`${spoonacularBaseURL}/complexSearch`, {
      params: {
        apiKey: spoonacularApiKey,
        number: 2,
        ...(qsp.searchTerm ? { query: qsp.searchTerm } : {}),
        ...(qsp.searchCuisine ? { cuisine: qsp.searchCuisine } : {}),
        // ...(qsp.searchDiet ? { diet: qsp.searchDiet } : {}),
        ...(qsp.searchIntolerances
          ? { intolerances: qsp.searchIntolerances }
          : {}),
        // ...(qsp.searchEquipment ? { equipment: qsp.searchEquipment } : {}),
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const searchRecipesV2 = (qsp: any): Promise<Recipe[]> => {
  let initialIDs: string = "";
  return searchRecipes(qsp).then((data) => {
    data.results.forEach((recipe) => {
      initialIDs
        ? (initialIDs += `,${recipe.id?.toString()}`)
        : (initialIDs += `${recipe.id?.toString()}`);
    });
    return axios
      .get(`${spoonacularBaseURL}/informationBulk`, {
        params: {
          apiKey: spoonacularApiKey,
          ids: initialIDs,
        },
      })
      .then((response) => {
        console.log(response);
        return response.data;
      });
  });
};

export const updateProfileV2 = (updatedProfile: Profile): Promise<Profile> => {
  console.log(updatedProfile);
  return axios
    .put(
      `${baseURL}/profiles/${encodeURIComponent(updatedProfile.uid!)}`,
      updatedProfile
    )
    .then((response) => response.data);
};
