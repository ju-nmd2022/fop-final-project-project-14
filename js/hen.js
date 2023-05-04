import Character from "./character.js";
let henSpeed = 5;
export class Hen extends Character {
  constructor(x, y) {
    super(x, y, 0.05, [
      "/images/hen/hen0.png",
      "/images/hen/hen1.png",
      "/images/hen/hen2.png",
    ]);
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + henSpeed;
      this.nextImage();
    } else if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - henSpeed;
=======
//       push();
//       scale(-1, 1);
// >>>>>>> Stashed changes
      this.nextImage();
      // pop();
    } else if (keyIsDown(UP_ARROW)) {
      this.y = this.y - henSpeed;
      this.nextImage();
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y = this.y + henSpeed;
      this.nextImage();
    }
  }
}

//to flip the hen when you move left/backwards
//https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb
