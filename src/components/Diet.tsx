import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./Diet.css";

const Diet = () => {
  const { profile, updateProfileHandler } = useContext(AuthContext);
  const [diets, setDiets] = useState(new Array(11).fill(false));
  const dietsNameArray = [
    "gluten free",
    "ketogenic",
    "vegetarian",
    "lacto vegetarian",
    "ovo vegetarian",
    "vegan",
    "pescetarian",
    "paleo",
    "primal",
    "lowFodmap",
    "whole30",
  ];
  let dietsArray: string[] = [""];

  const handleOnChange = (position: number) => {
    const updatedCheckedState = diets.map((item, index) =>
      index === position ? !item : item
    );
    setDiets(updatedCheckedState);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    diets.forEach((diet, index) => {
      if (diet) {
        dietsArray.push(dietsNameArray[index]);
      }
    });
    const updatedProfile: any = { ...profile };
    updatedProfile.diet = dietsArray;
    delete updatedProfile._id;
    updateProfileHandler(updatedProfile);
  };

  return (
    <form className="Diet" onSubmit={submitHandler}>
      <label htmlFor="glutenFree">Gluten Free</label>
      <input
        type="checkbox"
        id="glutenFree"
        name="glutenFree"
        checked={diets[0]}
        onChange={() => handleOnChange(0)}
      />
      <p>
        Eliminating gluten means avoiding wheat, barley, rye, and other
        gluten-containing grains and foods made from them (or that may have been
        cross contaminated).
      </p>

      <label htmlFor="ketogenic">Ketogenic</label>
      <input
        type="checkbox"
        id="ketogenic"
        name="ketogenic"
        checked={diets[1]}
        onChange={() => handleOnChange(1)}
      />
      <p>
        The keto diet is based more on the ratio of fat, protein, and carbs in
        the diet rather than specific ingredients. Generally speaking, high fat,
        protein-rich foods are acceptable and high carbohydrate foods are not.
        The formula we use is 55-80% fat content, 15-35% protein content, and
        under 10% of carbohydrates.
      </p>

      <label htmlFor="vegetarian">Vegetarian</label>
      <input
        type="checkbox"
        id="vegetarian"
        name="vegetarian"
        checked={diets[2]}
        onChange={() => handleOnChange(2)}
      />
      <p>
        No ingredients may contain meat or meat by-products, such as bones or
        gelatin.
      </p>

      <label htmlFor="lactoVegetarian">Lacto-Vegetarian</label>
      <input
        type="checkbox"
        id="lactoVegetarian"
        name="lactoVegetarian"
        checked={diets[3]}
        onChange={() => handleOnChange(3)}
      />
      <p>
        All ingredients must be vegetarian and none of the ingredients can be or
        contain egg.
      </p>

      <label htmlFor="ovoVegetarian">Ovo-Vegetarian</label>
      <input
        type="checkbox"
        id="ovoVegetarian"
        name="ovoVegetarian"
        checked={diets[4]}
        onChange={() => handleOnChange(4)}
      />
      <p>
        All ingredients must be vegetarian and none of the ingredients can be or
        contain dairy.
      </p>

      <label htmlFor="vegan">Vegan</label>
      <input
        type="checkbox"
        id="vegan"
        name="vegan"
        checked={diets[5]}
        onChange={() => handleOnChange(5)}
      />
      <p>
        No ingredients may contain meat or meat by-products, such as bones or
        gelatin, nor may they contain eggs, dairy, or honey.
      </p>

      <label htmlFor="pescetarian">Pescetarian</label>
      <input
        type="checkbox"
        id="pescetarian"
        name="pescetarian"
        checked={diets[6]}
        onChange={() => handleOnChange(6)}
      />
      <p>
        Everything is allowed except meat and meat by-products - some
        pescetarians eat eggs and dairy, some do not.{" "}
      </p>

      <label htmlFor="paleo">Paleo</label>
      <input
        type="checkbox"
        id="paleo"
        name="paleo"
        checked={diets[7]}
        onChange={() => handleOnChange(7)}
      />
      <p>
        Allowed ingredients include meat (especially grass fed), fish, eggs,
        vegetables, some oils (e.g. coconut and olive oil), and in smaller
        quantities, fruit, nuts, and sweet potatoes. We also allow honey and
        maple syrup (popular in Paleo desserts, but strict Paleo followers may
        disagree). Ingredients not allowed include legumes (e.g. beans and
        lentils), grains, dairy, refined sugar, and processed foods.
      </p>

      <label htmlFor="primal">Primal</label>
      <input
        type="checkbox"
        id="primal"
        name="primal"
        checked={diets[8]}
        onChange={() => handleOnChange(8)}
      />
      <p>
        Very similar to Paleo, except dairy is allowed - think raw and full fat
        milk, butter, ghee, etc.
      </p>

      <label htmlFor="lowFODMAP">Low FODMAP</label>
      <input
        type="checkbox"
        id="lowFODMAP"
        name="lowFODMAP"
        checked={diets[9]}
        onChange={() => handleOnChange(9)}
      />
      <p>
        FODMAP stands for "fermentable oligo-, di-, mono-saccharides and
        polyols". Our ontology knows which foods are considered high in these
        types of carbohydrates (e.g. legumes, wheat, and dairy products)
      </p>

      <label htmlFor="whole30">Whole30</label>
      <input
        type="checkbox"
        id="whole30"
        name="whole30"
        checked={diets[10]}
        onChange={() => handleOnChange(10)}
      />
      <p>
        Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh
        fruit, coconut oil, olive oil, small amounts of dried fruit and
        nuts/seeds. Ingredients not allowed include added sweeteners (natural
        and artificial, except small amounts of fruit juice), dairy (except
        clarified butter or ghee), alcohol, grains, legumes (except green beans,
        sugar snap peas, and snow peas), and food additives, such as
        carrageenan, MSG, and sulfites.
      </p>

      <button>Save</button>
    </form>
  );
};

export default Diet;
