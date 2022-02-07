import { Game } from "phaser";
import MainHud from "./huds/MainHud";
import BootloaderScene from "./scenes/BootloaderScene";
import MainScene from "./scenes/MainScene";

new Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 900
            }
        }
    },
    scene: [
        BootloaderScene,
        MainScene,
        MainHud
    ]
});