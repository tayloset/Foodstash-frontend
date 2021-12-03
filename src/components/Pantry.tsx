import { FormEvent, useContext, useState } from "react";
import "./Pantry.css";
import "../context/UpdateProfileContext";
import UpdateProfileContext from "../context/UpdateProfileContext";

const Pantry = () => {
  const { updateProfileHandler } = useContext(UpdateProfileContext);
  const [pantry, setPantry] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    updateProfileHandler("pantry");
  };

  return (
    <div className="Pantry" onSubmit={submitHandler}>
      <form>
        <label htmlFor="pantry">Add Items to your Pantry!</label>
        <input
          type="text"
          name="pantry"
          id="pantry"
          placeholder="Add Item"
          value={pantry}
          onChange={(e) => setPantry(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Pantry;
