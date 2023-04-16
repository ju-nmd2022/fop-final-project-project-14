export default class Character {
    imageIndex = 0;

// scale = size adjustments
    constructor(x, y, scale, imgs) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.imgs = this.loadImages(imgs);
        this.img = this.imgs[this.imageIndex];
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

    nextImage() {
        //minus ett för att inte gå utanför arrayn
        if (this.imageIndex < this.imgs.length - 1) {
            this.imageIndex = this.imageIndex + 1;
        } else {
            this.imageIndex = 0;
        }
        // den aktiva bilden som visas i draw uppdateras till nästa i arrayn
        this.img = this.imgs[this.imageIndex];
    }
}