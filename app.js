import Base from "./src/base.js";
import Scene from "./src/scene.js";
import AssetManager from "./src/assetManager.js";
import Viewer from "./src/viewer.js";

class App extends Base {
  constructor() {
    super("App");
    this.viewer = new Viewer(document.querySelector("canvas"));
    this.viewer.setSize(512, 512);
    this.viewer.setBackground("green");
  }

  async prepare() {
    await AssetManager.loadTileAsset({
      name: "player",
      src: "sprites/characters/player.png",
      width: 48,
      height: 48,
    });

    await AssetManager.loadTileAsset({
      name: "slime",
      src: "sprites/characters/slime.png",
      width: 32,
      height: 32,
    });

    this.awake();
  }

  setScene(scene) {
    this.scene = scene;
  }

  awake() {
    const mainScene = new Scene();
    const secondScene = new Scene();

    mainScene.addLayer("bg");
    secondScene.addLayer("chars");

    mainScene.addTile(AssetManager.getAsset("player"), "bg");
    secondScene.addTile(AssetManager.getAsset("slime"), "chars");

    this.setScene(mainScene);

    window.addEventListener("keyup", (evt) => {
      if (evt.key == "d") {
        this.setScene(secondScene);
      }
    });

    this.render();
  }

  update() {
    this.viewer.clear();
    this.viewer.renderScene(this.scene);
  }

  render() {
    this.update();
    requestAnimationFrame(() => this.render());
  }
}

function main() {
  const app = new App();
  app.prepare();
  console.log(app);
}

window.addEventListener("load", main);
