import './Offers.css';

export default function Offers({ offers }) {
  return (
    <section className="offers-section">
      <h2 className="section-title">Best Offers For You</h2>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div className="offer-discount">{offer.discount}</div>
            <div className="offer-description">{offer.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
