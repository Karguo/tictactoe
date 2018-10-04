var currentPlayer = 0;
var playerOne = [];
var playerTwo = [];
var playerToken = ["X", "O"];
var gameBoard = document.querySelector('.game-board');
var winCombos = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
];

gameBoard.addEventListener('click', play);

function play() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
        // grab the square that was clicked
        event.target.gameBoard.add('click');
        // change its content to player token's content
         playerToken[0];
        document.querySelector('.message').innerText = "Go Player Two!";
    } else if (currentPlayer === 1) {
        currentPlayer = 0;
        document.querySelector('.message').innerText = "Go Player One!"
    }
}


// **** works to play X and O and no double click ****
// *** but captures 'clicked' onto any new array created
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


// function play(game) {
//     if (isWin == true) {
//         return
//     } if (currentPlayer = 0) {
//         game.innerText = "X";
//         currentPlayer = 1;
//         document.querySelector('.message').innerText = "Go Player Two!";
//     } else {
//         game.innerText = "O";
//         currentPlayer = 0;
//         document.querySelector('.message').innerText = "Go Player One!";
//     }
    
//     var isWin = checkWinner(winCombos);
// }
// will there be result here? restart(); game();



// who is currentPlayer?
// what to compare it with?
// if there is 3 X's in any of the winCombos = win OR
// if there is 3 O's in any of the winCombos = win

// player1choices.push(event.target.className - make sure className is right)

// function checkWinner(playerSelection) {
//     var winner = [];

//     for (i = 0; i < winCombos.length; i++) {
//         var winCombosArray = winCombos[i];

//         for (j = 0; j < winCombosArray.length; j++) {
//             if (playerSelection.indexOf(winCombosArray[j]) !== -1) {
//                 winner.push('X');
//             }
//         }
//     }

//     if (winner.length !== 3) {
//         winner = [];
//     } else {
//         return true;
//         document.querySelector('.message').innerText = 
//         "Winner!"
//     }
//      return false;
// }

// list the winning combos
// on one side have a set of moves and another has a set of combos
// ? need at least 3 moves - necessary?
