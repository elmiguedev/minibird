import { Game } from "phaser";
import BootloaderScene from "./scenes/BootloaderScene";
import MainScene from "./scenes/MainScene";

new Game({
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    scene: [
        BootloaderScene,
        MainScene
    ]
});