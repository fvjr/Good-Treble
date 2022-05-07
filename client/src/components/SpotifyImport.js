import React from 'react';

function SpotifyImport() {
  return (
    <div>
      <header className="display-flex justify-space-between align-center p-2">
        <h1>SPOTIFY IMPORT SECTION</h1>
        <h3>
          Let's get your Spotify songs imported! Click the "Import Songs" button
          to import some of your recent favorites!
        </h3>
        <a href="">
          <button id="button-spotify-import">Import Songs</button>
        </a>
      </header>
    </div>
  );
}

export default SpotifyImport;
