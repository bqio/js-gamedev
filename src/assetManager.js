import Base from "./base.js";
import ImageAsset from "./imageAsset.js";
import TileAsset from "./tileAsset.js";

class AssetManager extends Base {
  constructor() {
    super("Asset Manager", true);
    this.assets = [];
  }

  loadImageAsset(name, src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onerror = (err) => reject(err);
      image.onload = () => {
        this.assets.push(new ImageAsset(name, "image", image));
        this.logger.debug(`Loaded '${src}'`);
        resolve(name);
      };
      image.src = src;
    });
  }

  loadTileAsset(config) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onerror = (err) => reject(err);
      image.onload = () => {
        this.assets.push(
          new TileAsset(
            config.name,
            config.src,
            image,
            config.width,
            config.height
          )
        );
        this.logger.debug(`Loaded '${config.src}'`);
        resolve(config.name);
      };
      image.src = config.src;
    });
  }

  getAsset(name) {
    return this.assets.filter((asset) => asset.name == name)[0];
  }
}

export default new AssetManager();
