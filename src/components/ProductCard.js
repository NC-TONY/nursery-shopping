import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {cartItem ? (
        <div className="quantity-control">
          <button
            onClick={() => {
              if (cartItem.quantity === 1) {
                removeFromCart(product.id);
              } else {
                decreaseQty(product.id);
              }
            }}
          >
            -
          </button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => increaseQty(product.id)}>+</button>
        </div>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
