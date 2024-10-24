// view.js
class GameView {
    constructor(gameCanvas) {
      this.canvas = gameCanvas;
      this.context = this.canvas.getContext('2d');  // Get the canvas' 2D drawing context
    }
  
    // Render the snake on the canvas
    renderSnake(snake) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas for re-drawing
      snake.forEach(segment => {
        this.context.fillStyle = 'green'; // Set the color of the snake to green
        this.context.fillRect(segment.x * 20, segment.y * 20, 20, 20);  // Draw each segment as a 20x20 pixel square
      });
    }
  
    // Render the food on the canvas
    renderFood(food) {
      this.context.fillStyle = 'red';  // Set the color of the food to red
      this.context.fillRect(food.x * 20, food.y * 20, 20, 20);  // Draw the food as a 20x20 pixel square
    }
  
    // Display a message (like "You Win" or "Try Again")
    showMessage(message) {
      const messageDiv = document.getElementById('gameMessage');
      messageDiv.innerText = message;  // Set the content of the message div
      messageDiv.style.display = 'block';  // Ensure the message is visible
    }
  }
  