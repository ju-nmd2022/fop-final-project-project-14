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
  }

  foxMove() {
    // move randomly within canvas bounds
    // if (keyIsDown(RIGHT_ARROW)) {
    //   this.x = this.x + foxSpeed;
    //   this.nextImage();
    // } else if (keyIsDown(LEFT_ARROW)) {
    //   this.x = this.x - foxSpeed;
    //   this.nextImage();
    // } else if (keyIsDown(UP_ARROW)) {
    //   this.y = this.y - foxSpeed;
    //   this.nextImage();
    // } else if (keyIsDown(DOWN_ARROW)) {
    //   this.y = this.y + foxSpeed;
    //   this.nextImage();
    // }

    // Generate random velocities
    // const dx = random(-1, 1) * foxSpeed;
    // const dy = random(-1, 1) * ;

    // Update position within canvas bounds
    this.x += foxSpeed;
    this.y += foxSpeed;
    if (this.x > width || this.y > this.height) {
      this.x -= foxSpeed;
      this.y -= foxSpeed;
    }

    this.x = constrain(this.x, 0, width - this.img.width * this.scale);
    this.y = constrain(this.y, 0, height - this.img.height * this.scale);

    // Update image
    this.nextImage();
  }
}
