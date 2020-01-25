const DEBUG = false;

var canvas;
var canvasContext;
var snake = [];
snake[0] = { x: 100, y: 200 };
var initialTailLength = 3;

var i;
for (i = 0; i < initialTailLength; i++) {
  snake.push({ x: 100, y: 200 });
}
var appleX;
var appleY;
let d;

window.onload = function() {
  var framesPerSecond = 20;
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  moveApple();
  

  setInterval(function() {
    checkCollision();
    moveSnake();
    drawCanvas();
    drawSnake();
    drawApple();
    
  }, gameTimeInterval / framesPerSecond);
};

var gameTimeInterval = 1000;

if (DEBUG === true) {
  appleY = 200;
  appleX = 400;
  gameTimeInterval = 4000;
}

document.onkeydown = function(e) {
  if (e.keyCode == "37" && d != "RIGHT") {
    d = "LEFT";
  }
  if (e.keyCode == "38" && d != "DOWN") {
    d = "UP";
  }
  if (e.keyCode == "39" && d != "LEFT") {
    d = "RIGHT";
  }
  if (e.keyCode == "40" && d != "UP") {
    d = "DOWN";
  }
};

function moveSnake() {
  var i;
  for (i = snake.length - 1; i > 0; i--) {
    snake[i].y = snake[i - 1].y;
    snake[i].x = snake[i - 1].x;
  }

  if (d === "LEFT") snake[0].x -= 20;
  if (d === "UP") snake[0].y -= 20;
  if (d === "RIGHT") snake[0].x += 20;
  if (d === "DOWN") snake[0].y += 20;

  if (snake[0].x >= canvas.width - 20) {
    snake[0].x = 780;
  }
  if (snake[0].x <= 0) {
    snake[0].x = 0;
  }
  if (snake[0].y <= 0) {
    snake[0].y = 0;
  }
  if (snake[0].y >= canvas.height -20) {
    snake[0].y = 580;
  }
}

function moveApple(){
  
  appleX = Math.floor(Math.random() * 40) * 20;
  appleY = Math.floor(Math.random() * 30) * 20; 
}
  
function checkCollision(e){
  for (i = 0; i < snake.length; i++){
  if (snake[0].x == appleX && snake[0].y == appleY){
    console.log('collision detected')
    moveApple();
  }
  }
}

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height, "black");
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
