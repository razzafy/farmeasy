import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center', color: 'white' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</Link></li>
        </ul>
      </nav>
      <div style={{ backgroundColor: '#004c00', padding: '10px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Contact Us</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>We'd love to hear from you!</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px", backgroundImage: "url('https://cdn.arstechnica.net/wp-content/uploads/2013/12/7881675668_4be9740def_b-640x426.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div style={{ padding: "20px", backgroundColor: "rgba(128, 128, 128, 0.7)", borderRadius: "10px", maxWidth: "600px" }}>
            <h2>Get in Touch</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Have a question or feedback? Feel free to reach out to us using the form below.</p>
            <form>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label htmlFor="name" style={{ fontSize: '1rem', display: 'block', marginBottom: '5px' }}>Name:</label>
                <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }} />
              </div>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label htmlFor="email" style={{ fontSize: '1rem', display: 'block', marginBottom: '5px' }}>Email:</label>
                <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }} />
              </div>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label htmlFor="message" style={{ fontSize: '1rem', display: 'block', marginBottom: '5px' }}>Message:</label>
                <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }}></textarea>
              </div>
              <button type="submit" style={{ backgroundColor: '#007f00', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
