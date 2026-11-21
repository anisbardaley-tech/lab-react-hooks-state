import { useState } from "react";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((currentCart) => [...currentCart, item]);
  }

  return (
    <div className={isDarkMode ? "app dark" : "app light"}>
      <header>
        <h1>Shopping App</h1>
        <DarkModeToggle
          isDarkMode={isDarkMode}
          onToggle={() => setIsDarkMode((prev) => !prev)}
        />
      </header>

      <div className="category-filter">
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <main>
        <ProductList
          selectedCategory={selectedCategory}
          onAddToCart={addToCart}
        />
        <Cart cart={cart} />
      </main>
    </div>
  );
}

export default App;
