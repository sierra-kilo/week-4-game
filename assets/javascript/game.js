// variables
var randomNumber = null;
var wins = 0;
var losses = 0;
var yourTotal = 0;

// crystal variables
var crystalOne = null;
var crystalTwo = null;
var crystalThree = null;
var crystalFour = null;

// function to generate random number between 19-120
function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * (121 - 18) + 18);
    $(".random-number").text(randomNumber);
}

// function to create random crystal number
function crystalNumber() {
    crystalOne = Math.floor(Math.random() * (19 - 1) + 1);
    crystalTwo = Math.floor(Math.random() * (19 - 1) + 1);
    crystalThree = Math.floor(Math.random() * (19 - 1) + 1);
    crystalFour = Math.floor(Math.random() * (19 - 1) + 1);
}

// reset game function
function reset() {
    generateRandomNumber();
    crystalNumber();
    wins = 0;
    losses = 0;
    yourTotal = 0;
}

// update display function
function updateDisplay() {

}

// gameplay onclick function
document.onclick = function(event) {

}
