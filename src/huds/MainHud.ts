import { Scene } from "phaser";
import Bird from "../entities/Bird";

export default class MainHud extends Scene {
    private leftArea!: Phaser.GameObjects.Zone;
    private rightArea!: Phaser.GameObjects.Zone;
    private bird!: Bird;

    constructor() {
        super("MainHud");
        // this.bird = bird;


    }

    setBird(bird: Bird) {
        this.bird = bird;

    }

    create() {
        this.add.text(10, 10, "HOLA MUNDO", { color: "black" })
        this.leftArea = this.add.zone(0, 0, this.game.canvas.width / 2, this.game.canvas.height).setOrigin(0);
        this.rightArea = this.add.zone(this.game.canvas.width / 2, 0, this.game.canvas.width / 2, this.game.canvas.height).setOrigin(0);
        this.leftArea.setInteractive();
        this.rightArea.setInteractive();
        this.leftArea.on("pointerdown", () => {
            this.bird.flapLeft();
        });
        this.rightArea.on("pointerdown", () => {
            this.bird.flapRight();
        })
    }
}