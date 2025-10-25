import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemsData from "../data/items";

function App() {
  const [items, setItems] = useState(itemsData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleAddItem} />
    </div>
  );
}

export default App;
