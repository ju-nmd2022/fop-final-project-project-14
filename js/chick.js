import Character from "../js/character.js";
let chickSpeed = 5;
export class Chick extends Character {
  constructor(x, y) {
    super(x, y, 0.035, [
      "../images/chick/chick0.png",
      "../images/chick/chick1.png",
      "../images/chick/chick2.png",
    ]);
    this.direction = 1;
  }

  chickMove() {
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.x = this.x + chickSpeed;
      this.nextImage();
      this.direction = 1;
    } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.x = this.x - chickSpeed;
      this.direction = -1;
      push();
      scale(-1, 1);
      this.nextImage();
      pop();
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.y = this.y - chickSpeed;
      this.nextImage();
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.y = this.y + chickSpeed;
      this.nextImage();
    }
  }
  draw() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    scale(this.direction, 1);
    const w = this.img.width * this.size;
    const h = this.img.height * this.size;
    image(this.img, -w / 2, 0, w, h);
    pop();
  }
}
