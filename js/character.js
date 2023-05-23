export default class Character {
  imageIndex = 0;

  // scale = size adjustments
  constructor(x, y, size, imgs) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.imgs = this.loadImages(imgs);

    // it is setting the initial value of the img property based on the imgs array.
    this.img = this.imgs[this.imageIndex];
  }

  draw() {
    //It uses the p5.js library's image() function to draw the character's image on the canvas.
    image(
      this.img,
      this.x,
      this.y,
      this.img.width * this.size,
      this.img.height * this.size
    );
  }

  // Takes an array of file paths
  // Reads each path into a p5.Image
  // Saves to an array
  // Returns image objects back to the caller
  //
  loadImages(imgs) {
    const loadedImages = [];
    for (let i = 0; i < imgs.length; i++) {
      //https://p5js.org/reference/#/p5/loadImage
      //loadImage is a build in function in P5.js
      const loadedImage = loadImage(imgs[i]);
      loadedImages.push(loadedImage);
    }

    return loadedImages;
  }
  //It checks if the current imageIndex is less than imgs.length - 1 (the index of the last image in the array). If true, it increments the imageIndex by 1, moving to the next image.
  nextImage() {
    if (this.imageIndex < this.imgs.length - 1) {
      this.imageIndex = this.imageIndex + 1;
    } else {
      this.imageIndex = 0;
    }
    //the active image displayed in draw is updated to the next in the array
    //ensuring that the updated image will be displayed when the draw method is called.
    this.img = this.imgs[this.imageIndex];
  }

  //the hitbox learned from Liam
  //and https://www.youtube.com/watch?v=uAfw-ko3kB8&t=90s

  collidesWith(object) {
    // Calculate the bounding boxes of the two objects
    const thisLeft = this.x;
    const thisRight = this.x + this.img.width * this.size;
    const thisTop = this.y;
    const thisBottom = this.y + this.img.height * this.size;

    const objectLeft = object.x;
    const objectRight = object.x + object.img.width * object.size;
    const objectTop = object.y;
    const objectBottom = object.y + object.img.height * object.size;

    // Check for collision by comparing the bounding box coordinates
    if (
      thisRight >= objectLeft &&
      thisLeft <= objectRight &&
      thisBottom >= objectTop &&
      thisTop <= objectBottom
    ) {
      return true; // Collides
    } else {
      return false; // Doesn't collide
    }
  }
}
