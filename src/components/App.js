import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import ParkingList from "./ParkingList";
import Stats from "./Stats";

const App = () => {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDeleteAllItem = () => {
    setIsModalOpen(true); // Show modal
  };

  const confirmDelete = () => {
    setItems([]);
    setIsModalOpen(false); // Hide modal
  };

  const cancelDelete = () => {
    setIsModalOpen(false); // Hide modal without deleting
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAllItem={handleDeleteAllItem}
        isModalOpen={isModalOpen}
        confirmDelete={confirmDelete}
        cancelDelete={cancelDelete}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
