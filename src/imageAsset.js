import Asset from "./asset.js";

export default class ImageAsset extends Asset {
  constructor(name, path, image) {
    super(name, path);
    this.image = image;
  }
}
