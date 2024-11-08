import Phaser from "phaser"

class GameTitleScene extends Phaser.Scene{
    constructor() {
        super("GameTitleScene");
    }
    create() {
        this.gameTitle = this.add.sprite(160, 160, 'gameTitle');
        this.gameTitle.setOrigin(0.5, 0.5);  

        this.playButton = this.add.sprite(160, 320, 'play');
        this.playButton.setOrigin(0.5, 0.5);
        this.playButton.setInteractive();
        this.playButton.on('pointerdown', () => {
            this.playTheGame();
        });
    }

    playTheGame() {
        this.scene.start('TheGameScene');
    }
}
export default GameTitleScene