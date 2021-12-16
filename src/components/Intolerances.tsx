import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./Intolerances.css";
//comment
const Intolerances = () => {
  const { profile, updateProfileHandler } = useContext(AuthContext);
  const [intolerances, setIntolerances] = useState(new Array(12).fill(false));
  const intolerancesNameArray = [
    "dairy",
    "egg",
    "gluten",
    "grain",
    "peanut",
    "seafood",
    "sesame",
    "shellfish",
    "soy",
    "sulfite",
    "treeNut",
    "wheat",
  ];

  const handleOnChange = (position: number) => {
    const updatedCheckedState = intolerances.map((item, index) =>
      index === position ? !item : item
    );
    setIntolerances(updatedCheckedState);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    let intolerancesString = "";
    intolerances.forEach((intolerance, index) => {
      if (intolerance) {
        intolerancesString
          ? (intolerancesString += `,${intolerancesNameArray[index]}`)
          : (intolerancesString += `${intolerancesNameArray[index]}`);
      }
    });
    const updatedProfile: any = { ...profile };
    updatedProfile.intolerances = intolerancesString;
    delete updatedProfile._id;
    updateProfileHandler(updatedProfile);
    alert("Your profile has been updated!");
  };

  return (
    <form className="Intolerances" onSubmit={submitHandler}>
      {profile && (
        <>
          <div className="intolerancesContainer">
            <div className="intolerancesCol1">
              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="dairy"
                  id="dairy"
                  checked={intolerances[0]}
                  onChange={() => handleOnChange(0)}
                />
                <label htmlFor="dairy">Dairy</label>
              </div>

              <br />

              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="egg"
                  id="egg"
                  checked={intolerances[1]}
                  onChange={() => handleOnChange(1)}
                />
                <label htmlFor="egg">Egg</label>
              </div>

              <br />

              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="gluten"
                  id="gluten"
                  checked={intolerances[2]}
                  onChange={() => handleOnChange(2)}
                />
                <label htmlFor="gluten">Gluten</label>
              </div>

              <br />

              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="grain"
                  id="grain"
                  checked={intolerances[3]}
                  onChange={() => handleOnChange(3)}
                />
                <label htmlFor="grain">Grain</label>
              </div>

              <br />

              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="peanut"
                  id="peanut"
                  checked={intolerances[4]}
                  onChange={() => handleOnChange(4)}
                />
                <label htmlFor="peanut">Peanut</label>
              </div>

              <br />

              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="seafood"
                  id="seafood"
                  checked={intolerances[5]}
                  onChange={() => handleOnChange(5)}
                />
                <label htmlFor="seafood">Seafood</label>
              </div>
            </div>

            <div className="intolerancesCol2">
              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="sesame"
                  id="sesame"
                  checked={intolerances[6]}
                  onChange={() => handleOnChange(6)}
                />
                <label htmlFor="sesame">Sesame</label>
              </div>

              <br />
              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="shellfish"
                  id="shellfish"
                  checked={intolerances[7]}
                  onChange={() => handleOnChange(7)}
                />
                <label htmlFor="shellfish">Shellfish</label>
              </div>

              <br />
              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="soy"
                  id="soy"
                  checked={intolerances[8]}
                  onChange={() => handleOnChange(8)}
                />
                <label htmlFor="soy">Soy</label>
              </div>

              <br />
              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="sulfite"
                  id="sulfite"
                  checked={intolerances[9]}
                  onChange={() => handleOnChange(9)}
                />
                <label htmlFor="sulfite">Sulfite</label>
              </div>

              <br />
              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="treeNut"
                  id="treeNut"
                  checked={intolerances[10]}
                  onChange={() => handleOnChange(10)}
                />
                <label htmlFor="treeNut">Tree Nut</label>
              </div>

              <br />
              <div className="intoleranceItem">
                <input
                  type="checkbox"
                  name="wheat"
                  id="wheat"
                  checked={intolerances[11]}
                  onChange={() => handleOnChange(11)}
                />
                <label htmlFor="wheat">Wheat</label>
              </div>
            </div>
          </div>
          <button>Save</button>
        </>
      )}
    </form>
  );
};

export default Intolerances;
