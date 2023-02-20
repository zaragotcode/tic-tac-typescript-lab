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
