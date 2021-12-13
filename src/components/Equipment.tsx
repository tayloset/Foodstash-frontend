import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./Equipment.css";

const Equipment = () => {
  const { profile, updateProfileHandler } = useContext(AuthContext);
  const [equipmentItem, setEquipmentItem] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const updatedProfile: any = { ...profile };
    updatedProfile.equipment.push(equipmentItem);
    delete updatedProfile._id;
    updateProfileHandler(updatedProfile);
  };

  const deleteEquipmentHandler = (index: number) => {
    const updatedProfile: any = { ...profile };
    updatedProfile.equipment.splice(index, 1);
    delete updatedProfile._id;
    updateProfileHandler(updatedProfile);
  };

  return (
    <div className="Equipment">
      <form className="equipmentForm" onSubmit={submitHandler}>
        <input
          type="text"
          name="equipmentItem"
          id="equipmentItem"
          placeholder="Add Equipment to your Kitchen!"
          value={equipmentItem}
          onChange={(e) => setEquipmentItem(e.target.value)}
        />
        <button className="equipmentAddButton">Add</button>
      </form>
      <div className="EquipmentList">
        <ul>
          {profile?.equipment.map((item, index) => (
            <li key={`${item}${index}`}>
              <button
                onClick={() => deleteEquipmentHandler(index)}
                className="equipmentButton"
              >
                {item} X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Equipment;
