"use strict";
/**
 * The game is loading scene
 */
class LoadingScene extends Phaser.Scene {
    constructor() {
        super('loading');
    }
    create() {
        this.add.text(0, 0, 'Loading ...', { fontFamily: 'verdana', fontSize: '2em' });
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
                LoadingScene
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