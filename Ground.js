class Ground {
    constructor(){ 
        var options={
            isStatic:true,
        }
       this.body= Bodies.rectangle(width/2,height-10,width,10,options);
       World.add(myworld,this.body);
    }
    
    display (){
    
      var pos=this.body.position; //name spacing
      fill("brown")
      rectMode(CENTER)
      rect(pos.x,pos.y,width,10);
   
    }
}