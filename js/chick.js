import Character from "./character.js";

export class Chick extends Character {
    constructor(x, y) {
        super(x, y, 0.035, ["/images/chick/chick0.png", "/images/chick/chick1.png", "/images/chick/chick2.png"]);
    }

}