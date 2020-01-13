var canvas;
var canvasContext;
var snakeX = 50;
var snakeY = 210;
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
        snakeX = snakeX - 10;
        console.log('the left key was pressed')
    }
    if (e.keyCode == '38'){
       snakeY = snakeY - 10;
        
        console.log('the up arrow was pressed')
    }
    if (e.keyCode == '39'){
        snakeX = snakeX + 10;
        console.log('the right key was pressed')

    }
    if (e.keyCode == '40'){
        snakeY = snakeY + 10;
        console.log('the down key was pressed')
    }
    

};

function moveSnake(){
    
    if (snakeX >= 720) {
        snakeX = 720;
    }
    if (snakeX <= 0){
        snakeX = 0;
    }
    if (snakeY <= 0){
        snakeY = 0;
    }
    if (snakeY >= 585){
        snakeY = 585;
    }

}

function drawEverything(){
    //next line blanks out screen with black
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height, 'black');
    //this is the 'snake' figure
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(snakeX,snakeY, 80, 15);
    //this is the 'apple' figure
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(apple ,210, 15, 15);
}

