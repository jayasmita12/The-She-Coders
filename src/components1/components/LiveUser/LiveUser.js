import React, { useState, useEffect } from 'react';
import "./LiveUser.css";
import MapComponent from "../MapComponent/MapComponent"

const LiveUser = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [otherUsers, setOtherUsers] = useState([]);
  const [mapCoordinates, setMapCoordinates] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('API_URL')
      .then(response => response.json())
      .then(data => {
        // Update state variables
        setCurrentUser(data.currentUser);
        setOtherUsers(data.otherUsers);
        setMapCoordinates(data.mapCoordinates);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <h2>Select User</h2>
      <div className="map-container">
        {mapCoordinates && (
          <div>
            Map Component {/* Replace this with your map component */}
            <MapComponent coordinates={mapCoordinates} />
          </div>
        )}
      </div>

      <div className="user-details">
        <h3>Current User: {currentUser}</h3>
        <h3>Other Users:</h3>
        <ul>
          {otherUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveUser;
