import { Scene } from "phaser";

export default class BootloaderScene extends Scene{
    constructor() {
        super("BootloaderScene");
    }
    
    create() {
        this.add.text(10,10,"holis");
    }
}