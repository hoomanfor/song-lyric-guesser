
var lyrics = ["red", "green", "blue", "orange", "purple", "black", "blue", "yellow"];

var correctLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
console.log("correctLyric: " + correctLyric);

var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = [];

document.addEventListener("keyup", function() {
    var guess = event.key 
    for (var i = 0; i < correctLyric.length; i++) {
        if (correctLyric[i] == guess) {
            console.log("Correct letter found in lyrics: " + correctLyric[i])
            console.log ("What is the indexOf: " + correctLyric.indexOf(correctLyric[i]))
        }
    }
})