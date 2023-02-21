"use strict";
const winningCombo = [
    // Horizonal Combos
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical Combos
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal Combos
    [0, 4, 8],
    [2, 4, 6],
];
let board;
let turn;
let winner;
let tie;
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");
const resetBtnEl = document.getElementById("reset");
squareEls.forEach((square) => {
    square.addEventListener("click", handleClick);
});
if (resetBtnEl) {
    resetBtnEl?.addEventListener("click", init);
}
init();
function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
function render() {
    updateBoard();
    updateMessage();
    rstButton();
}
function updateBoard() {
    board.forEach((square, idx) => {
        if (square === 1) {
            return (squareEls[idx].textContent = "X");
        }
        else if (square === -1) {
            return (squareEls[idx].textContent = "O");
        }
        else if (square === null) {
            return (squareEls[idx].textContent = "");
        }
    });
}
function updateMessage() {
    if (!winner && !tie) {
        messageEl.innerText = `Player ${turn > 0 ? "X" : "O"}, you're up!`;
    }
    else if (!winner && tie) {
        messageEl.innerText = "It's a tie!";
    }
    else {
        messageEl.innerText = `Player ${turn > 0 ? "X" : "O"} has won!`;
    }
}
function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id.slice(2));
    if (board[sqIdx] !== null)
        return;
    if (winner == true)
        return;
    placePiece(sqIdx);
    checkForTie();
    checkForWinner();
    switchPlayerTurn();
    render();
    rstButton;
}
function placePiece(idx) {
    board[idx] = turn;
    if (winner == true) {
        return;
    }
}
function checkForTie() {
    if (!board.includes(null)) {
        tie = true;
    }
}
function checkForWinner() {
    winningCombo.forEach((winningArray) => {
        let totalSumAtCombo = winningArray.reduce((prev, num) => {
            return prev + (board[num] ?? 0);
        }, 0);
        if (Math.abs(totalSumAtCombo) === 3) {
            winner = true;
        }
    });
}
function switchPlayerTurn() {
    if (winner === true) {
        return;
    }
    else {
        turn = turn * -1;
    }
}
function rstButton() {
    if (winner === false) {
        resetBtnEl.setAttribute("style", "visibility: hidden;");
    }
    else {
        resetBtnEl.setAttribute("style", "visibility: visible;");
    }
}
