import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleOAuthButton = () => {
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

    // Proceed only if clientId is available
    if (clientId) {
      const params = {
        client_id: clientId,
        redirect_uri: 'https://localhost:5001',
        response_type: 'token',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        include_granted_scopes: 'true',
        state: 'pass-through value',
      };

      const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

      
      // Open Google OAuth in a new window
      window.open(`${oauth2Endpoint}?${queryString}`, '_blank',  'width=500,height=600');
    }
  };

  return (
    <button onClick={oauthSignIn}>
      Sign In with Google
    </button>
  );
};

export default GoogleOAuthButton;
