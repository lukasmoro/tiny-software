import React from 'react';
import './Media.css';
import tinypodcasts1 from '../assets/tinypodcasts1.jpg';
import tinypodcasts2 from '../assets/tinypodcasts2.jpg';
import tinypodcasts3 from '../assets/tinypodcasts3.jpg';
import tinypodcasts4 from '../assets/tinypodcasts4.jpg';
import tinypodcasts5 from '../assets/tinypodcasts5.jpg';
import tinypodcasts6 from '../assets/tinypodcasts6.jpg';

function Media() {
  const handleDownloadTinyPodcasts = () => {
    window.open('https://chromewebstore.google.com/detail/tiny-podcasts/mleolcoofjackgkblpolibcdbcdbpohf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="media-container">
      <div className="media-content">
        <div className="podcast-column">
          <p className="podcast-description">Simple and Beautiful Podcast Player. Available for Google Chrome.</p>
          <img src={tinypodcasts1} alt="Tiny Podcast 1" className="podcast-image" />
          <img src={tinypodcasts2} alt="Tiny Podcast 2" className="podcast-image" />
          <img src={tinypodcasts3} alt="Tiny Podcast 3" className="podcast-image" />
          <img src={tinypodcasts4} alt="Tiny Podcast 4" className="podcast-image" />
          <img src={tinypodcasts5} alt="Tiny Podcast 5" className="podcast-image" />
          <img src={tinypodcasts6} alt="Tiny Podcast 6" className="podcast-image" />
        </div>
        <button className="download-button" onClick={handleDownloadTinyPodcasts}>
          Download from Chrome Web Store.
        </button>
      </div>
    </div>
  );
}

export default Media; 