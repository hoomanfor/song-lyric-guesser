
var lyrics = [
    ["And I wanna be like water if I can 'Cause water doesn't give a _ _ _ _.", "David Berman", "damn"],
    ["My name is frank. I like to _ _ _ _.", "John Thunder", "dance"],
    ["The color yellow is nice because I love _ _ _ _ _ _ _.", "Susan Storm", "flowers"]
]

var randomIndex = Math.floor(Math.random() * lyrics.length);
var correctLyric = lyrics[randomIndex][2];
var completeLyric = lyrics[randomIndex][0];
var artist = lyrics[randomIndex][1];
console.log("correctLyric: " + correctLyric);

var wins = 0;
var losses = 0;
var guessesRemain = 10;
var correctLetters = [];
var incorrectLetters = [];
var incorrect;
var numCorrect = 0; 

var domWord = document.querySelector("#word");
var domGuessCount = document.querySelector("#guess-count");
var domWins = document.querySelector("#wins");
var domLosses = document.querySelector("#losses");
var domIncorrectLetters = document.querySelector("#incorrect-letters");
var domLyric = document.querySelector("#complete-lyric");
var domArtist = document.querySelector("#artist");

function newGame() {
    randomIndex = Math.floor(Math.random() * lyrics.length);
    correctLyric = lyrics[randomIndex][2];
    guessesRemain = 10;
    domGuessCount.innerHTML = 10;
    correctLetters = [];
    incorrectLetters = [];
    console.log("correctLyric: " + correctLyric);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
}

function setHyphens() {
    for (var j = 0; j < correctLyric.length; j++) {
        correctLetters.push(" _ ");
        domWord.innerHTML = correctLetters.join("");
    }
}

function setLyricAndArtist() {
    domLyric.innerHTML = completeLyric;
    domArtist.innerHTML = artist;
}

setLyricAndArtist();

setHyphens();

document.addEventListener("keyup", function() {
        var guess = event.key.toLowerCase();
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            for (var i = 0; i < correctLyric.length; i++) {
                if (correctLyric[i] === guess) {
                    correctLetters[i] = guess;
                } 
            }
            if (correctLyric.indexOf(guess) === -1 && incorrectLetters.indexOf(guess) === -1) {
                incorrect = guess;
                guessesRemain = guessesRemain - 1;
                domGuessCount.innerHTML = guessesRemain; 
                incorrectLetters.push(incorrect);
            }  
            if (guessesRemain === 0) {
                losses = losses + 1;
                domLosses.innerHTML = "Losses: " + losses;
                newGame();
                setLyricAndArtist();
                setHyphens();
            }
            if (correctLetters.indexOf(" _ ") === -1) {
                wins = wins + 1;
                domWins.innerHTML = "Wins: " + wins;
                newGame();
                setLyricAndArtist();
                setHyphens();
            }
            domWord.innerHTML = correctLetters.join("");
            domIncorrectLetters.innerHTML = incorrectLetters.join("");
    }
})

// Vanilla Javascript methods to remember:
// .split() - typeof - .charAt() - .indexOf() - nested for-loops





