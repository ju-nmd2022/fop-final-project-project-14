import Character from "./character.js";

export class Hen extends Character {
    constructor(x, y) {
        super(x, y, 0.05, ["/images/hen/hen0.png", "/images/hen/hen1.png", "/images/hen/hen2.png"]);
    }

    move() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + 5;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.x = this.x - 5;
        } else if (keyIsDown(UP_ARROW)) {
            this.y = this.y - 5;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.y = this.y + 5;
        }
    }

}