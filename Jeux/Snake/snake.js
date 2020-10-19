let tailleDeLaCase = 20;
let gameSpeed = 10;
let width = 40;
let height = 40;
let snake = [{x:2,y:0},{x:1,y:0},{x:0,y:0}];
let v = {x:1,y:0};
let food;

let canvas = document.getElementById('game');
let ctx = canvas.getContext("2d");
canvas.height = tailleDeLaCase * height;
canvas.width = tailleDeLaCase * width;

document.addEventListener("keydown", function(event){
    switch (event.key) {
        case "ArrowUp":
            if (v.y == 0) {
                v = {x:0, y:-1};
            }
        break;
        case "ArrowLeft":
            if (v.x == 0) {
                v = {x:-1, y:0};
            }
        break;
        case "ArrowRight":
            if (v.x == 0) {
                v = {x:1, y:0};
            }   
        break;
        case "ArrowDown":
            if (v.y == 0) {
                v = {x:0, y:1};
            }
        break;
    }
});

function addPart(){
    let head = {x:(snake[0].x + v.x) % width, y:(snake[0].y+ v.y) % height};
    head.x = (head.x < 0) ? width : head.x;
    head.y = (head.y < 0) ? height : head.y;
    snake.unshift(head);
}

function move(){
    snake.pop();
    addPart();  
}

function randomFood(){
    food = {x:Math.round(Math.random()*(width-1)), y:Math.round(Math.random()*(height-1))};
}

function drawSnake(){
    ctx.fillStyle = "#00FF00";
    for (let p of snake) {
       ctx.fillRect(p.x * tailleDeLaCase, p.y * tailleDeLaCase, tailleDeLaCase-1,tailleDeLaCase-1)
        
    }
}

function drawFood(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(food.x * tailleDeLaCase, food.y * tailleDeLaCase, tailleDeLaCase-1,tailleDeLaCase-1)
}

function drawEnvironnement () {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,tailleDeLaCase * width, tailleDeLaCase * height);
}



function checkCollision(){
    if (food.x === snake[0].x && food.y === snake[0].y) {
        addPart();
        randomFood();
    }

    for (let n = 0; n < snake.length - 1; n++) {
        for (let m = n + 1; m < snake.length; m++) {
            if (snake[m].x == snake[n].x && snake[m].y === snake[n].y) {
                snake = [{x:2,y:0},{x:1,y:0},{x:0,y:0}]
            }
            
        }
        
    }
}

randomFood();

function render(){
    move();
    drawEnvironnement();
    drawFood();
    checkCollision();
    drawSnake();
}

window.setInterval(render(),1000/gameSpeed);





