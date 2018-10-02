// create a 9-box grid (css ? flex-box) -> do it in 9 individual boxes OR just one whole grid (can that be done??) ==> COMPLETED using flex-box
// create "X"s and "O"s -> onclick
// 2 players taking turns each -> how? create 2 separate functions? but then would need to link them back together?
// OR print "X" on first click, "O" on 2nd click and alternate? - display that it is player 1 or 2's turn clearly
// create the winning scenarios -> win in a straight row OR win in a diagonal row

// basically :
// draw gameboard --> completed? need to be more specific?
// click to show "X" or "O"
// who's turn is it?
// did they win?
// replay/reset game

var playerOne = "X";
var playerTwo = "O";

// ? create 2 arrays... 1 for players, 1 for "X" or "O"
// var players = [];
// var xOrO = ["X", "O"];
// var whoseTurn = 0;

function play(clicked) {
    clicked.innerText = "X";
}

function changePlayer() {
    if (playerOne = 0) playerTwo = 1;
    else playerOne = 0;
}


// var gameBoardBoxes = document.querySelectorAll('.game-board .box'); 
// var gameBoard = document.querySelector('.game-board');
// var box = document.querySelector('.box');


// event.target.addEventListener('click', 'O');