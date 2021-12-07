import { FormEvent, useContext, useState } from "react";
import "./Pantry.css";
import AuthContext from "../context/AuthContext";

const Pantry = () => {
  const { profile, updateProfileHandler } = useContext(AuthContext);
  const [pantry, setPantry] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    updateProfileHandler("pantry", pantry);
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
      <ul>
        {profile?.pantry.map((item, index) => (
          <li key={`${item}${index}`}>
            {item}
            {/* <button onClick={() => (item._id!)}>X</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pantry;
