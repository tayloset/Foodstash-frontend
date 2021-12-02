import "./Diet.css";

const Diet = () => {
  return (
    <div className="Diet">
      <label htmlFor="glutenFree">Gluten Free</label>
      <input
        type="checkbox"
        id="glutenFree"
        name="glutenFree"
        value="glutenFree"
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
        value="ketogenic"
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
        value="vegetarian"
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
        value="lactoVegetarian"
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
        value="ovoVegetarian"
      />
      <p>
        All ingredients must be vegetarian and none of the ingredients can be or
        contain dairy.
      </p>

      <label htmlFor="vegan">Vegan</label>
      <input type="checkbox" id="vegan" name="vegan" value="vegan" />
      <p>
        No ingredients may contain meat or meat by-products, such as bones or
        gelatin, nor may they contain eggs, dairy, or honey.
      </p>

      <label htmlFor="pescetarian">Pescetarian</label>
      <input
        type="checkbox"
        id="pescetarian"
        name="pescetarian"
        value="pescetarian"
      />
      <p>
        Everything is allowed except meat and meat by-products - some
        pescetarians eat eggs and dairy, some do not.{" "}
      </p>

      <label htmlFor="paleo">Paleo</label>
      <input type="checkbox" id="paleo" name="paleo" value="paleo" />
      <p>
        Allowed ingredients include meat (especially grass fed), fish, eggs,
        vegetables, some oils (e.g. coconut and olive oil), and in smaller
        quantities, fruit, nuts, and sweet potatoes. We also allow honey and
        maple syrup (popular in Paleo desserts, but strict Paleo followers may
        disagree). Ingredients not allowed include legumes (e.g. beans and
        lentils), grains, dairy, refined sugar, and processed foods.
      </p>

      <label htmlFor="primal">Primal</label>
      <input type="checkbox" id="primal" name="primal" value="primal" />
      <p>
        Very similar to Paleo, except dairy is allowed - think raw and full fat
        milk, butter, ghee, etc.
      </p>

      <label htmlFor="lowFODMAP">Low FODMAP</label>
      <input
        type="checkbox"
        id="lowFODMAP"
        name="lowFODMAP"
        value="lowFODMAP"
      />
      <p>
        FODMAP stands for "fermentable oligo-, di-, mono-saccharides and
        polyols". Our ontology knows which foods are considered high in these
        types of carbohydrates (e.g. legumes, wheat, and dairy products)
      </p>

      <label htmlFor="whole30">Whole30</label>
      <input type="checkbox" id="whole30" name="whole30" value="whole30" />
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
    </div>
  );
};

export default Diet;
