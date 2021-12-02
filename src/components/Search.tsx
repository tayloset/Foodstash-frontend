import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [cuisineClicked, setCuisineClicked] = useState(false);

  const displayCuisines = (): void => {
    if (cuisineClicked) {
      setCuisineClicked(false);
    } else {
      setCuisineClicked(true);
    }
  };

  return (
    <div className="Search">
      <button onClick={displayCuisines}>Cuisines</button>
      {!cuisineClicked ? (
        <></>
      ) : (
        <div>
          <label htmlFor="german">German</label>
          <input type="checkbox" name="german" id="german" />
          <label htmlFor="thai">Thai</label>
          <input type="checkbox" name="thai" id="thai" />
          <label htmlFor="italian">Italian</label>
          <input type="checkbox" name="italian" id="italian" />
        </div>
      )}
    </div>
  );
};

export default Search;
