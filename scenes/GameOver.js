import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: "GameOver"
    });

  }

  create() {
    //Game over text
    this.gameOverText = this.add.text(400, 300, "Game Over", {
      font:"80px Impact",
      align:'center',
    });
    this.gameOverText.setOrigin(0.5);

    //Play again t3ext
    this.restartText = this.add.text(400, 600, "Press space to play again", {
      font:"20px",
      align:'center',
    });
    this.restartText.setOrigin(0.5);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    //Changing scene to game on scpace tap
    if (this.cursors.space.isDown) {
      this.scene.start("Game");
      console.log(this.cursors);
    }
  }
}

export default GameOver;
