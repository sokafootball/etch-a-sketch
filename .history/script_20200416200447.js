const grid = document.querySelector(`#grid-div`)
const squaresPerSide = 1
for (let i = 1; i <= squaresPerSide; i++) {
  for (let j = 1; j <= squaresPerSide; j++) {
    const cell = document.createElement(`div`)
    cell.classList.add(`cell`)
    grid.appendChild(cell)
  }
  const br = document.createElement(`br`)
  grid.appendChild(br)
}

//make sure the user input an integer
function getSizeFromUser() {
  let size
  do { size = Number(prompt(`How many squares per side?`)) }while (isNaN(size))
  console.log(Number(size))
  console.log(typeof(size))
  return size
}
