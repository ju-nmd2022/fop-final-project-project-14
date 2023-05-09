import Character from "./character.js";
let henSpeed = 5;
export class Hen extends Character {
  constructor(x, y) {
    super(x, y, 0.05, [
      "/images/hen/hen0.png",
      "/images/hen/hen1.png",
      "/images/hen/hen2.png",
    ]);

    this.eatingHen = loadImage("/images/hen/hen-eat-worm.png", (img) => {
      img.resize(img.width * 0.05, img.height * 0.05);
    });
    this.isEating = false;
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + henSpeed;
      this.nextImage();
    } else if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - henSpeed;
      push();
      scale(-1, 1);
      this.nextImage();
      pop();
    } else if (keyIsDown(UP_ARROW)) {
      this.y = this.y - henSpeed;
      this.nextImage();
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y = this.y + henSpeed;
      this.nextImage();
    }
  }

  eatWorm() {
    this.isEating = true;
    this.image = this.eatingHen;
    // Change the image back to the original hen image after a delay of 0.2 second, chatGPT gave me the solution
    setTimeout(() => {
      this.isEating = false;
      this.imageIndex = 0;
      this.image = this.images[0];
    }, 200);
  }
}

//to flip the hen when you move left/backwards
//https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb
