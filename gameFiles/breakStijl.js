import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  console.log("hi");
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = Game.canvasWidth;
  canvasEl.height = Game.canvasHeight;

  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx);
  game.playGame();
});
