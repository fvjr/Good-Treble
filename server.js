const spotify = require('./helpers/spotify');

async function getData(){
const outputArray = await spotify.retrieveFavorites(800);
console.log(outputArray);
}

getData();