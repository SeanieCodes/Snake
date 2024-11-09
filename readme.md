Snake

![Game Screenshot](./SnakeGameImage.png)

In this grid-based snake game, the player navigates a snake to consume food and avoid obstacles as it grows. The game begins at Level 1, where the snake’s objective is to collect food, growing longer with each bite. The player wins Level 1 by filling the entire grid with the snake’s body without colliding with the boundaries or the snake itself. With each food item eaten, a new obstacle, or “shit,” appears on the grid, adding difficulty by creating additional hazards the player must navigate around.

At Level 2, the challenge intensifies. The obstacles remain from Level 1, but the game introduces moving obstacles that cross the screen at regular intervals. The player must time the snake’s movements carefully to avoid these moving dangers while continuing to collect food and grow. Victory in Level 2 requires not only avoiding the boundaries and static obstacles but also these unpredictable moving elements.

Throughout both levels, the game state updates each frame, displaying the snake’s growth, food placement, and obstacle movement. The game concludes with a “You Win” screen if the player completes the level’s objective or a “Try Again” prompt upon collision, accompanied by a score tracker that tallies each food item collected.

Instructions:

Starting the Game:

Click the Start button to begin. The game starts on Level 1.

Moving the Snake:

Use the arrow keys (Up, Down, Left, Right) to control the snake’s movement on the grid.
Each arrow key press will move the snake one step in the chosen direction.
Objective:

Level 1: Grow the snake to fill the entire grid without hitting walls, obstacles, or itself.
Level 2: Navigate the snake to eat food while avoiding static and moving obstacles that increase in frequency.
Food & Growth:

Eating food increases the snake’s length by one unit.
Each food item collected adds one point to your score.
On Level 1, every food eaten spawns a new stationary obstacle on the grid.
On Level 2, stationary obstacles remain, and moving obstacles are introduced, crossing the screen at intervals.

Winning and Losing:

Win each level by achieving the objectives without hitting the edges, the snake’s body, or obstacles.
Colliding with any boundary, obstacle, or the snake’s own body triggers a “Game Over” screen with a “Play Again” button.
Successfully completing Level 1 moves you to Level 2.

Score Tracker:

Your current score is displayed on the screen, showing the number of food items collected.

Get 5 points to win on Level 1 and 20 on Level 2.

Restarting the Game:

After a "Play Again" message, click Play Again to restart the game from the beginning.

User Stories

Start the game with a button called "Start"
Levels 1 and 2 can be selected on the Level Selection Screen
Snake (a pixel) appears on the screen and starts moving straight in a random direction
A pixel (food) appears in a random location on the screen
The snake can be controlled by the player's inputs (4: up, down, left, right)
5 possible inputs including click
When the snake eats the food (i.e. comes into contact with the pixel), the snake gets longer by 1 pixel and 1 point is added
When the snake collides with itself or the sides of the screen, a message saying "Play Again" pops us
When the snake collides with the shit on Level 2, the game is over
If the player gets to 5 points on Level 1 and 20 points on Level 2 without colliding with itself or the sides or the shit, the Win Condition is attained
There is a "Play Again" button for both of the above scenarios, which returns the player to the "Start" screen

Wireframe

Start screen with game title and Start button
Level Screen with buttons
Game board set upon a colored background with snake and food and Level 2 shit pixels inside with message and Play Again button after game ends

I chose this game because it has moving parts and is therefore highly dynamic, and therefore fun to code.

Win Condition:

5 points for Level 1 and 20 points for Level 2

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

Technologies Used:

- HTML
- CSS
- JavaScript
- Github

In the future, I plan to make the game more exciting through:

- implementing new snake speeds
- adding in the option to make the walls pass-through-able
- putting in consumables for the snake that give it invincibility frames