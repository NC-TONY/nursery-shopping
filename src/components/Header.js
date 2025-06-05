import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Header.css';

const TotalPrice = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="total-price">
      Total: ₹{total.toFixed(2)}
    </div>
  );
};

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">NurseryShop</Link>
      </div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          Cart
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </nav>
      <TotalPrice />
    </header>
  );
};

export default Header;
