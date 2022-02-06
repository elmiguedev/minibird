import { Scene } from "phaser";
import Nest from "./Nest";

export default class Tree {
    private scene: Scene;
    private x: number;
    private y: number;
    private size: number;
    private nests!: Phaser.Physics.Arcade.StaticGroup;

    constructor(scene: Scene, x: number, y: number, size: number) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.size = size;

        this.createNests();
        this.createTrunk();
    }

    createTrunk() {
        for (let i = 0; i < this.size; i++) {
            const x = this.x;
            const y = this.y - (i * 64);
            this.scene.add.rectangle(x, y, 256, 64, 0xcc9966);
            if (Math.random() < 0.3)
                this.createBranch(i);
        }
    }

    createBranch(level: number) {
        const x = this.x - Phaser.Math.Between(-256, 256);
        const y = this.y - (level * 64);
        const size = Phaser.Math.Between(64, 128);
        this.scene.add.rectangle(x, y, 256, size, 0xcc9966);
        const nest = new Nest(this.scene, x, y);
        this.nests.add(nest);
    }

    createNests() {
        this.nests = this.scene.physics.add.staticGroup();

        // const x = this.x;
        // const y = this.y - (this.size*64);
        // const nest = new Nest(this.scene, x, y);
    }

    public getNests() {
        return this.nests;
    }
}