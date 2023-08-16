import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote] = useState('');

  // Fetch a random math-related quote from an API or predefined list
  const fetchRandomQuote = async () => {
    // Implement API call or use predefined list
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="quote">
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default Quote;
