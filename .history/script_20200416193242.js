const grid = document.querySelector(`#grid-div`)
const squaresPerSide = prompt(`How many squares per side?`)
for(let i = 1; i <= squaresPerSide; i++){
  for(let j = 1; j <= squaresPerSide; j++){
    const cell = document.createElement(`div`)
    cell.classList.add(`cell`)
    grid.appendChild( cell)
  }
  const br = document.createElement(`br`)
  grid.appendChild(br)
}
