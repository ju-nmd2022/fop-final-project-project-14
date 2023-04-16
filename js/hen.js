import Character from "./character.js";

export class Hen extends Character {
    constructor(x, y) {
        super(x, y, 0.05, ["/images/hen/hen0.png", "/images/hen/hen1.png", "/images/hen/hen2.png"]);
    }

}