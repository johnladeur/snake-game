var canvas;
var canvasContext;
var snakeX = 60;
var snakeY = 200;
var appleX = 300;
var appleY = 280;
let d;

window.onload = function() {
  this.console.log("Hello World!");
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  var framesPerSecond = 30;
  setInterval(function() {
    moveSnake();
    drawCanvas();
    drawSnake();
    drawApple();
  }, 1000 / framesPerSecond);
};

document.onkeydown = function(e) {
  if (e.keyCode == "37" && d != "RIGHT") {
    snakeX -= 20;
    d = "LEFT";
    console.log("the left key was pressed");
  }
  if (e.keyCode == "38" && d != "DOWN") {
    snakeY -= 20;
    d = "UP";

    console.log("the up arrow was pressed");
  }
  if (e.keyCode == "39" && d != "LEFT") {
    snakeX += 20;
    d = "RIGHT"
    console.log("the right key was pressed");
  }
  if (e.keyCode == "40" && d != "UP") {
    snakeY += 20;
    d = "DOWN"
    console.log("the down key was pressed");
  }
};

function moveSnake() {

  if (snakeX >= 720) {
    snakeX = 720;
  }
  if (snakeX <= 0) {
    snakeX = 0;
  }
  if (snakeY <= 0) {
    snakeY = 0;
  }
  if (snakeY >= 580) {
    snakeY = 580;
  }
}

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height, "black");
}

function drawSnake(){
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, snakeY, 20, 20);
}
function drawApple(){
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(appleX, appleY, 20, 20);
}

