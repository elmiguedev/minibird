import Phaser, { Scene } from "phaser";

export default class Nest extends Phaser.Physics.Arcade.Sprite {
    constructor(scene:Scene, x:number, y:number) {
        super(scene,x,y, "nest");
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this,true);
        this.setImmovable(true)
        this.body.checkCollision.down = false;
    }
}