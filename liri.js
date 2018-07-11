

// use dotenv to hide keys 
require("dotenv").config();


//pull data from keys.js 
var keys = require('./keys.js');



var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var request = require('request');
var fs = require('fs');


//access keys information
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



// Take in the command line arguments
var nodeArgs = process.argv;
var liriCommand = process.argv[2];
var userInput = process.argv[3];


// need to insert code to log when user does not specify input 
//default song in random.txt file 
//default movie - Mr. Nobody 
//If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
//It's on Netflix!




switch (liriCommand) {
    // node liri.js my-tweets shows last 20 tweets 
    case "my-tweets":
        var params = { screen_name: 'BeachesSandee', count: 20 };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {

            if (error) console.log(error);
            console.log("tweet");
            for (i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        });
        break;

    //node liri.js spotify-this-song '<song name here>'
    case "spotify-this-song":

        spotify.search({ type: 'track', query: userInput, limit: 1 }, function (error, data) {
            if (error)
                console.log(error);

            // track information requested
            console.log("Artist:  " + data.tracks.items[0].album.artists[0].name);
            console.log("Song Name:  " + data.tracks.items[0].name);
            console.log("Link to Spotify:  " + data.tracks.items[0].album.external_urls.spotify);
            console.log("Album name:  " + data.tracks.items[0].album.name);
        });
        break;

    //node liri.js movie-this '<movie name here>' 

    case "movie-this":
        var queryURL = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

        request(queryURL, function (error, response, body) {
            if (error)
                console.log(error);

            //first line prints status code
            console.log("statusCode: ", response && response.statusCode);
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        });
        break;
    //node liri.js do-what-it-says - defaults to info in random.txt file for song
    case "do-what-it-says":
        fs.readFile("./random.txt", "utf8", function (error, data) {
            if (error)
                console.log(error);
            console.log(data);
        });
        break;
}















