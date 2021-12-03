import { FormEvent } from "react";
import "./Pantry.css";

const Pantry = () => {
  const sunbmitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="Pantry" onSubmit={sunbmitHandler}>
      <form>
        <label htmlFor="pantry">Add Items to your Pantry!</label>
        <input type="text" name="pantry" id="pantry" placeholder="Add Item" />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Pantry;
