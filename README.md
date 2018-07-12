# LIRI


<h3>LIRI is a Language Interpretation and Recognition Interface, similar to IPhone's Siri. 

LIRI is a command line node app that takes in parameters and gives you back data.
</h3>

<br>
<h3>Twitter </h3>

 <li>
 LIRI will display your last 20 tweets and when they were created
 </li>
 <li>Type node liri.js my-tweets in your terminal/bash window to see tweets</li>
<br>


 <h3>Spotify</h3>

 <li> Type node liri.js spotify-this-song 'song name here' in your terminal/bash window </li>

 <li>This will show the following information about the song: 
 <ul>
Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.
</ul>
 </li>

 <h3>Do what it says</h3>
 <li> 
 Type node liri.js do-what-it-says in the terminal/bash window
 </li>
 <li>
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


 </li>
  <li>
 It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.


 </li>

<br>

<h3>Movie Information (OMDb)</h3>

<li>Type node liri.js movie-this 'movie name here' in your terminal/bash window

<li>This will show the following information about the movie: 
 <ul>
Title of the movie

Year the movie came out

IMDB Rating of the movie

Rotten Tomatoes Rating of the movie.

Country where the movie was produced.

Language of the movie.

Plot of the movie.

Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
</ul>
 </li>
