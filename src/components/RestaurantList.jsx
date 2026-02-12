import RestaurantCard from './RestaurantCard';
import './RestaurantList.css';

export default function RestaurantList({ restaurants, searchTerm, onAddToCart }) {
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="restaurant-list-section">
      <h2 className="section-title">Top Restaurants</h2>
      {filteredRestaurants.length > 0 ? (
        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.id} 
              restaurant={restaurant}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No restaurants found matching "{searchTerm}"</p>
        </div>
      )}
    </section>
  );
}
