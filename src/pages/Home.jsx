import React from 'react';
import Sentence from '../components/Sentence';
import Socials from '../components/Socials';
import Media from '../components/Media';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Sentence />
      <Socials />
      <Media />
    </div>
  );
}

export default Home; 