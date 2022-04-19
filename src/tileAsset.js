import ImageAsset from "./imageAsset.js";

export default class TileAsset extends ImageAsset {
  constructor(name, src, image, width, height) {
    super(name, src, image);
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
    this.maxX = image.width;
    this.maxY = image.height;
  }

  nextCol() {
    if (this.x == this.maxX - this.width) {
      this.x = 0;
    } else {
      this.x += this.width;
    }
  }

  nextRow() {
    if (this.y == this.maxY - this.height) {
      this.y = 0;
    } else {
      this.y += this.height;
    }
  }
}
