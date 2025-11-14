import React, { useState } from 'react';
import './Trust.css'; // Import the custom CSS

// Import images from the assets folder
import gamerImg from '../../assets/trust_img1.png';
import editorImg from '../../assets/trust_img2.png';
import devImg from '../../assets/trust_img3.png';
import bgImg from '../../assets/trusted_by_users_bg.png';

const Trust = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Create an array of trust cards with their data
  const trustCards = [
    {
      id: 1,
      image: gamerImg,
      alt: "Gamer in a neon-lit room",
      hasPlayButton: false
    },
    {
      id: 2,
      image: editorImg,
      alt: "Video editor working on a dual-monitor setup",
      hasPlayButton: true
    },
    {
      id: 3,
      image: devImg,
      alt: "3D game development software interface",
      hasPlayButton: false
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trustCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trustCards.length) % trustCards.length);
  };

  return (
    <section className="trust-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="trust-container">
        <header className="trust-header">
          <h2>Trusted By Users</h2>
          <div className="decorator-line"></div>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam
          </p>
        </header>

        <div className="trust-slider">
          {/* Slider container */}
          <div className="slider-container">
            {/* Navigation arrows */}
            <button className="slider-arrow slider-arrow-prev" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button className="slider-arrow slider-arrow-next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Slides */}
            <div className="slides-wrapper">
              <div 
                className="slides-track" 
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                  width: `${trustCards.length * 33.333}%`
                }}
              >
                {trustCards.map((card, index) => (
                  <div 
                    key={card.id}
                    className={`trust-card ${index === currentSlide ? 'active' : ''}`}
                    style={{ width: `${100 / trustCards.length}%` }}
                  >
                    <img src={card.image} alt={card.alt} />
                    {card.hasPlayButton && (
                      <div className="play-overlay">
                        <div className="play-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="#333" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="trust-pagination">
          {trustCards.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;