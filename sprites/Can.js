import Phaser from "phaser";
import Game from "../scenes/Game";

class Can extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.can = this.scene.physics.add.sprite(this.x, this.y, "can");
    this.can.setScale(0.015);

    this.can.setCollideWorldBounds(false);
    this.can.body.setAllowGravity(false);
  }

  preload() {}

  create() {}

  update() {
    this.can.y += 5;
  }
}

export default Can;
