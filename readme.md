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
Level Screen with buttons
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

Win Condition:

5 points for Level 1 and 10 points for Level 2

Lose Condition:

Collision with the walls or the body of the snake for both levels, collision with the shit for Level 2

Reflections:

good practice for many different JS methods
learned new methods like the do-while loop to make my code more clean and concise
learned how to make code more concise

Difficulties:

had to figure out how to keep the shit on the screen
therefore had to learn how to use JS to prevent code from being affected by HTML-affecting code
spent lots of time figuring out I had to clear the interval
spent lots of time learning function syntax of new functions to apply to the code
had to modify the do while loops quite a bit to make them as water-tight as possible
had to learn the difference between calculation/game logic and actually putting things on the screen
originally had 3 levels and tried different speeds but that was too complicated