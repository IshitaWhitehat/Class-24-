class Log {

    constructor(x,y,height,angle){

        var options={
        
            friction:0.1,

        }

    this.body= Bodies.rectangle(x,y,20,height,options);
    World.add(myworld,this.body);
    Matter.Body.setAngle(this.body,angle); // angle from parameter angle

        this.width=20;
        this.height=height;
    }

    display (){

        var pos=this.body.position;
        var angle= this.body.angle;
        //name spacing

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("brown")
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
    }


}