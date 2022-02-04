import Phaser, { Scene } from "phaser";

export default class Floor extends Phaser.GameObjects.Rectangle {
    constructor(scene:Scene, x:number, y:number) {
        super(scene,x,y, scene.game.canvas.width * 2, 200,0x55ff55);
        this.scene.add.existing(this);
        this.setOrigin(0.5,0);
    }
}