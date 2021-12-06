import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./Equipment.css";

const Equipment = () => {
  const { profile, updateProfileHandler } = useContext(AuthContext);
  const [equipment, setEquipment] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    updateProfileHandler("equipment", equipment);
    console.log(equipment);
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
      <ul>
        {profile?.equipment.map((item) => (
          <li>
            {item}
            {/* <button onClick={() => (item._id!)}>X</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipment;
