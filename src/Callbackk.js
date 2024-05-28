import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth0Lock from 'auth0-lock';

const Callbackk = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const lock = new Auth0Lock('FIthQaW9fG0bGdXRRN3ZeBi8te5DYsqr', 'dev-q8uqn5yntv2fh046.us.auth0.com');

    lock.on('authenticated', (authResult) => {
      console.log('Access Token:', authResult.accessToken);

      // Simpan token JWT ke localStorage
      localStorage.setItem('token', authResult.idToken);

      // Redirect ke halaman dashboard setelah berhasil login
      navigate('/dashboard');
    });

    lock.on('authorization_error', (err) => {
      console.error('Authorization Error', err);
      navigate('/login');
    });

    lock.resumeAuth(window.location.hash, (error, authResult) => {
      if (error) {
        console.error('Error parsing hash', error);
        return navigate('/login');
      }

      if (authResult && authResult.idToken) {
        console.log('Auth Result:', authResult);
        localStorage.setItem('token', authResult.idToken);
        navigate('/dashboard'); // Redirect ke halaman dashboard setelah berhasil login
      } else {
        console.error('Auth Result is null or missing idToken');
        navigate('/login');
      }
    });
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callbackk;
