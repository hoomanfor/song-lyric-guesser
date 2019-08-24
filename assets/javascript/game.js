
var lyrics = [
    ["And I wanna be like water if I can 'Cause water doesn't give a _ _ _ _.", "David Berman", "damn"],
    ["My life at home every day. Drinking coke in a kitchen with a dog who doesn't know his <br> _ _ _ _.", "David Berman", "name"],
    ['Boy wants a car from his dad. Dad says,<br> "First you got to cut that hair." <br> Boy says,<br> "Hey dad, Jesus had long hair" <br> And dad says, <br> "That\'s right son,<br> Jesus walked _ _ _ _ _ _ _ _ _ _."', "David Berman", "everywhere"],
    ["The leafless tree looked like a brain. The birds within were all the thoughts <br> and _ _ _ _ _ _ _ within me.", "Bill Callahan", "desires"],
    ['The only words I\'ve said today are "_ _ _ _" and "thank you"', "Bill Callahan", "beer"],
    ['Punk rock died when the first kid said, "Punk\'s not _ _ _ _, punk\'s not dead"', "David Berman", "dead"],
    ["I have not avoided certainty. It has always just _ _ _ _ _ _ me.", "David Berman", "eluded"],
    ["Call me from Albemarle Station if you can. I hope you find your <br> _ _ _ _ _ _ _ _ _ _ _ _ _ , <br> beneath those ceiling fans.", "David Berman", "concentration"],
    ['The elephants are so ashamed of their size. <br> Hosing \'em down, I tell them, <br> "you got pretty _ _ _ _."', "David Berman", "eyes"],
    ["All my favorite singers couldn't <br> _ _ _ _.", "David Berman", "sing"]
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
    completeLyric = lyrics[randomIndex][0];
    artist = lyrics[randomIndex][1];
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





