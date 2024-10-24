// controller.js
class GameController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.isGameOver = false;
  
      // Set up user input (keyboard controls)
      document.addEventListener('keydown', this.handleKeyPress.bind(this));
  
      // Start the game loop
      this.startGame();
    }
  
    // Start the game loop
    startGame() {
      this.gameInterval = setInterval(() => {
        if (!this.isGameOver) {
          this.model.updateSnake();  // Update the snake's position
          this.checkCollisions();    // Check for collisions with walls or self
          this.view.renderSnake(this.model.snake);  // Render the updated snake
          this.view.renderFood(this.model.food);    // Render the food
        }
      }, 100);  // Repeat every 100ms
    }
  
    // Handle keyboard input
    handleKeyPress(event) {
      switch (event.key) {
        case 'ArrowUp':
          this.model.direction = { x: 0, y: -1 };  // Move up
          break;
        case 'ArrowDown':
          this.model.direction = { x: 0, y: 1 };   // Move down
          break;
        case 'ArrowLeft':
          this.model.direction = { x: -1, y: 0 };  // Move left
          break;
        case 'ArrowRight':
          this.model.direction = { x: 1, y: 0 };   // Move right
          break;
      }
    }
  
    // Check for collisions (with walls or self)
    checkCollisions() {
      const snakeHead = this.model.snake[0];
      
      // Check if the snake hits the wall (canvas edges)
      if (snakeHead.x < 0 || snakeHead.x >= 20 || snakeHead.y < 0 || snakeHead.y >= 20) {
        this.isGameOver = true;
        this.view.showMessage('Try Again');
        clearInterval(this.gameInterval);  // Stop the game loop
      }
  
      // Check if the snake collides with itself
      for (let i = 1; i < this.model.snake.length; i++) {
        if (snakeHead.x === this.model.snake[i].x && snakeHead.y === this.model.snake[i].y) {
          this.isGameOver = true;
          this.view.showMessage('Try Again');
          clearInterval(this.gameInterval);  // Stop the game loop
        }
      }
    }
  }
  