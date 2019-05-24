import Phaser from "phaser";
import Game from "../scenes/Game";

class TrafficLight extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
    this.trafficLight = this.scene.physics.add.sprite(this.x, this.y, "trafficLight");
    this.trafficLight.setScale(0.1);

    this.trafficLight.setCollideWorldBounds(true);
    this.trafficLight.setBounce(0);
  }
}

export default TrafficLight;
