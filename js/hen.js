import Character from "../js/character.js";
import { Chick } from "../js/chick.js";

let henSpeed = 5;
let chickSpacing = 30;

export class Hen extends Character {
  constructor(x, y) {
    super(x, y, 0.05, [
      "./images/hen/hen0.png",
      "./images/hen/hen1.png",
      "./images/hen/hen2.png",
    ]);
    //chatGPT provide me the callback function solution of changing image when the hen is eating, and changes size of the image
    //resize is a build in function in P5.js
    this.eatingHen = loadImage("./images/hen/hen-eat-worm.png", (img) => {
      img.resize(img.width * 0.05, img.height * 0.05);
    });
    // Initialize variables values, they are instance variables of the class.
    this.isEating = false;
    this.direction = 1;
    this.numWormsEaten = 0;
    this.chicks = [];
  }

  move() {
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.x = this.x + henSpeed;
      this.nextImage();
      this.direction = 1;
    } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.x = this.x - henSpeed;
      this.direction = -1;
      this.nextImage();
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.y = this.y - henSpeed;
      this.nextImage();
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.y = this.y + henSpeed;
      this.nextImage();
    }

    // Adjust the x position of each chick to line them up horizontally
    for (let i = 0; i < this.chicks.length; i++) {
      push();
      translate(this.x, this.y);
      const chick = this.chicks[i];
      chick.x =
        this.x +
        (this.img.width * this.size) / 2 +
        (i + 1) * chickSpacing * -this.direction;
      chick.y = this.y + this.img.height * this.size;
      pop();
    }
  }
  //Garrit helped with the following function draw, to flip the image
  //I think it is continue writting from the character method draw
  draw() {
    push();
    translate(this.x, this.y);
    scale(this.direction, 1);
    const w = this.img.width * this.size;
    const h = this.img.height * this.size;
    image(this.img, -w / 2, 0, w, h);
    pop();
  }

  eatWorm() {
    this.isEating = true;
    this.image = this.eatingHen;
    this.numWormsEaten++;

    // Check if the hen has eaten three worms and maka a baby chick

    if (this.numWormsEaten % 3 === 0) {
      const newChick = new Chick(
        this.x +
          (this.img.width * this.size) / 2 +
          (this.chicks.length + 1) * chickSpacing * -this.direction,
        this.y + this.img.height * this.size
      );
      this.chicks.push(newChick);
    }

    // Change the image back to the original hen image after a delay of 0.2 second, chatGPT gave me the solution
    //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    setTimeout(() => {
      this.isEating = false;
      this.imageIndex = 0;
      this.image = this.images[0];
    }, 200);
  }
}

//to flip the hen when you move left/backwards
//https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb
