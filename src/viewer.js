import Base from "./base.js";
import TileAsset from "./tileAsset.js";

export default class Viewer extends Base {
  constructor(container) {
    super("Viewer");
    this.container = container;
    this.context = this.container.getContext("2d");
  }

  setSize(width, height) {
    this.container.width = width;
    this.container.height = height;
  }

  setBackground(color) {
    this.container.style.backgroundColor = color;
  }

  renderScene(scene) {
    for (let layer of scene.layers) {
      for (let obj of layer.objects) {
        if (obj instanceof TileAsset) {
          this.drawTile(obj, 0, 0);
        }
      }
    }
  }

  drawImage(imageAsset, x, y) {
    this.context.drawImage(imageAsset.image, x, y);
    this.logger.debug(`Drawing ${imageAsset.name} of pos ${x} and ${y}`);
  }

  drawTile(tileAsset, x, y) {
    this.context.drawImage(
      tileAsset.image,
      tileAsset.x,
      tileAsset.y,
      tileAsset.width,
      tileAsset.height,
      x,
      y,
      tileAsset.width,
      tileAsset.height
    );
    this.logger.debug(`Drawing ${tileAsset.name} of pos ${x} and ${y}`);
  }

  clear() {
    this.context.clearRect(0, 0, this.container.width, this.container.height);
    this.logger.debug("Clear viewer.");
  }
}
