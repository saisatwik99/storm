import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = process.env.REACT_APP_USERS.split(',').map(user => {
      const [userEmail, userPassword] = user.split(':');
      return { email: userEmail, password: userPassword };
    });

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      navigate('/app');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="https://www.stormedugo.com/Content/User/images/logo.png" alt="Logo" style={styles.logo} />
      </div>
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>Login</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    
    height: '100px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  input: {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '300px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;