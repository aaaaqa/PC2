import Phaser from "phaser"

class TheGameScene extends Phaser.Scene{

    constructor() {
        super("TheGameScene");
    }

    create() {
        this.workingButtons = true;
        this.higher = true;
        this.score = 0;
        this.number = Math.floor(Math.random() * 10);
        this.spriteNumber = this.add.sprite(160, 240, 'numbers');
        this.spriteNumber.setOrigin(0.5, 0.5);
        this.spriteNumber.setFrame(this.number);

        this.higherButton = this.add.sprite(160, 100, 'higher');
        this.higherButton.setOrigin(0.5, 0.5);
        this.higherButton.setInteractive();
        this.higherButton.addListener('pointerdown', () => {
            this.clickedHigher();
        });

        this.lowerButton = this.add.sprite(160, 380, 'lower');
        this.lowerButton.setOrigin(0.5, 0.5);
        this.lowerButton.setInteractive();
        this.lowerButton.addListener('pointerdown', () => {
            this.clickedLower();
        });
    }

    clickedHigher() {
        this.higher = true;
        this.tweenNumber(true);
    }

    clickedLower() {
        this.higher = false;
        this.tweenNumber(false);
    }

    tweenNumber(higher) {
        if (this.workingButtons) {
            this.workingButtons = false;
            this.tweens.add({
                targets: this.spriteNumber,
                x: 420,
                durations: 5000000,
                onComplete: () => this.exitNumber()
            });
        }
    }
    

    exitNumber() {
        this.spriteNumber.x = -160;
        this.spriteNumber.setFrame(Math.floor(Math.random() * 10));

        this.tweens.add({
            targets: this.spriteNumber,
            x: 160,
            durations: 5000000,
            onComplete: () => this.enterNumber()
        });
    }

    enterNumber() {
        this.workingButtons = true;
    }
}
export default TheGameScene