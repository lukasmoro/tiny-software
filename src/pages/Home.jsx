import React from 'react';
import Sentence from '../components/Sentence';
import Socials from '../components/Socials';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Sentence />
      <Socials />
    </div>
  );
}

export default Home; 