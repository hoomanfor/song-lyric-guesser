
var lyrics = ["red", "green", "blue", "orange", "purple", "black", "blue", "yellow"];

var correctLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
console.log("correctLyric: " + correctLyric);

var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = [];
var correctLetters = [];

var domPlaceholder = document.querySelector("#placeholder");

function placeholder() {
    for (var i = 0; i < correctLyric.length; i++) {
        domPlaceholder.textContent += " - ";
    }
}

document.addEventListener("keyup", function() {
    var guess = event.key 
    for (var i = 0; i < correctLyric.length; i++) {
        if (correctLyric[i] == guess) {
            correctLetters.push(correctLyric[i]);
            console.log("Correct letter found in lyrics: " + correctLyric[i])
            console.log ("What is the indexOf: " + correctLyric.indexOf(correctLyric[i]))
            console.log ("correctLetters Array: ", correctLetters);
        }
    }
})

placeholder();


