import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const SubHeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const navigate = useNavigate();

  // Wrap the placeholders array in useMemo to prevent redefinition
  const placeholders = useMemo(
    () => [
      'Search for dishes...',
      'Ask any question...',
      'Find your favorite meal!',
      'Explore new recipes!',
    ],
    []
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentWord = placeholders[currentWordIndex];

      if (charIndex < currentWord.length) {
        // Add the next character to the placeholder
        setCurrentPlaceholder((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Pause before starting the next word
        setTimeout(() => {
          setCharIndex(0); // Reset character index
          setCurrentPlaceholder(''); // Clear the placeholder
          setCurrentWordIndex((prev) => (prev + 1) % placeholders.length); // Move to the next word
        }, 1000); // 1-second pause
        clearInterval(typingInterval); // Clear current interval
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, [charIndex, currentWordIndex, placeholders]);

  return (
    <>
      <nav 
        className="d-flex justify-content-center align-items-center vh-20 p-3" 
        style={{ backgroundColor: '#343a40' }}
      >
        <div className="container-fluid" style={{ maxWidth: '40%' }}>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control me-2"
              placeholder={currentPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default SubHeaderSearch;
