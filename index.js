const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width =  1024
canvas.height = 576


//dessine le rectangle 
c.fillRect(0,0,canvas.width,canvas.height)

class Sprite{
    constructor(playerNumber){
        
        this.width = 50
        this.height = 150
        this.playerNumber = playerNumber

        this.velocity = {
            x:0,
            y:1
        }
        this.position = {
            x: 0,
            y: 0
        }
        if(this.playerNumber == 1 ){
            this.position.x = canvas.width/2-this.width*2
        }
        else{
            this.position.x = canvas.width/2+this.width*2
        }
      
    }

    draw(){
        //permet de changer la couleur du rectangle
        if(this.playerNumber == 1){

        c.fillStyle = "red"
        }
        else{
            c.fillStyle = "blue"
        }
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
        
    }

    update(){
        this.draw()
        if(this.position.y > canvas.height-this.height){
            this.position.y = canvas.height-this.height
        }
        else{
        this.position.y += this.velocity.y
        }
    }
}

const player1 = new Sprite(1)

const player2 = new Sprite(2)

console.log(player1)
console.log(player2)

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.width,canvas.height)
    player1.update()
    player2.update()
}


animate()


