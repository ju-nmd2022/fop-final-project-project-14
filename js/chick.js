import Character from "./character.js";
let chickSpeed = 5;
export class Chick extends Character {
  constructor(x, y) {
    super(x, y, 0.035, [
      "/images/chick/chick0.png",
      "/images/chick/chick1.png",
      "/images/chick/chick2.png",
    ]);
  }

  chickMove() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + chickSpeed;
      this.nextImage();
    } else if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - chickSpeed;
      this.nextImage();
    } else if (keyIsDown(UP_ARROW)) {
      this.y = this.y - chickSpeed;
      this.nextImage();
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y = this.y + chickSpeed;
      this.nextImage();
    }
  }
}
