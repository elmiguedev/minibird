import {  Scene } from "phaser";
import Floor from "../entities/Floor";
import Bird from "../entities/Bird";
import Tree from "../entities/Tree";
import Nest from "../entities/Nest";
import CatLayer from "../entities/CatLayer";

export default class MainScene extends Scene{

    // private bird!:Phaser.Physics.Arcade.Sprite;
    private solidGroup!:Phaser.Physics.Arcade.StaticGroup;
    private leftKey!:Phaser.Input.Keyboard.Key;
    private rightKey!:Phaser.Input.Keyboard.Key;
    private bird!:Bird;
    private nest!:Nest;

    constructor() {
        super("MainScene");
    }

    update() {
        this.bird.update();
        this.checkColissions();

        // this.physics.collide(this.bird, this.solid);
        if (this.leftKey.isDown) {
            this.bird.flapLeft();
        }
        if (this.rightKey.isDown) {
            this.bird.flapRight();
        }
    }

    create() {

        this.createTree();
        // const floor = this.add.rectangle(0,480,480,60,0x00ff00);
        // this.solid = this.physics.add.staticGroup();
        // this.solid.add(floor);

        // this.bird = this.physics.add.sprite(0,0,"bird");
        this.bird = new Bird(this, 0,100);
        this.cameras.main.startFollow(this.bird);
        this.cameras.main.setBackgroundColor(0xccffFF);
        this.leftKey = this.input.keyboard.addKey("left");        
        this.rightKey = this.input.keyboard.addKey("right");   
        
        this.nest = new Nest(this,0, -100);
        this.createSolidGroup();
        
        const catLayer = new CatLayer(this);

    }

    createSolidGroup() {
        this.solidGroup = this.physics.add.staticGroup();
        this.solidGroup.add(new Floor(this, 0,this.game.canvas.height));
    }

    createTree() {
        const tree = new Tree(this,0,this.game.canvas.height, 20);
    }

    checkColissions() {
        this.physics.collide(this.solidGroup, this.bird);
        this.physics.collide(this.bird,this.nest, () => {
            if (this.bird.body.touching.down)
                console.log("CHOC")
        });
        
    }
   
}