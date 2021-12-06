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
      <label htmlFor="searchFor"></label>
      <input type="search" name="searchFor" id="searchFor" />
      <button>Search</button>
      <button onClick={displayCuisines}>Cuisines</button>
      {!cuisineClicked ? (
        <></>
      ) : (
        <div>
          <label htmlFor="african">African</label>
          <input type="checkbox" name="african" id="african" />
          <label htmlFor="american">American</label>
          <input type="checkbox" name="Aaerican" id="american" />
          <label htmlFor="british">British</label>
          <input type="checkbox" name="british" id="british" />
          <label htmlFor="cajun">Cajun</label>
          <input type="checkbox" name="cajun" id="cajun" />
          <label htmlFor="caribbean">Caribbean</label>
          <input type="checkbox" name="caribbean" id="caribbean" />
          <label htmlFor="chinese">Chinese</label>
          <input type="checkbox" name="chinese" id="chinese" />
          <label htmlFor="easternEuropean">Eastern European</label>
          <input type="checkbox" name="easternEuropean" id="easternEuropean" />
          <label htmlFor="european">European</label>
          <input type="checkbox" name="european" id="european" />
          <label htmlFor="french">French</label>
          <input type="checkbox" name="french" id="french" />
          <label htmlFor="german">German</label>
          <input type="checkbox" name="german" id="german" />
          <label htmlFor="greek">Greek</label>
          <input type="checkbox" name="greek" id="greek" />
          <label htmlFor="indian">Indian</label>
          <input type="checkbox" name="indian" id="indian" />
          <label htmlFor="irish">Irish</label>
          <input type="checkbox" name="irish" id="irish" />
          <label htmlFor="italian">Italian</label>
          <input type="checkbox" name="italian" id="italian" />
          <label htmlFor="japanese">Japanese</label>
          <input type="checkbox" name="japanese" id="japanese" />
          <label htmlFor="jewish">Jewish</label>
          <input type="checkbox" name="jewish" id="jewish" />
          <label htmlFor="korean">Korean</label>
          <input type="checkbox" name="korean" id="korean" />
          <label htmlFor="latinAmerican">Latin American</label>
          <input type="checkbox" name="latinAmerican" id="latinAmerican" />
          <label htmlFor="mediterranean">Mediterranean</label>
          <input type="checkbox" name="mediterranean" id="mediterranean" />
          <label htmlFor="mexican">Mexican</label>
          <input type="checkbox" name="mexican" id="mexican" />
          <label htmlFor="middleEastern">Middle Eastern</label>
          <input type="checkbox" name="middleEastern" id="middleEastern" />
          <label htmlFor="nordic">Nordic</label>
          <input type="checkbox" name="nordic" id="nordic" />
          <label htmlFor="southern">Southern</label>
          <input type="checkbox" name="southern" id="southern" />
          <label htmlFor="spanish">Spanish</label>
          <input type="checkbox" name="spanish" id="spanish" />
          <label htmlFor="thai">Thai</label>
          <input type="checkbox" name="thai" id="thai" />
          <label htmlFor="vietnamese">Vietnamese</label>
          <input type="checkbox" name="vietnamese" id="vietnamese" />
        </div>
      )}
    </div>
  );
};

export default Search;
