import './Hero.css';

export default function Hero({ onSearch }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Order food online from your favourite restaurants</h1>
        <p className="hero-subtitle">Discover the best restaurants in your area and enjoy delicious food delivered to your door</p>
        <div className="hero-search">
          <input 
            type="text" 
            placeholder="Enter restaurant name or cuisine" 
            className="hero-search-input"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="hero-search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}
