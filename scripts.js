const DEBUG = false;
const FRAMESPERSECOND = 20;
const GAMETIMEINTERVAL = DEBUG ? 4000 : 1000;
const DIRECTIONS = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT"
};
var canvas;
var canvasContext;
var snake = {
  body: [{ x: 100, y: 200 }],
  direction: undefined
};
const initialTailLength = 3;
let apple = {
  x: 200,
  y: 400
};
let checkIfContact = true;
let score = 0;

for (let i = 0; i < initialTailLength; i++) {
  snake.body.push({ x: 100, y: 200 });
}

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  if (DEBUG === false) {
    moveApple();
  }

  setInterval(function() {
    if (isSnakeEatingApple()) {
      console.log("collision detected");
      moveApple();
      increaseSnakeLength();
      score++;
    }
    moveSnake();
    if (isSnakeCollidingWithBoundary()) {
      alert("Game over. Try again!");
      window.location.reload();
      checkIfContact = false;
    }
    drawCanvas();
    drawApple();
    drawSnake();
    drawScoring();

    if (isSnakeEatingItself() === true) {
      alert("Gamer over. Try again!");
      window.location.reload();
    }
  }, GAMETIMEINTERVAL / FRAMESPERSECOND);
};

if (DEBUG === true) {
  apple.y = 200;
  apple.x = 400;
  GAMETIMEINTERVAL = 4000;
}

document.onkeydown = function(e) {
  if (e.keyCode == "37" && snake.direction != DIRECTIONS.RIGHT && snake.direction != "RIGHT") {
    snake.direction = "LEFT";
  }
  if (e.keyCode == "38" && snake.direction != DIRECTIONS.UP && snake.direction != "DOWN") {
    snake.direction = "UP";
  }
  if (e.keyCode == "39" && snake.direction != DIRECTIONS.RIGHT && snake.direction != "LEFT") {
    snake.direction = "RIGHT";
  }
  if (e.keyCode == "40" && snake.direction != DIRECTIONS.DOWN && snake.direction != "UP") {
    snake.direction = "DOWN";
  }
};

function moveSnake() {
  for (let i = snake.body.length - 1; i > 0; i--) {
    snake.body[i].y = snake.body[i - 1].y;
    snake.body[i].x = snake.body[i - 1].x;
  }

  if (snake.direction === DIRECTIONS.LEFT) snake.body[0].x -= 20;
  if (snake.direction === DIRECTIONS.UP) snake.body[0].y -= 20;
  if (snake.direction === DIRECTIONS.RIGHT) snake.body[0].x += 20;
  if (snake.direction === DIRECTIONS.DOWN) snake.body[0].y += 20;

  if (checkIfContact == false) {
    avoidCheckingCollision();
  }
}

function isSnakeCollidingWithBoundary() {
  return (
    snake.body[0].x >= canvas.width ||
    snake.body[0].x <= -20 ||
    snake.body[0].y <= -20 ||
    snake.body[0].y >= canvas.height
  );
}

function moveApple() {
  apple.x = Math.floor(Math.random() * 40) * 20;
  apple.y = Math.floor(Math.random() * 30) * 20;

  for (i = 0; i < snake.length; i++) {
    if (appleX == snake[i].x && appleY == snake[i].y) {
      moveApple();
    }
  }
}

function isSnakeEatingApple(e) {
  for (i = 0; i < snake.body.length; i++) {
    if (snake.body[0].x == apple.x && snake.body[0].y == apple.y) {
      return true;
    }
  }

  return false;
}

function isSnakeEatingItself() {
  for (i = snake.body.length - 1; i > 0; i--) {
    if (
      snake.body.length >= 5 &&
      snake.body[0].x == snake.body[i].x &&
      snake.body[0].y == snake.body[i].y
    ) {
      return true;
    }
  }
  return false;
}

function increaseSnakeLength() {
  for (i = 0; i < initialTailLength; i++) {
    snake.body.push({ x: snake.body[i].x, y: snake.body[i].y });
  }
}

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height, "black");
}

function drawScoring() {
  canvasContext.fillStyle = "white";
  canvasContext.fillText(score, 35, 50);
  canvasContext.font = "30px Arial";
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(apple.x, apple.y, 20, 20);
}

function drawSnake() {
  canvasContext.fillStyle = "green";
  for (let i = 0; i < snake.body.length; i++) {
    canvasContext.fillRect(snake.body[i].x, snake.body[i].y, 20, 20);
  }
}