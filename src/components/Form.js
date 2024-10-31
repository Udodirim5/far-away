import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItems = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add item"
        value={description}
        onChange={(e) => {
          const value = e.target.value;
          if (value.trim() || value === "") {
            setDescription(value);
          }
        }}
      />
      <button>Add item</button>
    </form>
  );
};


export default Form;
