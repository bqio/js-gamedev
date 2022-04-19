import Layer from "./layer.js";

export default class Scena {
  constructor() {
    this.layers = [];
  }

  addLayer(name) {
    this.layers.push(new Layer(name));
  }

  addTile(tile, layer) {
    this._getLayer(layer).addObject(tile);
  }

  _getLayer(name) {
    return this.layers.filter((layer) => layer.name === name)[0];
  }
}
