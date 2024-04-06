import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaUser, FaUserFriends, FaComment, FaBars } from 'react-icons/fa';
import logo from "./images/logo.png";

const Navbar = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      {(innerWidth < 529) && (
        <div className="nav-links-below">
          <Link id="linkss" to="/" className="nav-link"><FaHome /> Home</Link>
          <Link id="linkss" to="/profile" className="nav-link"><FaUser /> Profile</Link>
          <Link id="linkss" to="/liveuser" className="nav-link" ><FaUserFriends /> LiveUser</Link>
          <Link id="linkss" to="/chat" className="nav-link"><FaComment /> Chat</Link>
          <Link id="linkss" to="" className='nav-link'><FaBars /> More</Link>
        </div>
      )}
      {(innerWidth >= 529) && (
        <div className="nav-links">
          <Link to="/" className="nav-link"><FaHome /> Home</Link>
          <Link to="/profile" className="nav-link"><FaUser /> Profile</Link>
          <Link to="/liveuser" className="nav-link" ><FaUserFriends /> LiveUser</Link>
          <Link to="/chat" className="nav-link"><FaComment /> Chat</Link>
        </div>
      )}
      <div className="button">
        <button>Button</button>
      </div>
    </div>
  );
};

export default Navbar;
