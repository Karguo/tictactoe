// create a 9-box grid (css ? flex-box) -> do it in 9 individual boxes OR just one whole grid (can that be done??) ==> COMPLETED using flex-box
// create "X"s and "O"s -> onclick
// 2 players taking turns each -> how? create 2 separate functions? but then would need to link them back together?
// OR print "X" on first click, "O" on 2nd click and alternate? - display that it is player 1 or 2's turn clearly
// create the winning scenarios -> win in a straight row OR win in a diagonal row

// basically :
// draw gameboard --> completed? need to be more specific?
// click to show "X" or "O" --> completed
// who's turn is it? change/toggle different player --> completed
// make sure can't override previous move/player --> completed
// did they win? check for winning scenarios
// display winner
// replay/reset game

var numberOfPlayers = 2;
var currentPlayer = 0;
var playerTurn = 0;
var playerToken = "X";
var playerOnePoints = 0;
var playerTwoPoints = 0;
var gridSize = 3;
var playerOne = [];
var playerTwo = [];
var winner = [];

var play = function(event) {
    if (currentPlayer == 0) {
        this.innerHTML = "X";
        playerOne.push(parseInt(this.id));
        playerOne.sort(function(a, b) {return a - b});
    } else {
        this.innerHTML = "O";
        playerTwo.push(parseInt(this.id));
        playerTwo.sort(function(a, b) {return a - b});
    }

    playerTurn++;
    
    var isWin = checkWinner();

    if (isWin)
    {
        if (currentPlayer == 0)
            playerOnePoints++;
        else
            playerTwoPoints++;
// ? get result here and reset? restart(); gameBoard();
    }
    else
    {
        if (currentPlayer == 0)
            currentPlayer = 1;
        else
            currentPlayer = 0;
        // this.removeEventListener('click', );
    }
};
// addEventListener here for 'click'?? winCombos();

// function restart() {
//     currentPlayer = 0;
//     playerOne = [];
//     playerTwo = [];
// }

function winCombos() {
    winner.push([1, 2, 3]);
    winner.push([4, 5, 6]);
    winner.push([7, 8, 9]);
    winner.push([1, 4, 7]);
    winner.push([2, 5, 8]);
    winner.push([3, 6, 9]);
    winner.push([1, 5, 9]);
    winner.push([3, 5, 7]);
}

function checkWinner() {
    var win = false;
    var playerSelections = [];

    if (currentPlayer == 0)
        playerSelections - playerOne;
    else
        playerSelections - playerTwo;

    if (playerSelections.length >= gridSize) {
        for (i = 0; i < winners.length; i++) {
            // check winning hand
            var sets = winners[i];
            var setFound = true;

            for (r = 0; r < sets.length; r++) {
                // check if number is in current players hand
                // if not, stop, hv winner
                var found = false;
                
                // players hand
                for (s = 0; s < playerSelections.length; s++) {
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                    }
                }
                // value not found in players hand
                // or not a valid set, move on
                if (found == false) {
                    setFound = false;
                }
            }
            if (setFound == true) {
                win = true;
            }
        }
    }
    return win;
}




// **** works to play X and O and no double click ****
// var playerTurn = 1;
// function play(game) {
//     if (event.target.classList.contains('clicked')){
//         return
//     } else if (playerTurn == 1) {
//         game.innerText = "X";
//         playerTurn = 0;
//         document.querySelector('.message').innerText = "Go Player Two!";
//     } else {
//         game.innerText = "O";
//         playerTurn = 1;
//         document.querySelector('.message').innerText = "Go Player One!";
//     }
//     event.target.classList.add('clicked');
// }

// winning combinations:
// each row, column and diagonal have to match --> how to show that it is matching?
// try do single row first...

// function winGame() {
//     for (var i = 0; i < winCombos.length; i++) {
//         if (winCombos[i] == winCombos[i + 1] && winCombos[i + 1] == winCombos[i + 2]) {
//             return document.querySelector('.message').innerText = "Winner!";
//         };
//     };
// };

// check what has been put up on the board is the same as the the winning combo...
// record which of these boxes has been recorded
// * loops and conditionals...

[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],

['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],




// function winGame (gameBoard, lastMove) {
//     var player = gameBoard[lastMove];
//     for (var i = 0; i < winCombos[lastMove].length; i++) {
//         var line = winCombos[lastMove][i];
//         if (player === gameBoard[line[0]]) && player === board[line[1]]; 
//     }
// };

// function play(gameBoard) {
//     if (gameBoard.value == "") {
//         (gameBoard.value == playerToken);
//         playerTurn ++;
//         document.getElementById("box").currentMove.value = currentMove;
//         document.querySelector('.message').innerText = "Go Player Two!";
//     };
// };