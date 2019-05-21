import Phaser from "phaser";
import Game from "../scenes/Game";

class Rat extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
    this.rat = this.scene.physics.add.sprite(this.x, this.y, "rat");
    this.rat.setScale(0.1);

    this.rat.setCollideWorldBounds(false);
  }

  preload() {}

  create() {
    // this.rat = this.scene.physics.add.staticSprite(this.x, this.y, "rat");
    // this.rat.setScale(0.1);
  }

  update() {
    this.rat.x -= 1;
  }
}

export default Rat;
