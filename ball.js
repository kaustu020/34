class Ball{
    constructor(x,y,width,height){
        var options={
           density:1,
           frictionAir:0.005,
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width=width
        this.height=height
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        fill("grey")
        ellipse(pos.x,pos.y,this.width,this.height)
    }
}