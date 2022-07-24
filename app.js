"use strict";
class BoardScene extends Phaser.Scene {
    constructor() {
        super('board');
    }
    preload() {
        this.load.image('tile', './assets/graphics/tile.png');
    }
    create() {
        for (let x = 0; x < 4; x++)
            for (let y = 0; y < 6; y++) {
                if (x == 2 && y == 2)
                    continue;
                this.add.image(x * 250, y * 250, 'tile')
                    .setOrigin(0, 0).setDisplaySize(250, 250);
                //
                // if (Math.random() < 0.2)
                //     this.add.image(x * 250, y * 250, 'ball').setOrigin(0, 0).setDisplaySize(250, 250);
            }
    }
}
/**
 * The game is loading scene
 */
class LoadingScene extends Phaser.Scene {
    constructor() {
        super('loading');
    }
    create() {
        this.add.text(0, 0, 'Loading ...', { fontFamily: 'verdana', fontSize: '2em' });
        this.scene.start('board');
    }
}
/**
 * The game
 */
class TheGame extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.AUTO,
            scale: {
                mode: Phaser.Scale.FIT,
                width: Device.width, height: 2000,
                parent: 'screen',
            },
            scene: [
                LoadingScene,
                BoardScene,
            ]
        });
    }
}
window.onload = () => {
    new TheGame();
};
/**
 * Output device (the screen)
 */
const Device = {
    width: 1000,
    height: 2000
};
const Game = {
    board: {
        columns: 4,
        rows: 6,
    }
};
//# sourceMappingURL=app.js.map