import Phaser from "phaser";
import Game from "../scenes/Game";

class Finish extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
    this.finish = this.scene.physics.add.sprite(this.x, this.y, "finish");
    this.finish.setScale(0.1);

    this.finish.setCollideWorldBounds(true);
    this.finish.setBounce(0);
  }
}

export default Finish;
