import './RestaurantCard.css';

export default function RestaurantCard({ restaurant, onAddToCart }) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} />
        <div className="restaurant-discount">{restaurant.discount}</div>
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <p className="restaurant-cuisine">{restaurant.cuisine}</p>
        <div className="restaurant-meta">
          <span className="restaurant-rating">
            ⭐ {restaurant.rating}
          </span>
          <span className="restaurant-time">{restaurant.deliveryTime}</span>
          <span className="restaurant-price">{restaurant.priceForTwo}</span>
        </div>
        <button className="add-to-cart-btn" onClick={() => onAddToCart(restaurant.name)}>
          + Add to Cart
        </button>
      </div>
    </div>
  );
}
