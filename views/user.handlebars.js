<h2>Playlist</h2>
{{#each song as |song|}}
  <div class='row mb-4 project'>
    <div class='col-md-5'>
        <h1><{{user.name}}'s Top 100 Songs</h1>
        <p>{{song.name}}:{{song.artist_id}} {{song.playlist_id}}</p>
    </div>
    
    <div>
    </div>
    <div class='col-md-7'>
      <p>

      </p>
    </div>
  </div>

{{/each}}