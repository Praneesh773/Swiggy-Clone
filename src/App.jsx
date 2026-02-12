import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import RestaurantList from './components/RestaurantList';
import Offers from './components/Offers';
import Footer from './components/Footer';
import { restaurants, categories, offers } from './data/restaurants';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (restaurantName) => {
    setCartCount(cartCount + 1);
    alert(`${restaurantName} added to cart!`);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <Hero onSearch={handleSearch} />
      <Categories categories={categories} />
      <Offers offers={offers} />
      <RestaurantList 
        restaurants={restaurants} 
        searchTerm={searchTerm}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </div>
  );
}

export default App;
