/*

User Stories

Start the game with a button called "Start"
Snake (a string of pixels) appears on the screen and starts moving straight in a random direction
A pixel (food) appears in a random location on the screen
The snake can be controlled by the player's inputs (4: up, down, left, right)
5 possible inputs including click
When the snake eats the food (i.e. comes into contact with the pixel), the snake gets longer by 1 pixel
When the snake collides with itself or the sides of the screen, a message saying "Play Again" pops us
If the snake manages to fill the screen without colliding with itself or the sides, the message "You Win" pops up
There is a "Play Again" button for both of the above scenarios, which returns the player to the "Start" screen


Wireframe

Start screen with game title and Start button
Game board set upon a colored background with snake and food inside with message and Try Again button after game ends


Pseudocode

Game starts up with game title and Start button
Player clicks Start button and game starts
Snake (3 pixels) appears in the middle of the game board moving in a random direction
Snake moves in only one direction unless a button is pressed by the player
If the snake collides with the sides of the board or itself, the game is over
Food (1 pixel) appears randomly on the board where the snake isn't positioned
Every time the snake collides with the food, its length increases by 1 pixel
A new food appears whenever the snake collides with the food
When the snake collides with itself or the sides of the screen, a message saying "Play Again" pops us
If the snake manages to fill the screen without colliding with itself or the sides, the message "You Win" pops up
Player can click the Play Again button to return to the Start screen after the game is over



*/

let snake;
let food;
let pixels = [];
let direction;
let interval;
let gameRunning;
let score = 0;
const startScreen = document.getElementById('startScreen');
const levelScreen = document.getElementById('levelScreen');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const startButton = document.getElementById('startButton');
const playAgainButton = document.getElementById('playAgainButton');
const gameBoard = document.getElementById('gameBoard');
const message = document.getElementById('message');
const scoreElement = document.getElementById('score');
const gameContainer = document.getElementById('gameContainer');
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
    message.textContent = '';
    scoreElement.textContent = '';
    score = 0;
    pixels = [];
    snake = [];
    food = null;
    direction = { x: 1, y: 0 };
    clearInterval(interval);
    gameRunning = false;
})

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
    const newHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };
    if (newHead.x < 0 || newHead.x >= gridSize || newHead.y < 0 || newHead.y >= gridSize || snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        gameOver();
        return;
    };

    snake.unshift(newHead);
    if (newHead.x === food.x && newHead.y === food.y) {
        genFood();
        score++;
        scoreElement.textContent = score;
    } else {
        snake.pop();
    };
    if (score === 10) {
        gameWin();
        return;
    };
};

function genPixel() {
    let newPixel;
    do {
        newPixel = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
    } while (snake.some(segment => segment.x === newPixel.x && segment.y === newPixel.y) || 
             pixels.some(p => p.x === newPixel.x && p.y === newPixel.y) || 
             (food.x === newPixel.x && food.y === newPixel.y));
    pixels.push(newPixel);
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
    genPixel();
};

function updateGame2() {
    if (!gameRunning) return;
    gameBoard.innerHTML = '';
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridRowStart = food.y + 1;
    foodElement.style.gridColumnStart = food.x + 1;
    gameBoard.appendChild(foodElement);
    pixels.forEach(pixel => {
    const pixelElement = document.createElement('div');
    pixelElement.classList.add('pixel');
    pixelElement.style.gridRowStart = pixel.y + 1;
    pixelElement.style.gridColumnStart = pixel.x + 1;
    gameBoard.appendChild(pixelElement);
    });
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart = segment.y + 1;
        snakeElement.style.gridColumnStart = segment.x + 1;
        gameBoard.appendChild(snakeElement);
    });
    const newHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };
    if (
        newHead.x < 0 || newHead.x >= gridSize || 
        newHead.y < 0 || newHead.y >= gridSize || 
        snake.some(segment => segment.x === newHead.x && segment.y === newHead.y) || 
        pixels.some(p => p.x === newHead.x && p.y === newHead.y)  // Check pixel collision
    ) {
        gameOver();
        return;
    }

    snake.unshift(newHead);
    if (newHead.x === food.x && newHead.y === food.y) {
        genFood();
        genPixel();
        score++;
        scoreElement.textContent = score;
    } else {
        snake.pop();
    };
    if (score === 20) {
        gameWin();
        return;
    };
};

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

function gameWin() {
    message.textContent = 'YAY!';
    gameRunning = false;
    clearInterval(interval);
};

function gameOver() {
    message.textContent = 'Play Again!';
    gameRunning = false;
    clearInterval(interval);
};
