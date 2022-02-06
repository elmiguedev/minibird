import { Scene } from "phaser";
import Floor from "../entities/Floor";
import Bird from "../entities/Bird";
import Tree from "../entities/Tree";
import CatLayer from "../entities/CatLayer";
import Apple from "../entities/Apple";

export default class MainScene extends Scene {

    // private bird!:Phaser.Physics.Arcade.Sprite;
    private solidGroup!: Phaser.Physics.Arcade.StaticGroup;
    private leftKey!: Phaser.Input.Keyboard.Key;
    private rightKey!: Phaser.Input.Keyboard.Key;
    private bird!: Bird;
    private tree!: Tree;
    private catLayer!: CatLayer;
    private apples!: Phaser.Physics.Arcade.Group;

    private leftKeyPressed: boolean = false;
    private rightKeyPressed: boolean = false;


    constructor() {
        super("MainScene");
    }

    update() {
        this.bird.update();
        this.checkColissions();
        // this.checkCatLayer();

        // this.physics.collide(this.bird, this.solid);
        if (this.leftKey.isDown && !this.leftKeyPressed) {
            this.leftKeyPressed = true;
            this.bird.flapLeft();
        }
        if (this.rightKey.isDown && !this.rightKeyPressed) {
            this.rightKeyPressed = true;
            this.bird.flapRight();
        }

        if (this.leftKey.isUp) {
            this.leftKeyPressed = false;
        }
        if (this.rightKey.isUp) {
            this.rightKeyPressed = false;
        }

        console.log("Energy: " + this.bird.getEnergy().toString())
    }

    create() {

        this.createTree();
        // const floor = this.add.rectangle(0,480,480,60,0x00ff00);
        // this.solid = this.physics.add.staticGroup();
        // this.solid.add(floor);
        this.apples = this.physics.add.group({
            classType: Apple,

        });
        // this.bird = this.physics.add.sprite(0,0,"bird");
        this.bird = new Bird(this, 0, -100);
        this.cameras.main.startFollow(this.bird);
        this.cameras.main.setBackgroundColor(0xccffFF);
        this.leftKey = this.input.keyboard.addKey("left");
        this.rightKey = this.input.keyboard.addKey("right");

        this.createSolidGroup();

        // this.catLayer = new CatLayer(this);

        this.time.addEvent({
            repeat: -1,
            delay: 2000,
            callback: () => {
                this.createApple();
            }
        });


    }

    createSolidGroup() {
        this.solidGroup = this.physics.add.staticGroup();
        this.solidGroup.add(new Floor(this, 0, 0));
    }

    createTree() {
        this.tree = new Tree(this, 0, 0, 40);
    }

    checkColissions() {
        this.physics.collide(this.solidGroup, this.bird);
        this.physics.collide(this.bird, this.tree.getNests(), () => {
            if (this.bird.body.touching.down)
                this.bird.increaseEnergy();
        });
        this.physics.collide(this.apples, this.solidGroup, (a) => {
            console.log("chay manz");
            a.destroy(true);
        })
        this.physics.collide(this.apples, this.bird);
    }

    checkCatLayer() {
        if (this.bird.y > this.catLayer.getHeight()) {
            this.scene.restart();
        }
    }

    createApple() {
        const x = Phaser.Math.Between(-300, 300);
        const y = this.bird.y - 400;
        this.apples.create(x, y);
    }

}