import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const GoogleOAuthButton = ({ path, icon, text }) => {
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    const fetchClientId = async () => {
      try {
        const response = await axios.get('http://localhost:5000/GoogleSignIn/googleClientId');
        const fetchedClientId = response.data.clientId;
        setClientId(fetchedClientId);
      } catch (error) {
        console.error('Error fetching Google Client ID:', error.message);
        // Handle the error based on error type
      }
    };

    fetchClientId();
  }, []);

  const oauthSignIn = () => {
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    let authWindow;

    // Proceed only if clientId is available
    if (clientId) {
      const params = {
        client_id: clientId,
        redirect_uri: 'http://localhost:5001',
        response_type: 'token',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        include_granted_scopes: 'true',
        state: 'pass-through value',
      };

      const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

      
      // Open Google OAuth in a new window and capture its reference
      authWindow = window.open(`${oauth2Endpoint}?${queryString}`, '_blank',  'width=500,height=600');

      // // Check if the window exists and poll for its closure
      // const checkAuthWindowClosed = setInterval(() => {
      //   if (authWindow.closed) {
      //     clearInterval(checkAuthWindowClosed); // Stop checking once closed
      //     // Perform actions after successful authentication and window closure
      //     console.log('Authentication window closed');
      //     // Continue logic on the main window after successful login
      //     // For example, redirect, update state, or perform other actions
      //   }
      // }, 1000);

      // // Detect successful authentication and close the window (Example: After 5 seconds)
      // setTimeout(() => {
      //   authWindow.close(); // Close the authentication window after successful login
      // }, 5000); // Change this delay as needed to match your authentication flow
    }
  };

  return (
    <button className="button__auth" type="button" onClick={oauthSignIn}>
      <div className="button__auth_icon">{icon}</div>
      <span className="button__auth_text">{text}</span>
    </button>
  );

};

  // Prop type for GoogleOAuthButton
  GoogleOAuthButton.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
  };

export default GoogleOAuthButton;
