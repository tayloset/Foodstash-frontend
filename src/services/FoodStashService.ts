import axios from "axios";
import Details from "../models/Details";
import RecipeInstructionsModel from "../models/RecipeInstructionsModel";
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

export const getRecipeDetails = (recipeId: number): Promise<Details> => {
  return axios
    .get(`${spoonacularBaseURL}/${encodeURIComponent(recipeId)}/information`, {
      params: {
        apiKey: spoonacularApiKey,
        id: recipeId,
        includeNutrition: false,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const getRecipeInstructions = (
  recipeId: string
): Promise<RecipeInstructionsModel[]> => {
  return axios
    .get(
      `${spoonacularBaseURL}/${encodeURIComponent(
        recipeId
      )}/analyzedInstructions`,
      {
        params: {
          apiKey: spoonacularApiKey,
        },
      }
    )
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const searchRecipes = (qsp: any): Promise<SearchResult> => {
  console.log(qsp);
  return axios
    .get(`${spoonacularBaseURL}/complexSearch`, {
      params: {
        apiKey: spoonacularApiKey,
        number: 100,
        // ignorePantry: true,
        ...(qsp.searchTerm ? { query: qsp.searchTerm } : {}),
        ...(qsp.searchCuisine ? { cuisine: qsp.searchCuisine } : {}),
        ...(qsp.searchIntolerances
          ? { intolerances: qsp.searchIntolerances }
          : {}),
        ...(qsp.searchEquipment ? { equipment: qsp.searchEquipment } : {}),
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const searchByIds = (ids: string): Promise<Recipe[]> => {
  return axios
    .get(`${spoonacularBaseURL}/informationBulk`, {
      params: {
        apiKey: spoonacularApiKey,
        ids,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const searchByIngredients = (qsp: any): Promise<Recipe[]> => {
  return axios
    .get(`${spoonacularBaseURL}/findByIngredients`, {
      params: {
        apiKey: spoonacularApiKey,
        ranking: 2,
        number: 100,
        ...(qsp.searchPantry ? { ingredients: qsp.searchPantry } : {}),
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const searchRecipesV2 = (qsp: any): Promise<Recipe[]> => {
  let queryCuisineIDs: number[] = [];
  let ingredientsIDs: number[] = [];
  let sharedIDs: number[] = [];
  return searchRecipes(qsp).then((data) => {
    data.results.forEach((recipe) => {
      queryCuisineIDs.push(recipe?.id!);
    });
    searchByIngredients(qsp).then((data) => {
      data.forEach((recipe) => {
        ingredientsIDs.push(recipe?.id!);
      });
    });
    sharedIDs = ingredientsIDs.concat(queryCuisineIDs);
    sharedIDs.sort((a, b) => a - b);
    for (let i = 0; i < sharedIDs.length; i++) {
      if (sharedIDs[i] === sharedIDs[i + 1]) {
        i++;
      } else {
        sharedIDs.splice(i, 1);
      }
    }
    return searchByIds(sharedIDs.toString());
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
