import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ cartCount }) {
  const [location, setLocation] = useState('New York');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">
            <span className="logo-emoji">🍔</span>
            <span className="logo-text">Swiggy</span>
          </div>
          <div className="location">
            <span className="location-icon">📍</span>
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="location-select">
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Houston</option>
              <option>Phoenix</option>
            </select>
          </div>
        </div>

        <div className="navbar-center">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search for restaurants" 
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        <div className="navbar-right">
          <button className="login-btn">Login</button>
          <div className="cart">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}
