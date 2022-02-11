//rock, paper, scissors game

//create function computerPlay for computers pick
//uses mathfloor to return rock, paper or scissors
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    let compPlay = "";
    if (randomNum == 0) {
        compPlay = "rock";
    }
    else if (randomNum == 1) {
        compPlay = "paper"
    } else {
        compPlay = "scissors"
    }
    return compPlay;
}

//create playRound function which takes playerSelection and computerPlay to play 1 round of RPS

function playRound(a, b) {
    let round = "";
    let playerWins = "You Win";
    let compWins = "Your oponent Wins";
    let tie = "Tie!";
    //condition when player has rock
    if (a == "rock") {
        if (b == "paper") {
            round = compWins;
        }
        else if (b == "scissors") {
            round = playerWins;
        } else {
            round = tie;
        }
    }
    //condition when player has paper
    else if (a == "paper") {
        if (b == "rock") {
            round = playerWins;
        }
        else if (b == "scissors") {
            round = compWins;
        } else {
            round = tie;
        }
    }
    //condition when player has scissors
    else if (a == 'scissors') {
        if (b == "rock") {
            round = compWins;
        }
        else if (b == "paper") {
            round = playerWins;
        } else {
            round = tie;
        }
    }
    //displays in console who wins or when a tie occurs after each turn.
    console.log(round + " this round!");
    return round;
}

//create game function that players 5 rounds the playRound function
function game() {
    //variables for game.
    //x is the number of times the game will play
    let x = 5;
    //Variables for number of times won or when a tie occurs
    let playerWon = 0;
    let oponentWon = 0;
    let tiePlay = 0;
    //set alert to play Rock, Paper, Scissors
    let letsPlay = "Let's play Rock, Paper, Scissors!"
    alert(letsPlay);

    //for loop which runs 5 times and keeps track of score
    for (let i = 0; i < x; i++) {
        //variable playerSelection needed for player input. player input will not be case sensetive.
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        //set up computers play
        var y = computerPlay();
        let whoWon = playRound(playerSelection, y);
        //the following conditions calculates the amount of times player wins, oponent wins and ties.
        if (whoWon == "You Win") {
            playerWon += 1;
        }
        else if (whoWon == "Your oponent Wins") {
            oponentWon += 1;
        } else {
            tiePlay += 1;
        }
    }
    //the following display in console the outcome of 5 games.
    if (playerWon > oponentWon) {
        console.log("You won " + playerWon + " games and tied " + tiePlay + " times. " + "You have defeated your oponent!");
    }
    else if (oponentWon > playerWon) {
        console.log("You won " + playerWon + " games and tied " + tiePlay + " times. " + "You have been defeated by your oponent!");
    } else {
        console.log("You and your oponent Tied!");
    }
}
//starts game when webpage loads
game();