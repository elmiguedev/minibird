import { Scene } from "phaser";

export default class Apple extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, "apple");
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
    }
}