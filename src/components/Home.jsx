import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from './Navbar';
import banner1 from "./images/banner.jpg";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import "./Home.css";
import { FaSearchLocation, FaTimes } from 'react-icons/fa'; // Import FaTimes icon

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const card = [
    {name: "Tic Tac Toe", image: "./images/tik-tak-toe.png"},
    {name: "Wordle", image: "../images/mine-craft.avif"},
    {name: "Mine Craft", image: "../images/ludo.png"},
    {name: "CounterStrike", image: "../images/rummy.jpeg"},
    {name: "Dota", image: "../images/rummy.jpeg"},
    {name: "Chess", image: "../images/rummy.jpeg"},
    {name: "Ludo", image: "../images/rummy.jpeg"},
    {name: "Rummy", image: "../images/rummy.jpeg"},
    {name: "Poker", image: "../images/rummy.jpeg"},
    {name: "Call of Duty", image: "../images/rummy.jpeg"}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const nextImage = (prevImage + 1) % 3;

        if (prevImage === 2) {
          setTimeout(() => setCurrentImage(0), 5000);
        }

        return nextImage;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = () => {
    setShowPopup(true);
  }

  const handleSearchLive = () => {
    navigate('/liveuser'); // Navigate to the /liveuser page using useNavigate
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <div>
      <Navbar />
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          <img src={banner1} alt="Banner 1" />
          <img src={banner2} alt="Banner 2" />
          <img src={banner3} alt="Banner 3" />
        </div>
      </div>

      <div className="games-container">
        <h2 style={{ margin: '1rem', textAlign: 'center' }}>Games</h2>
        <div className="games-section">
          <h3>Games1</h3>
          <div className="card-container">
            {card.map((cardItem, index) => (
              <Link to="/tic-tac-toe"><div key={index} className="card" onClick={handleCardClick}>
                {/* Image */}
                <img src={cardItem.image} alt={cardItem.name} className="card-image" />
                {/* Scrollable Text */}
                <div className="card-text-container">
                  <div className="scrollable-text">{cardItem.name}</div>
                </div>
              </div></Link>
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <h2><FaSearchLocation/> Search User</h2>
              <button onClick={handleSearchLive}>Search Live</button>
              <div className="close-btn" onClick={handleClosePopup}><FaTimes /></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;