class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:310,
        }
       this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope)
        this.bodyA=bodyA
        this.pointB=pointB
    }
    display() { 
        if (this.rope.bodyA) { 
        var pointA = this.rope.bodyA.position;
         var pointB = this.pointB; 
         push(); 
        stroke(48, 22, 8);
         strokeWeight(3);
          line(pointB.x, pointB.y, pointA.x, pointA.y);
          pop();
     } }
}