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

    this.layEggHen = loadImage("/images/hen/hen-lay-egg.png", (img) => {
      img.resize(img.width * 0.05, img.height * 0.05);
    });
    this.isLayingEgg = false;

    // Initialize numWormsEaten to 0
    this.numWormsEaten = 0;
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

    // if (this.isLayingEgg) {
    //   this.image = this.layEggHen;
    // }
  }

  eatWorm() {
    this.isEating = true;
    this.image = this.eatingHen;
    this.numWormsEaten++;

    // Check if the hen has eaten five worms and lay an egg if necessary
    if (this.numWormsEaten % 5 === 0) {
      this.image = this.layEggHen;
      // Change the image back to the original hen image after a delay of 1 second
      // setTimeout(() => {
      //   this.isLayingEgg = false;
      //   this.imageIndex = 0;
      //   this.image = this.images[0];
      //   this.isEating = false;
      // }, 1000);
    } else {
      // Change the image back to the original hen image after a delay of 0.2 second, chatGPT gave me the solution
      setTimeout(() => {
        this.isEating = false;
        this.imageIndex = 0;
        this.image = this.images[0];
      }, 200);
    }
  }
}

//to flip the hen when you move left/backwards
//https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb
