import Phaser from "phaser";
import Game from "../scenes/Game";

class Rat extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
  }

  preload() {}

  create() {
    const rat = this.scene.add.sprite(this.x, this.y, "rat");
    rat.setScale(0.1);
  }

  update() {}
}

export default Rat;
