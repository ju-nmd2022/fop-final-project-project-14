import Character from "./character.js";

export class Fox extends Character {
  constructor(x, y) {
    super(x, y, 0.05, [
      "/images/fox/fox0.png",
      "/images/fox/fox1.png",
      "/images/fox/fox2.png",
      "/images/fox/fox4.png",
      "/images/fox/fox5.png",
      "/images/fox/fox6.png",
      "/images/fox/fox7.png",
      "/images/fox/fox8.png",
      "/images/fox/fox9.png",
    ]);
  }
}
