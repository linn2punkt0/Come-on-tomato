import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: "GameOver"
    });

  }

  create() {
    this.gameOverText = this.add.text(400, 300, "Game Over", {
      font:"80px Impact",
      align:'center',
    });
    this.gameOverText.setOrigin(0.5);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start("Game");
    }
  }
}

export default GameOver;
