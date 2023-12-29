import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleOAuthButton = () => {
//   const [clientId, setClientId] = useState('');

//   useEffect(() => {
//     // Fetch Google Client ID from the server
//     axios.get('/GoogleSignIn/googleClientId')
//       .then(response => {
//         const fetchedClientId = response.data.clientId;
//         setClientId(fetchedClientId);
//       })
//       .catch(error => {
//         console.error('Error fetching Google Client ID:', error);
//       });
//   }, []);

  const oauthSignIn = () => {
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Proceed only if clientId is available
    if (true) {
      const params = {
        client_id: "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com",
        redirect_uri: 'https://localhost:5001',
        response_type: 'token',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        include_granted_scopes: 'true',
        state: 'pass-through value',
      };

      const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

      //window.location.href = `${oauth2Endpoint}?${queryString}`;
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
