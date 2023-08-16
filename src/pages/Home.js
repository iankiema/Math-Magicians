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
      <p className="tagline">Explore the world of mathematics!</p>
    </main>
  </div>
);

export default Home;
