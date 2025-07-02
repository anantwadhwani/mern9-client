import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Secrets from './components/Secrets';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      {!loggedIn ? (
        showRegister ? (
          <>
            <Register onRegistered={() => setShowRegister(false)} />
            <button onClick={() => setShowRegister(false)}>Back to Login</button>
          </>
        ) : (
          <>
            <Login onLogin={() => setLoggedIn(true)} />
            <button onClick={() => setShowRegister(true)}>Register</button>
          </>
        )
      ) : (
        <Secrets onLogout={() => setLoggedIn(false)} />
      )}
    </div>
  );
}

export default App;