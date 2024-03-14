import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import auth from './firebaseconfig';
const auth1=getAuth();
const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = data;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   signInWithEmailAndPassword(auth1,email,password)
   .then((user)=>
   {
    console.log(user);
    navigate('/dashboard');
    //navigate('/results');
   })
   .catch((err)=>
   {
    console.log(err);
    window.alert("Please enter the correct credentials");
   })
  };

  return (
    <div style={{ backgroundColor: '#004c00', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</Link></li>
        </ul>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
        <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                placeholder="Enter your email"
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Login</button>

          </form>
          <p style={{ marginTop: '20px', textAlign: 'center' }}>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
