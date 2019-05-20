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
    this.rat = this.scene.add.sprite(this.x, this.y, "rat");
    this.rat.setScale(0.1);
  }

  update() {
    this.rat.x -= 1;
  }

  collide(player, rat) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play("turn");

    gameOver = true;
  }
}

export default Rat;
