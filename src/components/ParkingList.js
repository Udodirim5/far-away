import { useState } from "react";
import Item from './Item'

const ParkingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteAllItem,
  isModalOpen,
  confirmDelete,
  cancelDelete,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by the date</option>
          <option value="description">Sort by the name</option>
          <option value="packed">Sort by the packed status</option>
        </select>
        {sortedItem.length > 0 ? (
          <button onClick={onDeleteAllItem}>Clear All</button>
        ) : (
          ""
        )}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <p>Are you sure you want to delete all items?</p>
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={cancelDelete}>No</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkingList;
