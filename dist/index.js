"use strict";
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
c.fillRect(0, 0, canvas.width, canvas.height);
class Sprite {
    constructor(position) {
        this.position = position;
        this.width = 10;
        this.height = 500;
    }
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
const player = new Sprite({ x: 15, y: 15 });
player.draw();
console.log(player);
