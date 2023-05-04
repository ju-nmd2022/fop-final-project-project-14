import Character from "./character.js";

export class Worm extends Character {
  constructor(x, y) {
    super(x, y, 0.05, ["/images/worm.png"]);
  }

}
