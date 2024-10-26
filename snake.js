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
let direction;
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const playAgainButton = document.getElementById('playAgainButton');
const canvas = document.getElementById('gameCanvas');
const message = document.getElementById('message');
const gameContainer = document.getElementById('gameContainer');

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameContainer.style.display = 'flex';
    playAgainButton.style.display = 'block';
})

playAgainButton.addEventListener('click', () => {
    playAgainButton.style.display = 'none';
    gameContainer.style.display = 'none';
    startScreen.style.display = 'flex';
    message.textContent = '';
})

