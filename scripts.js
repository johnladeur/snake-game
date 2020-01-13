var canvas;
var canvasContext;
var snake = 50;
var apple = 300;

window.onload = function(){
    this.console.log("Hello World!")
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function(){
        moveSnake();
        drawEverything();
    }, 1000/framesPerSecond)
    
}

function moveSnake(){
    snake = snake + 5;
    if (snake >= 720) {
        snake = 720;
    }
    if (snake <= 0){
        snake = 0;
    }

}

function drawEverything(){
    //next line blanks out screen with black
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height, 'black');
    //this is the 'snake' figure
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(snake,210, 80, 15);
    //this is the 'apple' figure
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(apple ,210, 15, 15);
}