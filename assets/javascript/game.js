// variables
var randomNumber = null;
var wins = 0;
var losses = 0;
var yourTotal = null;

// crystals
var crystalOne = null;
var crystalTwo = null;
var crystalThree = null;
var crystalFour = null;

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * (121 - 18) + 18);
    $(".random-number").text(randomNumber);
    return randomNumber
}

generateRandomNumber()
