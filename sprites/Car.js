import Phaser from "phaser";
import Game from "../scenes/Game";

class Car extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
    this.car = this.scene.physics.add.sprite(this.x, this.y, "car");
    this.car.setScale(0.15);

    this.car.setCollideWorldBounds(true);
    this.car.body.setVelocityX(-100);
    this.car.setBounce(0);
  }
}

export default Car;
