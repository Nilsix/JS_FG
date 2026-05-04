const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const c = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0,0,canvas.width,canvas.height);

type Position = {
        x:number;
        y:number;
    };

class Sprite{
    position: Position;
    width: number;
    height: number;

    constructor(position: Position){ 
        this.position = position;
        this.width = 10;
        this.height = 500;
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
}

const player = new Sprite(
    {x:15,y:15}
);

player.draw();
console.log(player);