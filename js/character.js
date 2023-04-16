export default class Character {
// scale = size adjustments
    constructor(x, y, scale, imgs) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.imgs = this.loadImages(imgs);
        this.img = this.imgs[0];
    }

    draw() {
        image(this.img, this.x, this.y, this.img.width * this.scale, this.img.height * this.scale);
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
}