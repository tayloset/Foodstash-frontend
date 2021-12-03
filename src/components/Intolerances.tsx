import { FormEvent, useState } from "react";
import "./Intolerances.css";

const Intolerances = () => {
  const [dairy, setDairy] = useState(false);
  const [egg, setEgg] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [grain, setGrain] = useState(false);
  const [peanut, setPeanut] = useState(false);
  const [seafood, setSeafood] = useState(false);
  const [sesame, setSesame] = useState(false);
  const [shellfish, setShellfish] = useState(false);
  const [soy, setSoy] = useState(false);
  const [sulfite, setSulfite] = useState(false);
  const [treeNut, setTreeNut] = useState(false);
  const [wheat, setWheat] = useState(false);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="Intolerances" onSubmit={submitHandler}>
      <input type="checkbox" name="dairy" id="dairy" />
      <label htmlFor="dairy">Dairy</label>

      <input type="checkbox" name="egg" id="egg" />
      <label htmlFor="egg">Egg</label>

      <input type="checkbox" name="gluten" id="gluten" />
      <label htmlFor="gluten">Gluten</label>

      <input type="checkbox" name="grain" id="grain" />
      <label htmlFor="grain">Grain</label>

      <input type="checkbox" name="peanut" id="peanut" />
      <label htmlFor="peanut">Peanut</label>

      <input type="checkbox" name="seafood" id="seafood" />
      <label htmlFor="seafood">Seafood</label>

      <input type="checkbox" name="sesame" id="sesame" />
      <label htmlFor="sesame">Sesame</label>

      <input type="checkbox" name="shellfish" id="shellfish" />
      <label htmlFor="shellfish">Shellfish</label>

      <input type="checkbox" name="soy" id="soy" />
      <label htmlFor="soy">Soy</label>

      <input type="checkbox" name="sulfite" id="sulfite" />
      <label htmlFor="sulfite">Sulfite</label>

      <input type="checkbox" name="treeNut" id="treeNut" />
      <label htmlFor="treeNut">Tree Nut</label>

      <input type="checkbox" name="wheat" id="wheat" />
      <label htmlFor="wheat">Wheat</label>

      <button>Save</button>
    </form>
  );
};

export default Intolerances;
