import Game from "./game";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
  // timestamp przychodzi z przeglądarki
  // po każdym tiku paddle jest rysowane na nowo
  // a funkcja gameLoop wywoływana na nowo przez requestAnimationFrame
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);
  // funkcja wbudowana w przeglądarkę
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
