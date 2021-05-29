class Box {

        constructor(x,y,width,height){

            var options={
            
                friction:0.1,

            }

        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(myworld,this.body);

            this.width=width;
            this.height=height;
        }

        display (){

            var pos=this.body.position;
            var angle= this.body.angle;
            //name spacing

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow")
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
        }


}