class Bird {

    constructor(x,y){
    
        var options={
            friction:0.1,
        }
    
       this.body= Bodies.rectangle(x,y,50,50,options);
       World.add(myworld,this.body);
    
        this.width=50;
        this.height=50;
    }
    
    display (){
    
        var pos=this.body.position;
        var angle= this.body.angle;
        //name spacing

        pos.x=mouseX;
        pos.y=mouseY;
    
    push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("red")
      rectMode(CENTER)
      rect(0,0,this.width,this.height);
      pop();
    }
}