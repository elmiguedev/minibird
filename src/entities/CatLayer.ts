import { Scene } from "phaser";

export default class CatLayer {
    private scene: Scene;
    private height:number;
    
    constructor(scene:Scene) {
        this.scene = scene;
        this.height = 480;
        
        this.scene.time.addEvent({
            repeat: -1,
            delay: 1000,
            callback: () => {
                this.createCat();
                this.height -= 32
            }
        });
    
    }

    createCat() {
        const y = this.height;
        for(let i=0; i<30; i++) {
            const x = Phaser.Math.Between(-300,300);
            const frame = Phaser.Math.Between(1,4);
            const cat = this.scene.physics.add.sprite(x,y,"cats", frame);
            cat.setImmovable(true);
            cat.body.allowGravity = false;
        }
    }
}