import Character from "./character.js";
const foxSpeed = 3;
export class Fox extends Character {
  constructor(x, y) {
    super(x, y, 0.05, [
      "/images/fox/fox0.png",
      "/images/fox/fox1.png",
      "/images/fox/fox2.png",
      "/images/fox/fox4.png",
      "/images/fox/fox5.png",
      "/images/fox/fox6.png",
      "/images/fox/fox7.png",
      "/images/fox/fox8.png",
      "/images/fox/fox9.png",
    ]);

    // Initialize the fox's movement direction
    this.direction = p5.Vector.random2D(); // Set a random direction
  }
  foxMove() {
    // Check if the fox has hit a wall
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      // Choose a new random direction
      // chatGPT told me P5.Vector.random2D can make a random direction, this is awsome!
      this.direction = p5.Vector.random2D();
    }

    // Move in the current direction
    this.x += foxSpeed * this.direction.x;
    this.y += foxSpeed * this.direction.y;
    this.nextImage();
  }
  // foxMove() {
  //   this.x += this.direction.x * foxSpeed;
  //   this.y += this.direction.y * foxSpeed;

  //   this.x = constrain(this.x, 0, width - this.img.width * this.scale);
  //   this.y = constrain(this.y, 0, height - this.img.height * this.scale);
  //   this.nextImage();
  // }

  // changeDirection() {
  //   // If the fox hits the left or right border of the canvas, change the horizontal direction
  //   if (this.x <= 0 || this.x >= width - this.img.width * this.scale) {
  //     this.direction.x *= -1;
  //   }

  //   // If the fox hits the top or bottom border of the canvas, change the vertical direction
  //   if (
  //     this.y <= 0 ||
  //     this.y >= height - height - this.img.height * this.scale
  //   ) {
  //     this.direction.y *= -1;
  //   }
  // }
}
