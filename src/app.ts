const winningCombo: number[][] = [
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


let board: (number| null)[];
let turn: number;
let winner: boolean;
let tie: boolean;



const squareEls = document.querySelectorAll(".sqr") as NodeListOf<HTMLDivElement>;

const messageEl = document.getElementById("message")

const resetBtnEl = document.getElementById("reset")


// squareEls.forEach((square: HTMLDivElement) => {
//   square.addEventListener("click", handleClick)
// })

resetBtnEl?.addEventListener("click", init)


function init(): void {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false 
  tie = false
}


