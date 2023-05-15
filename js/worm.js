import Character from "../js/character.js";

export class Worm extends Character {
  constructor(x, y) {
    super(x, y, 0.05, ["./images/worm.png"]);
  }

  isClicked(mouseX, mouseY) {
    // check if the mouse is clicked on the worm
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.img.width * this.size &&
      mouseY >= this.y &&
      mouseY <= this.y + this.img.height * this.size
    ) {
      return true;
    } else {
      return false;
    }
  }
}
