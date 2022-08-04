var state = { board: [], currentGame: [], savedGames: [] };

function start() {
  addNumberToGame(1);
  addNumberToGame(2);
  addNumberToGame(3);
  addNumberToGame(4);
  addNumberToGame(5);
  addNumberToGame(60);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(62);

  console.log(state.currentGame);
}

function addNumberToGame(numberToAdd) {
  if (60 > numberToAdd < 1) {
    console.error('Número inválido', numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error('O jogo já está completo.');
    return;
  }

  state.currentGame.push(numberToAdd);
}

start();
