let requestUrl =
  'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=2J3VvdDsUGBwLmaVbhhhqYTMGU0m01Lm';

let searchMusic = async function () {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    });
};

searchMusic();
