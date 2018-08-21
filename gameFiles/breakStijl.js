import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = Game.canvasWidth;
  canvasEl.height = Game.canvasHeight;
  console.log("something still works goddamn it");

  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx);
  game.playGame();
});
