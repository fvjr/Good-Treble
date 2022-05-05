import React from 'react';
import '../../styles/style.css';

function Profile() {
  return (
    <div>
      <h1>USERNAME HERE!!!</h1>
      <h2>YOUR PROFILE</h2>
      <header className="display-flex justify-space-between align-center p-2">
        <h1></h1>
        <h3>
          Let's get your Spotify songs imported! Click the "Import Songs" button
          to import some of your recent favorites! To start, we'll import 25 of
          your most recently liked songs.
        </h3>
        <a href="">
          <button id="button-spotify-import">Import Songs</button>
        </a>
      </header>
    </div>
  );
}

export default Profile;
