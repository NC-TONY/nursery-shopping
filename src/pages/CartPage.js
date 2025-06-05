import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem, getTotalItems, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <p>Total items: {getTotalItems()}</p>
      <p>Total price: ${getTotalPrice()}</p>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      ))}
      <button onClick={() => window.location.href='/products'}>Continue Shopping</button>
      <button onClick={() => alert('Checkout Complete!')}>Checkout</button>
    </div>
  );
};

export default CartPage;
