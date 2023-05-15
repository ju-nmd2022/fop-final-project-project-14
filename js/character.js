export default class Character {
  imageIndex = 0;

  // scale = size adjustments
  constructor(x, y, size, imgs) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.imgs = this.loadImages(imgs);
    this.img = this.imgs[this.imageIndex];
  }

  draw() {
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
  loadImages(imgs) {
    const loadedImages = [];
    for (let i = 0; i < imgs.length; i++) {
      const loadedImage = loadImage(imgs[i]);
      loadedImages.push(loadedImage);
    }

    return loadedImages;
  }

  nextImage() {
    //minus ett för att inte gå utanför arrayn
    if (this.imageIndex < this.imgs.length - 1) {
      this.imageIndex = this.imageIndex + 1;
    } else {
      this.imageIndex = 0;
    }
    //the active image displayed in draw is updated to the next in the array
    this.img = this.imgs[this.imageIndex];
  }

  //the hitbox learned from Liam
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
