import { FormEvent, useContext, useState } from "react";
import UpdateProfileContext from "../context/UpdateProfileContext";
import "./Equipment.css";

const Equipment = () => {
  const { updateProfileHandler } = useContext(UpdateProfileContext);
  const [equipment, setEquipment] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    updateProfileHandler("equipment", equipment);
  };

  return (
    <div className="Equipment" onSubmit={submitHandler}>
      <form>
        <label htmlFor="equipment">Add Equipment to your Kitchen!</label>
        <input
          type="text"
          name="equipment"
          id="equipment"
          placeholder="Add Equipment"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Equipment;
