import Phaser from "phaser";
import Game from "../scenes/Game";
import TomatoImg from "../images/tomato.png";

class Tomato extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
  }

  preload() {
  }

  create() {
    this.tomato = this.scene.physics.add.sprite(this.x, this.y, "tomato");
    this.tomato.setScale(0.07);

    this.tomato.setBounce(0.2);
    this.tomato.setCollideWorldBound(true);

    this.tomato.body.setGravityY(300);

    this.cursors = this.scene.input.keyboard.createCursorKeys();

    // this.tomato.anchor.setTo(0.5);

  }

  update() {
    //Defining tomato movement
    if (this.cursors.down.isDown) {
      this.tomato.y += 3;
    }

    else if (this.cursors.up.isDown) {
      this.tomato.y -= 3;
    }

    if (this.cursors.right.isDown) {
      this.tomato.x += 3;
    }

    else if (this.cursors.left.isDown) {
      this.tomato.x -= 3;
    }
  }
}

export default Tomato;
