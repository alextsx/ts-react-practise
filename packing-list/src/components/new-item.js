import { useContext } from "react";
import { ItemsContext } from "../context";

const NewItem = () => {
  const {
    newItemName,
    setNewItemName,
    add
  } = useContext(ItemsContext)
  return (
    <form
      id="new-item"
      onSubmit={(e) => {
        e.preventDefault();
        add(newItemName);
        setNewItemName('');
      }}
    >
      <label htmlFor="new-item-name" className="font-semibold">
        New Item Name
      </label>
      <div className="flex my-2">
        <input
          id="new-item-name"
          className="w-full"
          type="search"
          placeholder="New Item"
          value={newItemName}
          autoFocus
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          id="new-item-submit"
          className="border-l-0 whitespace-nowrap bg-primary-300"
          aria-label={`Add ${newItemName}`}
          type="submit"
        >
          ➕ Add New Item
        </button>
      </div>
    </form>
  );
};

export default NewItem;
