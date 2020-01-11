var canvas;
var canvasContext;
var snake = 50;

window.onload = function(){
    this.console.log("Hello World!")
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function(){
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond)
    
}

function moveEverything(){
    snake = snake + 5;
    if (snake > 800) {
    
    }

}

function drawEverything(){
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(snake,210, 80, 15);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(250 ,210, 15, 15);

}