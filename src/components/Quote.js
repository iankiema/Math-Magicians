import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=success';
      const apiKey = 'IWrsocgunOOPSPX1lY4wpg==tgIScuaOsYNEJMj8';
      const response = await fetch(apiUrl, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${await response.text()}`);
      }

      const responseData = await response.json();
      setQuote(responseData[0].quote || 'No joke available');
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
