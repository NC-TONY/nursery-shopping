import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'; // Add styles for background, etc.

const LandingPage = () => (
  <div className="landing-page">
    <div className="overlay">
      <h1>Paradise Nursery</h1>
      <p>Bringing nature closer to your home. Explore our collection of exquisite houseplants and transform your living space.</p>
      <Link to="/products" className="get-started-btn">Get Started</Link>
    </div>
  </div>
);

export default LandingPage;
