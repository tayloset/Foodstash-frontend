import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Recipe from "../models/Recipe";
import { searchRecipesV2 } from "../services/FoodStashService";
import RecipeList from "./RecipeList";
import "./Search.css";

const Search = () => {
  const [cuisineClicked, setCuisineClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisineArray, setCuisineArray] = useState(new Array(26).fill(false));
  const cuisineNameArray: string[] = [
    "african",
    "american",
    "british",
    "cajun",
    "caribbean",
    "chinese",
    "easternEuropean",
    "european",
    "french",
    "german",
    "indian",
    "irish",
    "italian",
    "japanese",
    "jewish",
    "korean",
    "latinAmerican",
    "mediterranean",
    "mexican",
    "middleEastern",
    "nordic",
    "southern",
    "spanish",
    "thai",
    "vietnamese",
  ];
  let cuisineString: string = "";
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { profile } = useContext(AuthContext);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = cuisineArray.map((item, index) =>
      index === position ? !item : item
    );
    setCuisineArray(updatedCheckedState);
  };

  const displayCuisines = (e: FormEvent): void => {
    e.preventDefault();
    if (cuisineClicked) {
      setCuisineClicked(false);
    } else {
      setCuisineClicked(true);
    }
  };

  const searchHandler = (e: FormEvent) => {
    e.preventDefault();
    cuisineString = "";
    cuisineArray.forEach((cuisine, index) => {
      if (cuisine) {
        cuisineString += `,${cuisineNameArray[index]}`;
      }
    });

    if (profile) {
      searchRecipesV2({
        searchTerm,
        searchCuisine: cuisineString,
        searchIntolerances: profile!.intolerances,
        searchPantry: profile!.pantry.toString(),
        searchEquipment: `"${profile!.equipment.join(`""`)}"`,
      }).then((data) => {
        setRecipes(data);
        console.log(data);
      });
    } else {
      searchRecipesV2({ searchTerm, searchCuisine: cuisineString }).then(
        (data) => {
          setRecipes(data);
          console.log(recipes);
        }
      );
    }
  };

  return (
    <div className="Search">
      <form className="searchForm">
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          placeholder="Search for recipes"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={displayCuisines}
          type="button"
          className="cuisineButton"
        >
          Cuisines
        </button>
        {!cuisineClicked ? (
          <></>
        ) : (
          <div className="cuisineBox">
            <div className="inputLabelContainer">
              <label htmlFor="african">African</label>
              <input
                type="checkbox"
                name="african"
                id="african"
                checked={cuisineArray[0]}
                onChange={() => handleOnChange(0)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="american">American</label>
              <input
                type="checkbox"
                name="american"
                id="american"
                checked={cuisineArray[1]}
                onChange={() => handleOnChange(1)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="british">British</label>
              <input
                type="checkbox"
                name="british"
                id="british"
                checked={cuisineArray[2]}
                onChange={() => handleOnChange(2)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="cajun">Cajun</label>
              <input
                type="checkbox"
                name="cajun"
                id="cajun"
                checked={cuisineArray[3]}
                onChange={() => handleOnChange(3)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="caribbean">Caribbean</label>
              <input
                type="checkbox"
                name="caribbean"
                id="caribbean"
                checked={cuisineArray[4]}
                onChange={() => handleOnChange(4)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="chinese">Chinese</label>
              <input
                type="checkbox"
                name="chinese"
                id="chinese"
                checked={cuisineArray[5]}
                onChange={() => handleOnChange(5)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="easternEuropean">Eastern European</label>
              <input
                type="checkbox"
                name="easternEuropean"
                id="easternEuropean"
                checked={cuisineArray[6]}
                onChange={() => handleOnChange(6)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="european">European</label>
              <input
                type="checkbox"
                name="european"
                id="european"
                checked={cuisineArray[7]}
                onChange={() => handleOnChange(7)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="french">French</label>
              <input
                type="checkbox"
                name="french"
                id="french"
                checked={cuisineArray[8]}
                onChange={() => handleOnChange(8)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="german">German</label>
              <input
                type="checkbox"
                name="german"
                id="german"
                checked={cuisineArray[9]}
                onChange={() => handleOnChange(9)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="greek">Greek</label>
              <input
                type="checkbox"
                name="greek"
                id="greek"
                checked={cuisineArray[10]}
                onChange={() => handleOnChange(10)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="indian">Indian</label>
              <input
                type="checkbox"
                name="indian"
                id="indian"
                checked={cuisineArray[11]}
                onChange={() => handleOnChange(11)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="irish">Irish</label>
              <input
                type="checkbox"
                name="irish"
                id="irish"
                checked={cuisineArray[12]}
                onChange={() => handleOnChange(12)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="italian">Italian</label>
              <input
                type="checkbox"
                name="italian"
                id="italian"
                checked={cuisineArray[13]}
                onChange={() => handleOnChange(13)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="japanese">Japanese</label>
              <input
                type="checkbox"
                name="japanese"
                id="japanese"
                checked={cuisineArray[14]}
                onChange={() => handleOnChange(14)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="jewish">Jewish</label>
              <input
                type="checkbox"
                name="jewish"
                id="jewish"
                checked={cuisineArray[15]}
                onChange={() => handleOnChange(15)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="korean">Korean</label>
              <input
                type="checkbox"
                name="korean"
                id="korean"
                checked={cuisineArray[16]}
                onChange={() => handleOnChange(16)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="latinAmerican">Latin American</label>
              <input
                type="checkbox"
                name="latinAmerican"
                id="latinAmerican"
                checked={cuisineArray[17]}
                onChange={() => handleOnChange(17)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="mediterranean">Mediterranean</label>
              <input
                type="checkbox"
                name="mediterranean"
                id="mediterranean"
                checked={cuisineArray[18]}
                onChange={() => handleOnChange(18)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="mexican">Mexican</label>
              <input
                type="checkbox"
                name="mexican"
                id="mexican"
                checked={cuisineArray[19]}
                onChange={() => handleOnChange(19)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="middleEastern">Middle Eastern</label>
              <input
                type="checkbox"
                name="middleEastern"
                id="middleEastern"
                checked={cuisineArray[20]}
                onChange={() => handleOnChange(20)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="nordic">Nordic</label>
              <input
                type="checkbox"
                name="nordic"
                id="nordic"
                checked={cuisineArray[21]}
                onChange={() => handleOnChange(21)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="southern">Southern</label>
              <input
                type="checkbox"
                name="southern"
                id="southern"
                checked={cuisineArray[22]}
                onChange={() => handleOnChange(22)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="spanish">Spanish</label>
              <input
                type="checkbox"
                name="spanish"
                id="spanish"
                checked={cuisineArray[23]}
                onChange={() => handleOnChange(23)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="thai">Thai</label>
              <input
                type="checkbox"
                name="thai"
                id="thai"
                checked={cuisineArray[24]}
                onChange={() => handleOnChange(24)}
              />
            </div>
            <div className="inputLabelContainer">
              <label htmlFor="vietnamese">Vietnamese</label>
              <input
                type="checkbox"
                name="vietnamese"
                id="vietnamese"
                checked={cuisineArray[25]}
                onChange={() => handleOnChange(25)}
              />
            </div>
          </div>
        )}
        <button onClick={searchHandler} type="submit" className="searchButton">
          Search
        </button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Search;
