import React from 'react';
import Navigation from './Navigation';
import './Home.css';

const Home = () => (
  <div className="home">
    <header className="app-header">
      <h1>Math Magicians</h1>
      <Navigation />
    </header>
    <main className="content">
      <h2>Welcome to our page</h2>
      <p className="tagline">The Math Magician website is an interactive online calculator application designed to provide users with a convenient and intuitive tool for performing various mathematical operations. The website offers a user-friendly interface that resembles a traditional calculator, enabling users to perform arithmetic calculations, handle percentages, and execute basic mathematical functions.</p>
    </main>
  </div>
);

export default Home;
