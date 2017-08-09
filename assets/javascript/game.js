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
    randomNumber = Math.floor(Math.random() * (121 - 19) + 19);
}

// function to create random crystal number
function crystalNumber() {
    crystalOne = Math.floor(Math.random() * (19 - 1) + 1);
    $('#crystal-1').val(crystalOne);
    crystalTwo = Math.floor(Math.random() * (19 - 1) + 1);
    $('#crystal-2').val(crystalTwo);
    crystalThree = Math.floor(Math.random() * (19 - 1) + 1);
    $('#crystal-3').val(crystalThree);
    crystalFour = Math.floor(Math.random() * (19 - 1) + 1);
    $('#crystal-4').val(crystalFour);
}

// reset game function
function reset() {
    generateRandomNumber();
    crystalNumber();
    yourTotal = 0;

}

// update display function
function updateDisplay() {
    $(".random-number").text(randomNumber);
    $('.win-total').text(wins);
    $('.losses-total').text(losses);
    $('.your-total').text(yourTotal);
}

// gameplay onclick function
$('.crystal').click(function () {
    var crystalValue = this.value;
    yourTotal += parseInt(crystalValue);
    if (yourTotal > randomNumber) {
        // you lose
        losses++;
        reset();
    } else if (yourTotal === randomNumber) {
        // you win
        wins++;
        reset();
    }
    updateDisplay();
})

// start gameplay
reset();
updateDisplay();
