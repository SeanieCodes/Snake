// model.js
class GameModel {
    constructor() {
      this.snake = [{ x: 10, y: 10 }];  // Snake starts as a single pixel at this position (grid coordinates)
      this.food = this.generateFood();  // Generates a food pixel at a random location on the screen
      this.direction = { x: 1, y: 0 };  // Snake starts moving to the right
    }
  
    // Generate food at a random location on the grid
    generateFood() {
      return {
        x: Math.floor(Math.random() * 20),  // Random x position (0-19) assuming a 20x20 grid
        y: Math.floor(Math.random() * 20)   // Random y position (0-19)
      };
    }
  
    // Update the snake's position based on the current direction
    updateSnake() {
      const newHead = {
        x: this.snake[0].x + this.direction.x,  // Calculate new head position in the x direction
        y: this.snake[0].y + this.direction.y   // Calculate new head position in the y direction
      };
      
      this.snake.unshift(newHead);  // Add the new head to the front of the snake array
      this.snake.pop();             // Remove the tail of the snake to maintain the same length
    }
  }
  