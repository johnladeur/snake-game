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

document.onkeydown = function(e) {
    if (e.keyCode == '37'){
        snake = snake - 10;
        console.log('the left key was pressed')
    }
    if (e.keyCode == '38'){
        snake = snake ;
        console.log('the up arrow was pressed')
    }
    if (e.keyCode == '39'){
        snake = snake + 10;
        console.log('the right key was pressed')

    }
    if (e.keyCode == '40'){
        console.log('the down key was pressed')
    }
    

};

function moveSnake(){
   
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

