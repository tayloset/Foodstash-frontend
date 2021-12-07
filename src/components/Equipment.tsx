import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Profile from "../models/Profile";
import { updateProfileV2 } from "../services/FoodStashService";
import "./Equipment.css";

const Equipment = () => {
  const { profile, updateProfileHandler } = useContext(AuthContext);
  const [equipment, setEquipment] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    updateProfileHandler("equipment", equipment);
    console.log(equipment);
  };

  const updateEquipmentHandler = (index: number) => {
    const updatedProfile: any = { ...profile };
    updatedProfile.equipment.splice(index, 1);
    delete updatedProfile._id;
    updateProfileV2(updatedProfile).then((response) => console.log(response));
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
        {profile?.equipment.map((item, index) => (
          <li key={`${item}${index}`}>
            {item}
            <button onClick={() => updateEquipmentHandler(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipment;
