import Phaser from "phaser";
import Game from "../scenes/Game";

class Rat extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
  }

  preload() {
    // console.log(this.scene);
    // this.scene.load.image("tomato", TomatoImg);
  }

  create() {
    const rat = this.scene.add.sprite(this.x, this.y, "rat");
    rat.setScale(0.1);
    // cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // if (cursors.down.isDown()) {
    //   tomato.y += 1;
    // }
  }
}

export default Rat;
