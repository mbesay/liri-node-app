var twitter = require("./keys.js");
var Twitter = require('twitter');
//console.log(twitter);

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
  //  moviethis();
      break;

}
