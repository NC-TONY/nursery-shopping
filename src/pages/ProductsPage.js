import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { CartContext } from '../context/CartContext';
import '../styles/ProductsPage.css';

const ProductsPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <header className="products-header">
        <h1>Paradise Nursery - Houseplants</h1>
        <p>Total items in cart: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
      </header>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
