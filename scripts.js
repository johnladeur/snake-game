var canvas;
var canvasContext;
var snakeX = 60;
var snakeY = 200;
var appleX = 300;
var appleY = 280;

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
  if (e.keyCode == "37") {
    snakeX = snakeX - 20;
    console.log("the left key was pressed");
  }
  if (e.keyCode == "38") {
    snakeY = snakeY - 20;

    console.log("the up arrow was pressed");
  }
  if (e.keyCode == "39") {
    snakeX = snakeX + 20;
    console.log("the right key was pressed");
  }
  if (e.keyCode == "40") {
    snakeY = snakeY + 20;
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
  //next line blanks out screen with black
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height, "black");
}

function drawSnake(){
  //this is the 'snake' figure
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, snakeY, 80, 20);
}
function drawApple(){
  //this is the 'apple' figure
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(appleX, appleY, 20, 20);
}

