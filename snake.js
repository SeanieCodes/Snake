let snake;
let food;
let shits = [];
let direction;
let interval;
let gameRunning;
let score = 0;
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const levelScreen = document.getElementById('levelScreen');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const gameContainer = document.getElementById('gameContainer');
const playAgainButton = document.getElementById('playAgainButton');
const gameBoard = document.getElementById('gameBoard');
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const scoreElement = document.getElementById('score');
const gridSize = 20;

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    levelScreen.style.display = 'flex';
});

button1.addEventListener('click', () => {
    levelScreen.style.display = 'none';
    gameContainer.style.display = 'flex';
    playAgainButton.style.display = 'block';
    startGame1();
});

button2.addEventListener('click', () => {
    levelScreen.style.display = 'none';
    gameContainer.style.display = 'flex';
    playAgainButton.style.display = 'block';
    startGame2();
});

playAgainButton.addEventListener('click', () => {
    playAgainButton.style.display = 'none';
    gameContainer.style.display = 'none';
    startScreen.style.display = 'flex';
    message1.textContent = '';
    message2.textContent = '';
    scoreElement.textContent = '';
    score = 0;
    shits = [];
    snake = [];
    food = null;
    direction = { x: 1, y: 0 };
    clearInterval(interval);
    gameRunning = false;
})

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            if (direction.y === 0) {
                direction.x = 0;
                direction.y = -1;
                };
            break;
        case 'ArrowDown':
            if (direction.y === 0) {
                direction.x = 0;
                direction.y = 1;
                };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) {
                direction.x = -1;
                direction.y = 0;
                };
            break;
        case 'ArrowRight':
            if (direction.x === 0) {
                direction.x = 1;
                direction.y = 0;
                };
            break;
    };
});

function gameWin1() {
    message1.textContent = 'YAY!';
    gameRunning = false;
    clearInterval(interval);
};

function gameWin2() {
    message2.textContent = 'YAY!';
    gameRunning = false;
    clearInterval(interval);
};

function gameOver1() {
    message1.textContent = 'Play Again!';
    gameRunning = false;
    clearInterval(interval);
};

function gameOver2() {
    message2.textContent = 'SHIT!!!!!!!';
    gameRunning = false;
    clearInterval(interval);
};

function genFood() {
    food = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
    };
    while (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
        food = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
    };
};

function startGame1() {
    if (interval) {
        clearInterval(interval);  
      };
    gameBoard.innerHTML = '';
    gameRunning = true;
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    interval = setInterval(updateGame1, 100);
    genFood();
};

function updateGame1() {
    if (!gameRunning) return;
    gameBoard.innerHTML = '';
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridRowStart = food.y + 1;
    foodElement.style.gridColumnStart = food.x + 1;
    gameBoard.appendChild(foodElement);
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart = segment.y + 1;
        snakeElement.style.gridColumnStart = segment.x + 1;
        gameBoard.appendChild(snakeElement);
    });
    const snakeHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };
    if (snakeHead.x < 0 || snakeHead.x >= gridSize || snakeHead.y < 0 || snakeHead.y >= gridSize || snake.some(segment => segment.x === snakeHead.x && segment.y === snakeHead.y)) {
        gameOver1();
        return;
    };
    snake.unshift(snakeHead);
    if (snakeHead.x === food.x && snakeHead.y === food.y) {
        genFood();
        score++;
        scoreElement.textContent = score;
    } else {
        snake.pop();
    };
    if (score === 10) {
        gameWin1();
        return;
    };
};

function genShit() {
    let shit;
    do {
        shit = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
    } while (snake.some(segment => segment.x === shit.x && segment.y === shit.y) || 
             shits.some(shitty => shitty.x === shit.x && shitty.y === shit.y) || 
             (food.x === shit.x && food.y === shit.y));
    shits.push(shit);
};

function startGame2() {
    if (interval) {
        clearInterval(interval);  
      };
    gameBoard.innerHTML = '';
    gameRunning = true;
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    interval = setInterval(updateGame2, 100);
    genFood();
    genShit();
};

function updateGame2() {
    if (!gameRunning) return;
    gameBoard.innerHTML = '';
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridRowStart = food.y + 1;
    foodElement.style.gridColumnStart = food.x + 1;
    gameBoard.appendChild(foodElement);
    shits.forEach(shit => {
        const shitElement = document.createElement('div');
        shitElement.classList.add('shit');
        shitElement.textContent = '💩';
        shitElement.style.gridRowStart = shit.y + 1;
        shitElement.style.gridColumnStart = shit.x + 1;
        gameBoard.appendChild(shitElement);
    });
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart = segment.y + 1;
        snakeElement.style.gridColumnStart = segment.x + 1;
        gameBoard.appendChild(snakeElement);
    });
    const snakeHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };
    if (
        snakeHead.x < 0 || snakeHead.x >= gridSize || 
        snakeHead.y < 0 || snakeHead.y >= gridSize || 
        snake.some(segment => segment.x === snakeHead.x && segment.y === snakeHead.y) || 
        shits.some(shitty => shitty.x === snakeHead.x && shitty.y === snakeHead.y)
    ) {
        gameOver2();
        return;
    }
    snake.unshift(snakeHead);
    if (snakeHead.x === food.x && snakeHead.y === food.y) {
        genFood();
        genShit();
        score++;
        scoreElement.textContent = score;
    } else {
        snake.pop();
    };
    if (score === 20) {
        gameWin2();
        return;
    };
};