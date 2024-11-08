import Phaser from "phaser"

class GameTitleScene extends Phaser.Scene{
    constructor() {
        super("GameTitleScene");
    }
    create() {
        this.gameTitle = this.add.sprite(160, 160, 'gameTitle');
        this.gameTitle.setOrigin(0.5, 0.5);  

        this.text_ = this.add.text(100, 0, 'Bica 4 life G_G and forever',{
            font: '10px Arial',
            fill: '#FFFFFF'
        });
        
        this.playButton = this.add.text(100, 50, 'Juan Flores Tenorio',{
            font: '10px Arial',
            fill: '#FFFFFF'
        });
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