import Character from "../js/character.js";
// const foxSpeed = 10;
export class Fox extends Character {
  constructor(x, y, foxSpeed) {
    super(x, y, 0.05, [
      "./images/fox/fox0.png",
      "./images/fox/fox1.png",
      "./images/fox/fox2.png",
      "./images/fox/fox4.png",
      "./images/fox/fox5.png",
      "./images/fox/fox6.png",
      "./images/fox/fox7.png",
      "./images/fox/fox8.png",
      "./images/fox/fox9.png",
    ]);
    //I wnat to change the difficulty of the game by changing foxspeed
    this.foxSpeed = foxSpeed; // Set the fox's speed
    // Initialize the fox's movement direction, this slution is from chatGPT
    this.direction = p5.Vector.random2D(); // Set a random direction
  }

  draw() {
    push();
    translate(this.x, this.y);
    //(this.direction.x > 0) means if the fox is moving to the right
    if (this.direction.x > 0) {
      scale(-1, 1); // Flip the image horizontally
    }

    const w = this.img.width * this.size;
    const h = this.img.height * this.size;
    image(this.img, -w / 2, 0, w, h);

    pop();
  }
  foxMove() {
    // Check if the fox has hit a wall
    if (
      this.x < (this.img.width * this.size) / 2 ||
      this.x > width - (this.img.width * this.size) / 2 ||
      this.y < 0 ||
      this.y > height - this.img.height * this.size
    ) {
      // Choose a new random direction
      // chatGPT told me P5.Vector.random2D can make a random direction, this is awsome!
      this.direction = p5.Vector.random2D();
    }

    // Move in the current direction
    this.x += this.foxSpeed * this.direction.x;
    this.y += this.foxSpeed * this.direction.y;
    this.nextImage();
  }
}
