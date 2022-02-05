import { Scene } from "phaser";

import BirdPng from "../../assets/img/bird.png";
import NestPng from "../../assets/img/nest.png";
import CatsPng from "../../assets/img/cats.png";

export default class BootloaderScene extends Scene{
    constructor() {
        super("BootloaderScene");
    }

    preload() {
        this.load.image("bird", BirdPng);
        this.load.image("nest", NestPng);
        this.load.spritesheet("cats", CatsPng, {
            frameWidth: 64, frameHeight: 64
        })
        this.load.on("complete", () => {
            this.scene.start("MainScene");
        })
    }
    
}