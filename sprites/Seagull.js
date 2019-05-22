import Phaser from "phaser";
import Game from "../scenes/Game";

class Seagull extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
    this.seagull = this.scene.physics.add.staticSprite(
      this.x,
      this.y,
      "seagull"
    );
    this.seagull.setScale(0.2);
  }

  preload() {}

  create() {}

  update() {
    console.log(this.seagull.x);
    this.seagull.x -= 2;
    if (this.seagull.x > 800) {
      this.seagull.y += 2;
    } else if (this.seagull.x < 800) {
      if (this.seagull.x > 600) {
        this.seagull.y -= 2;
      } else if (this.seagull.x < 400) {
        this.seagull.y += 2;
      }
    }
  }
}

export default Seagull;
