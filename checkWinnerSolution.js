function checkWinner(board) {
  // Check rows, columns, and diagonals as before...

  // Check for a draw
  let isFull = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        isFull = false;
        break;
      }
    }
    if (!isFull) break;
  }

  if (isFull) {
    return 'draw'; // Indicate a draw
  } else {
    return null; // No winner yet
  }
}