import { Scene } from "phaser";

export default class Bird extends Phaser.Physics.Arcade.Sprite {
    private leftWing:Phaser.GameObjects.Rectangle;
    private rightWing:Phaser.GameObjects.Rectangle;
    
    private canFlapLeft:boolean = true;
    private canFlapRight:boolean = true;

    constructor(scene:Scene, x:number, y:number) {
        super(scene,x,y,"bird");
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.leftWing = this.scene.add.rectangle(this.body.x,this.body.y,16,16,0x639bff);
        this.rightWing = this.scene.add.rectangle(this.body.x,this.body.y,16,16,0x639bff);
        this.setDragX(200);
    }

    update() {
        this.updateWingsPosition();
    }

    public flapWing(target:any, callback:Function) {
         this.scene.add.tween({
              targets: target,
                displayHeight: {
                    from: 16,
                    to: 8
                },
                yoyo: true,
                duration: 100,
                ease:Phaser.Math.Easing.Quadratic.InOut,
                onComplete: () => {
                    callback();
                }
            })
    }

    public flapLeft() {
        if (this.canFlapLeft) {
            this.canFlapLeft = false;
            this.setVelocity(-40,-200);
            this.flapWing(this.leftWing,() => {this.canFlapLeft = true});
        }
    }

    public flapRight() {
        if (this.canFlapRight) {
            this.canFlapRight = false;
            this.setVelocity(40,-200);
            this.flapWing(this.rightWing,() => {this.canFlapRight = true});
        } 
    }

    private updateWingsPosition() {
        this.leftWing.y = this.y;
        this.leftWing.x = this.x - 32;
        this.rightWing.y = this.y;
        this.rightWing.x = this.x + 32;
    }


}