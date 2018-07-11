

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
//var omdbkey = "trilogy"; - not sure if i need this


// Take in the command line arguments
var nodeArgs = process.argv;   
var liriCommand = process.argv[2]; 
var firstInput = process.argv[3];

var movieName = "";






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
        //spotify 
        spotify.search({ type: 'track', query: firstInput, limit: 1 }, function (error, data) {
            if (error) console.log(error);
            // console.log(JSON.stringify(data, null, 2));
            console.log(data.tracks.items);
        });
        break;

    //node liri.js movie-this '<movie name here>' 

    case "movie-this":
        var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        request(queryURL, function (error, response, body) {
            if (error) console.log(error);

            console.log("statusCode: ", response && response.statusCode); // Print the response status code if a response was received
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Lang: " + JSON.parse(body).Language);
            console.log("plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        });
        break;
    //node liri.js do-what-it-says ... using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for 'I want it that way' as follows in random.txt
    case "do-what-it-says":
        fs.readFile("./random.txt", "utf8", function (error, data) {
            if (error) console.log(error);
            console.log(data);
        });
        break;
}















