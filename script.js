let boxes = document.querySelectorAll('.box')
let resetBox = document.querySelector('.reset')
let turn = 'X'
let flag = 0
let winMsg = document.querySelector('.winMsg')
const winPattern = [
  [0, 1, 2], //Row
  [3, 4, 5], //Row
  [6, 7, 8], //Row
  [0, 3, 6], //Column
  [1, 4, 7], //Column
  [2, 5, 8], //Column
  [0, 4, 8], //Diagonal
  [6, 4, 2] //Diagonal
]
let gameOver = false
boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (box.innerText === '' && gameOver === false) {
      if (turn === 'X') {
        turn = 'O'
        box.innerText = 'X'
      } else {
        box.innerText = 'O'
        turn = 'X'
      }
      checkWinner()
    }
  })
})

resetBox.addEventListener('click', () => {
  boxes.forEach(box => {
    box.innerText = ''
    turn = 'X'
    winMsg.innerText = `X V/S O`
    gameOver = false
  })
})

function checkWinner () {
  for (wins of winPattern) {
    let a = boxes[wins[0]].innerText
    let b = boxes[wins[1]].innerText
    let c = boxes[wins[2]].innerText
    if (a != '' && a === b && a === c) {
      console.log(a, 'Wins')
      winMsg.innerText = `${a} Wins!`
      gameOver = true
    }
  }
  let allFilled = true
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerText === '') {
      allFilled = false
      break
    }
  }
  if (allFilled === true) {
    winMsg.innerText = 'Draw!'
    gameOver = true
  }
}
