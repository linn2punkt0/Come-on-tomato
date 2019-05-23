import Phaser from "phaser";
import Game from "../scenes/Game";

class Seagull extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
    this.seagull = this.scene.physics.add.sprite(this.x, this.y, "seagull");
    this.seagull.setScale(0.2);
    this.seagull.setCollideWorldBounds(false);
    this.seagull.body.setAllowGravity(false);
    this.direction = 2;
  }

  preload() {}

  create() {}

  update() {
    this.seagull.x -= 2;
    this.seagull.y += this.direction;

    if (this.seagull.y > 550) {
      this.direction = -2;
    } else if (this.seagull.y < 0) {
      this.direction = 2;
    }
  }
}

export default Seagull;
