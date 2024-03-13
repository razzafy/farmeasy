import React from 'react';

const About = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><a className="active" href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/About" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</a></li>
        </ul>
      </nav>
      <div style={{ backgroundColor: '#004c00', padding: '50px', minHeight: '100vh', textAlign: 'center', color: 'white', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', fontWeight: 'bold', letterSpacing: '1px' }}>About FarmEasy</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <section style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 'bold' }}>Our Mission</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>At FarmEasy, our mission is to revolutionize agriculture through innovation and technology. We strive to empower farmers with the tools and knowledge they need to optimize their crop production and contribute to global food security.</p>
          </section>
          <section style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 'bold' }}>Our Values</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>We are committed to sustainability, efficiency, and empowerment. We believe in harnessing the power of data and technology to create a more resilient and prosperous agricultural sector.</p>
          </section>
          <section style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 'bold' }}>Empowering Farmers, Feeding Nations</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Agriculture lies at the heart of our existence, and at FarmEasy, we understand its importance like no other. With our cutting-edge machine learning algorithms, we're not just predicting crop yields, we're shaping the future of farming. Join us in our mission to empower farmers, feed nations, and build a greener tomorrow.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
