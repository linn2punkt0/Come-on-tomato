import Phaser from "phaser";
import Game from "../scenes/Game";

class Rat extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
    this.rat = this.scene.physics.add.staticSprite(x, y, "rat");
    this.rat.setScale(0.1);
  }

  preload() {}

  create() {
    // this.rat = this.scene.physics.add.staticSprite(this.x, this.y, "rat");
    // this.rat.setScale(0.1);
    // return this.rat;
  }

  update() {
    this.rat.x -= 1;
  }

  collide(tomato, rat) {
    console.log("crash");
    // this.physics.pause();

    // tomato.setTint(0xff0000);

    // tomato.anims.play("turn");

    // gameOver = true;
  }
}

export default Rat;
