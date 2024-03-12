import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth();
const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = (e) => {
    if (data.password.length < 8) {
      window.alert("Password must have at least 8 characters");
    } else {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, data.email, data.password).then(user => console.log(user)
      ).catch(err => console.log(err)); window.alert("Registered successfully. Now you can login.");
    }
  };
  return (
    <div style={{ backgroundColor: "#007f00", minHeight: "100vh" }}>
      <nav style={{ backgroundColor: "#007f00", padding: "20px", textAlign: "center" }}>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
              Home
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link to="/login" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
              Login
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
              About
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
              Contact
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link to="/help" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
              Help
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
        <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
          <form onSubmit={handleSignUp}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email">Email:</label>
              <input
                style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                type="text"
                placeholder="Email id"
                name="email"
                value={data.email}
                onChange={changeHandler}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="password">Create Password:</label>
              <input
                autoComplete="off"
                style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                type="password"
                placeholder="Create Password"
                name="password"
                value={data.password}
                onChange={changeHandler}
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Signup</button>
          </form>
          <p style={{ marginTop: '20px', textAlign: 'center' }}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;