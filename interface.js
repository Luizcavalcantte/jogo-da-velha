document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
    let reset = document.getElementById("novoJogo");
    reset.addEventListener("click", novoJogo);

    function novoJogo() {
      board = ["", "", "", "", "", "", "", "", ""];
      playerTime = 0;
      symbols = ["o", "x"];
      gameOver = false;
      square.innerHTML = "";
    }
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    if (playerTime == 0) {
      jogador = "Escudo";
    } else {
      jogador = "Espada";
    }

    setTimeout(() => {
      alert("O Jogo Acabou!! " + jogador + " Venceu!!");
    }, 10);
  }
  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class= "${symbol}"></div>`;
    }
  });
}
