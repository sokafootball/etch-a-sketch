const grid = document.querySelector(`#grid-div`)
const resetButton = document.querySelector(`#reset-btn`)
resetButton.addEventListener(`click`, resetBoard)


function createBoard(size){
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const cell = document.createElement(`div`)
      cell.addEventListener("mouseenter", () => cell.style.backgroundColor = `red`);
      cell.classList.add(`cell`)
      grid.appendChild(cell)
    }
    const br = document.createElement(`br`)
    grid.appendChild(br)
  }
}

function resetBoard(){
  deleteBoard()
  let size = getSizeFromUser()
  createBoard(size)
}

function deleteBoard(){
  let cells = document.querySelectorAll(`.cell`)
  cells.forEach(cell => grid.removeChild(cell))
}

function getSizeFromUser() {
  let size
  do { size = Number(prompt(`How many squares per side?`)) }while (isNaN(size) || size == ``)
  return size
}
