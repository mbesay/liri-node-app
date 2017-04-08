var twitter = require("./keys.js");
var Twitter = require('twitter');
//console.log(twitter);
var liriName = process.argv[3];
var client = new Twitter({
  consumer_key: twitter.twitterKeys.consumer_key,
  consumer_secret: twitter.twitterKeys.consumer_secret,
  access_token_key: twitter.twitterKeys.access_token_key,
  access_token_secret: twitter.twitterKeys.access_token_secret
});



function displayTwitterFeed(){
var params = {screen_name: 'Data_Diana5', count: 1};
client.get('statuses/user_timeline', params, function(error, tweets) {
  if (error) {
    console.log(error);
  }
  console.log(tweets);
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].created_at);
    console.log(tweets[i].text);
  }

});
}

function spotifyDisplay(){
var spotify = require('spotify');



spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;

    }

    var trackinfo = data.tracks.items;
    for (var i = 0; i < 1; i++);

    var trackdata = trackinfo [i];
    var artists = trackdata.artists[0].name;
    console.log("artist: " + artists);
    var song = trackdata.name;
    console.log("song: " + song);
    var preview = trackdata.preview_url;
    console.log("preview_url " + preview);
    var album = trackdata.album.name;
    console.log("album " + album);

});
}






//movie-this
function movieDisplay(command){
  var movieUrl = "http://www.omdbapi.com/?t=" + command + "&plot=short&r=json";
  request(movieUrl, function(err, response, body){
    var objectString = JSON.parse(body);
    if(err){
      console.log(err);
    } else {
      console.log("Movie Title: " + objectString.Title);
      console.log("Year: " + objectString.Year);
      console.log("Rating: " + objectString.Rated);
      console.log("Country: " + objectString.Country);
      console.log("Language: " + objectString.Language);
      console.log("Plot: " + objectString.Plot);
      console.log("Actors: " + objectString.Actors);
    }
  });
}


var request = require("request");
//var queryURL = "http://www.omdbapi.com/?t=" + liriName + "&y=&plot=short&r=json";




//movieDisplay(queryURL);

var input = process.argv[2];
console.log(input);
switch (input) {
  case 'my-tweets':
      displayTwitterFeed();
      break;
  case 'spotify-this-song':
      spotifyDisplay();
      break;
  case 'movie-this':
      movieDisplay(liriName);
      break;

}
