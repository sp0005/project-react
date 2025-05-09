
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #83a4d4, #b6fbff)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '48px',
      marginBottom: '10px',
      color: '#2c3e50',
    },
    subtitle: {
      fontSize: '20px',
      marginBottom: '30px',
      color: '#34495e',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#2980b9',
      color: '#fff',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#1c5980',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our App</h1>
      <p style={styles.subtitle}>Please log in or register to continue</p>
      <div style={styles.buttonContainer}>
        <Link to="/login">
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1c5980')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2980b9')}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1c5980')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2980b9')}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
