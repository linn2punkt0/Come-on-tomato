import Phaser from "phaser";
import Game from "../scenes/Game";

class Seagull extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
    this.seagull = this.scene.physics.add.sprite(this.x, this.y, "rat");
    this.seagull.setScale(0.1);

    this.seagull.setCollideWorldBounds(false);
  }

  preload() {}

  create() {
    // this.rat = this.scene.physics.add.staticSprite(this.x, this.y, "rat");
    // this.rat.setScale(0.1);
  }

  update() {
    this.seagull.x -= 1;
  }
}

export default Seagull;
