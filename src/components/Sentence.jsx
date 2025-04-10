import React, { useState, useEffect, useRef } from 'react';
import './Sentence.css';

function Sentence() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sentenceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const threshold = viewportHeight / 3;
      const position = Math.min(Math.max(scrollY / threshold, 0), 1);
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={sentenceRef}
      className="sentence" 
      style={{ 
        '--scroll-position': scrollPosition
      }}>
      <h1><em>Tiny Software</em> solves <em>Tiny Problems</em> with <em>Tiny Products</em>.</h1>
    </div>
  );
}

export default Sentence;
