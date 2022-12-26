import { NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Item from "./pages/Item";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevState) => {
      return [...prevState, item];
    });
  }

  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Computer World</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>Shop</NavLink>
          </li>
          <li>
            <NavLink to='/cart'>Cart</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart cart={cart}/>} />
        <Route
          path='/shop/:type/:id'
          element={<Item addToCart={addToCart} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
