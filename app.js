function startGame() {
    // start with one of the Player's turn
    document.turn = "X";
    // randomise which player starts
    if (Math.random() < 0.5) {
        document.turn = "O";
    }
    document.winner = null;
    // show a message for who's turn it is
    setMessage("Go Player " + document.turn + "!");
}

// set what the message is going to say
function setMessage(msg) {
    document.querySelector('.message').innerText = msg;
}

// set who's move it is next,
// set to check if box has already been clicked, ie, already has content in it - display message if it has
// set if there is already a winner, game ends and message saying who won is shown - it has to come before we start checking how to switch player turns
function nextMove(box) {
    if (document.winner != null) {
        setMessage("Player " + document.winner + " has already won the game!");
    } else if (box.innerText == "") {
    box.innerText = document.turn;
    switchTurn();
    } else {
        setMessage("Already used! Click again...")
    }
}

// set how to switch players' turn, 
// set to display message and change token on who's turn it is
// set to display message for player who won
function switchTurn() {
    if (checkWin(document.turn)) {
        setMessage("Congratulations, Player " + document.turn + "! You've won!");
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("Go Player " + document.turn + "!");
    } else {
        document.turn = "X";
        setMessage("Go Player " + document.turn + "!");
    }
}

// list out possible winning combos and just check if true or false
// old-fashion way, getting all possible winning combos and listing them all out. not scaleable.
function checkWin(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || 
        checkRow(4, 5, 6, move) || 
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

            result = true;
        } 
        return result;
}

// set how to check for the winning combo
// to call this on 3 different boxes to see if they match a turn
// again, long-way and not scaleable
function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

// need to set a function to retrieve/get a "box" from the screen and check what is inside this
// return this value... move back up to checkRow function
function getBox(number) {
    return document.getElementById("b" + number).innerText;
}

// reset the game
// clear the board?
// function reset() {

// }