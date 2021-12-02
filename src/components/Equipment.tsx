import "./Equipment.css";

const Equipment = () => {
  return (
    <div className="Equipment">
      <form>
        <label htmlFor="equipment">Add Equipment to your Kitchen!</label>
        <input
          type="text"
          name="equipment"
          id="equipment"
          placeholder="Search Equipment"
        />
        <button>Search</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Equipment;
