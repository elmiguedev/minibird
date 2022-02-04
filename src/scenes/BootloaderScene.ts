import { Scene } from "phaser";

import BirdPng from "../../assets/img/bird.png";
import NestPng from "../../assets/img/nest.png";

export default class BootloaderScene extends Scene{
    constructor() {
        super("BootloaderScene");
    }

    preload() {
        this.load.image("bird", BirdPng);
        this.load.image("nest", NestPng);
        this.load.on("complete", () => {
            this.scene.start("MainScene");
        })
    }
    
}