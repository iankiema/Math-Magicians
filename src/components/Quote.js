import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch a random math-related quote from the API
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.apithis.net/math');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote(data.result);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  if (isLoading) {
    return <div className="quote">Loading...</div>;
  }

  if (error) {
    return (
      <div className="quote">
        Error:
        {' '}
        {error.message}
      </div>
    );
  }

  return (
    <div className="quote">
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default Quote;
