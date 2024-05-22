import React, { useEffect } from 'react';
import Auth0Lock from 'auth0-lock';

const Auth0Login = () => {
  useEffect(() => {
    // Konfigurasi Auth0 Lock
    const lock = new Auth0Lock('FIthQaW9fG0bGdXRRN3ZeBi8te5DYsqr', 'dev-q8uqn5yntv2fh046.us.auth0.com', {
      auth: {
        responseType: 'token id_token',
        redirectUrl: 'http://localhost:3000/callback', // URL pengalihan yang benar
        params: {
          scope: 'openid profile email' // Tentukan scope yang diinginkan
        }
      }
    });

    // Tampilkan widget login saat komponen dimuat
    lock.show();
  }, []);

  return (
    <div>
      <h1>Login with Auth0</h1>
    </div>
  );
};

export default Auth0Login;
