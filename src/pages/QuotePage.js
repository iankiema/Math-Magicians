import React from 'react';
import Quote from '../components/Quote';
import Navigation from './Navigation';

const QuotePage = () => (
  <div className="home">
    <header className="app-header">
      <h1>Math Magicians</h1>
      <Navigation />
    </header>
    <h1>Random Math-Related Quote</h1>
    <Quote />
  </div>
);

export default QuotePage;
