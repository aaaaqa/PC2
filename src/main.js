import PreloadScene from "./states/Preload";
import GameTitleScene from "./states/GameTitle";
import TheGameScene from "./states/TheGameScene";
import GameOverScene from "./states/GameOver";

let config = {
    width: 320,
    height: 480,
    scene: [PreloadScene,GameTitleScene,TheGameScene,GameOverScene],
    scale:{
        mode: Phaser.FIT,
        autoCenter: Phaser.CENTER_BOTH
    },
    physics:{
        default : 'arcade'
    }
}
new Phaser.Game(config);