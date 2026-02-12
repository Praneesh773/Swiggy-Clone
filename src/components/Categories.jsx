import { useRef } from 'react';
import './Categories.css';

export default function Categories({ categories }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="categories-section">
      <h2 className="section-title">What's on your mind?</h2>
      <div className="categories-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>❮</button>
        <div className="categories-container" ref={scrollContainerRef}>
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>❯</button>
      </div>
    </section>
  );
}
