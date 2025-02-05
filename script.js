// Get all the elements
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Winning combinations
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal wins
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical wins
  [0, 4, 8], [2, 4, 6], // Diagonal wins
];

// Function to check for a win
function checkWin() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

// Handle click events for each cell
function handleClick(event) {
  const cellIndex = event.target.id.split('-')[1];

  // If the cell is already clicked or game is over, do nothing
  if (gameBoard[cellIndex] || !gameActive) return;

  // Mark the cell with the current player's symbol
  gameBoard[cellIndex] = currentPlayer;
  event.target.textContent = currentPlayer;

  // Check if the current player has won
  if (checkWin()) {
    document.getElementById('message').style.display = 'block';
    document.getElementById('message').textContent = `${currentPlayer} wins!`;
    gameActive = false;
  } else if (gameBoard.every(cell => cell)) { // Check if it's a draw
    document.getElementById('message').style.display = 'block';
    document.getElementById('message').textContent = "It's a draw!";
    gameActive = false;
  } else {
    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
  }
}

// Reset the game
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  cells.forEach(cell => cell.textContent = '');
  document.getElementById('message').style.display = 'none';
  document.getElementById('message').textContent = `Player X's turn`;
}

// Attach event listeners to cells and reset button
cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

document.getElementById('resetButton').addEventListener('click', resetGame);
