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

const messageEl = document.getElementById("message") as HTMLDivElement

const resetBtnEl = document.getElementById("reset") as HTMLButtonElement



squareEls.forEach((square: HTMLDivElement) => {
  square.addEventListener("click", handleClick)
})

if (resetBtnEl) {
  resetBtnEl?.addEventListener("click", init)
}


init()

function init(): void {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false 
  tie = false
  render()
}


function render(): void {
  updateBoard()
  updateMessage()
  rstButton()
}


function updateBoard(): void {
  board.forEach((square: number | null, idx: number) => {
    if (square === 1) {
      return (squareEls[idx].textContent = "X")
    } else if (square === -1) {
      return (squareEls[idx].textContent = "O")
    } else if (square === null) {
      return (squareEls[idx].textContent = "")
    }
  })
}


function updateMessage(): void {
  if (!winner && !tie) {
    messageEl.innerText = `Player ${turn > 0 ? "X" : "O"}, you're up!`
  } else if (!winner && tie) {
    messageEl.innerText = "It's a tie!"
  } else {
    messageEl.innerText = `Player ${turn > 0 ? "X" : "O"} has won!`
  }
}


function handleClick(evt: MouseEvent): void {
  const sqIdx = parseInt((evt.target as HTMLElement).id.slice(2))
  if (board[sqIdx] !== null) return
  if (winner == true) return
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
  rstButton
}


function placePiece(idx: number): void {
  board[idx] = turn
  if (winner == true ) {
    return
  }
}

function checkForTie(): void {
  if (!board.includes(null)) {
    tie = true
  }
}


function checkForWinner(): void {
  winningCombo.forEach((winningArray: number[]) => {
    let totalSumAtCombo = winningArray.reduce((prev: number, num: number) => {
      return prev + (board[num] ?? 0)
    }, 0)
    if (Math.abs(totalSumAtCombo) === 3) {
      winner = true
    }
  })
}


function switchPlayerTurn(): void {
  if (winner === true) {
    return
  } else {
    turn = turn * -1
  }
}


function rstButton(): void {
  if (winner === false) {
    resetBtnEl.setAttribute("style", "visibility: hidden;");
  } else {
      resetBtnEl.setAttribute("style", "visibility: visible;");
  }
}