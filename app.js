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

var playerOne = 1;

function play(game) {
    if (event.target.classList.contains('clicked')){
        return
    } else if (playerOne == 1) {
        game.innerText = "X";
        playerOne = 0;
        document.querySelector('.message').innerText = "Go Player Two!";
    } else {
        game.innerText = "O";
        playerOne = 1;
        document.querySelector('.message').innerText = "Go Player One!";
    }
    event.target.classList.add('clicked');
}

// winning scenarios

