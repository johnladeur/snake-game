const DEBUG = false;
const FRAMESPERSECOND = 20;
const GAMETIMEINTERVAL = 1000;

var canvas;
var canvasContext;
var snake = [];
snake[0] = { x: 100, y: 200 };
var initialTailLength = 3;
var appleX;
var appleY;
let checkIfContact = true;
let direction;
let score = 0;

var i;
for (i = 0; i < initialTailLength; i++) {
  snake.push({ x: 100, y: 200 });
}

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  moveApple();

  setInterval(function() {
    checkCollision();
    moveSnake();
    drawCanvas();
    drawSnake();
    drawApple();
    drawScoring();
    checkSnakeContact();
  }, GAMETIMEINTERVAL / FRAMESPERSECOND);
};

if (DEBUG === true) {
  appleY = 200;
  appleX = 400;
  GAMETIMEINTERVAL = 4000;
}

document.onkeydown = function(e) {
  if (e.keyCode == "37" && direction != "RIGHT") {
    direction = "LEFT";
  }
  if (e.keyCode == "38" && direction != "DOWN") {
    direction = "UP";
  }
  if (e.keyCode == "39" && direction != "LEFT") {
    direction = "RIGHT";
  }
  if (e.keyCode == "40" && direction != "UP") {
    direction = "DOWN";
  }
};

function moveSnake() {
  var i;
  for (i = snake.length - 1; i > 0; i--) {
    snake[i].y = snake[i - 1].y;
    snake[i].x = snake[i - 1].x;
  }

  if (direction === "LEFT") snake[0].x -= 20;
  if (direction === "UP") snake[0].y -= 20;
  if (direction === "RIGHT") snake[0].x += 20;
  if (direction === "DOWN") snake[0].y += 20;

  if (snake[0].x >= canvas.width) {
    
    snake[0].x = 780;
    window.location.reload();
    alert("Game over. Try again!");
    checkIfContact = false;
  }
  if (snake[0].x <= -20) {
    
    snake[0].x = 0;
    window.location.reload();
    alert("Game over. Try again!");
    checkIfContact = false;
  }
  if (snake[0].y <= -20) {
    
    snake[0].y = 0;
    window.location.reload();
    alert("Game over. Try again!");
    checkIfContact = false;
  }
  if (snake[0].y >= canvas.height) {
    
    snake[0].y = 580;
    window.location.reload();
    alert("Game over. Try again!");
    checkIfContact = false;
  }
  if (checkIfContact == false){
    avoidCheckingCollision();
  }
}

function moveApple() {
  appleX = Math.floor(Math.random() * 40) * 20;
  appleY = Math.floor(Math.random() * 30) * 20;

  for (i = 0; i < snake.length; i++) {
    if (appleX == snake[i].x && appleY == snake[i].y) {
      moveApple();
    }
  }
}

function checkCollision(e) {
  for (i = 0; i < snake.length; i++) {
    if (snake[0].x == appleX && snake[0].y == appleY) {
      console.log("collision detected");
      moveApple();
      increaseSnakeLength();
      score++;
    }
   
  }
}

if (checkIfContact == false){
  function avoidCheckingCollision(){}
    }

function checkSnakeContact() {
  
  for (i = snake.length - 1; i > 0; i--) {
    if (
      snake.length >= 5 &&
      snake[0].x == snake[i].x &&
      snake[0].y == snake[i].y
    ) {
      console.log("snake collided with itself");
      window.location.reload();
      alert("Game over. Try again!");
    }
  }
}

function increaseSnakeLength() {
  for (i = 0; i < initialTailLength; i++) {
    snake.push({ x: snake[i].x, y: snake[i].y });
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
  canvasContext.fillRect(appleX, appleY, 20, 20);
}

function drawSnake() {
  canvasContext.fillStyle = "green";
  var i;
  for (i = 0; i < snake.length; i++) {
    canvasContext.fillRect(snake[i].x, snake[i].y, 20, 20);
  }
}
