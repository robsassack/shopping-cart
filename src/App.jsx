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
    const exists = cart.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      setCart(updatedCart);
    } else {
      setCart((prevState) => {
        return [...prevState, { id: item.id, quantity: 1 }];
      });
    }
  }

  function removeFromCart(item) {
    const exists = cart.find((cartItem) => cartItem.id === item.id);
    if (exists.quantity === 1) {
      removeItem(item);
    } else {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
      setCart(updatedCart);
    }
  }

  function removeItem(item) {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  }

  function numberInCart() {
    let number = 0;
    cart.forEach((item) => {
      number += item.quantity;
    });
    return number;
  }

  return (
    <div className='App'>
      <nav className='App--navbar'>
        <ul>
          <div className='App--logo'>
            <li>
              <NavLink to='/'>
                <i className='fa-solid fa-globe'></i> Computer World
              </NavLink>
            </li>
          </div>
          <div className='App--links'>
            <li>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li className='App--cart-link'>
              <NavLink to='/cart'>
                <i className='fa-solid fa-cart-shopping'></i> ({numberInCart()})
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route
          path='/cart'
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              removeItem={removeItem}
            />
          }
        />
        <Route
          path='/shop/:type/:id'
          element={<Item addToCart={addToCart} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <div className='App--footer'>
        <a href="https://github.com/robsassack/shopping-cart">
          <i className='fa-brands fa-github App--footer-repo'></i>
        </a>
        <p>Computer World &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
