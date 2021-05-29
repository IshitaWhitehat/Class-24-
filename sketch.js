const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies; //name spacing

var myengine,myworld; // var to create an engine and world
var box,ground,hermione;

function setup() {
  createCanvas(1200,600);
  
  myengine=Engine.create(); // it will create an engine by name my engine
  // when we create an engine a world gets created 
  //automatically called myengine.world
  myworld=myengine.world; // is again name spacing


  box1=new Box(700,530,70,70);
  box2=new Box(900,530,70,70);
  box3=new Box(700,400,70,70);
  box4=new Box(900,400,70,70);
  box5=new Box(800,300,70,70);
  pig1= new Pig(800,530);
  pig2=new Pig(800,400);
  log1=new Log(800,430,330,PI/2);
  log2=new Log(800,300,330,PI/2);
  log3=new Log(850,230,160,-PI/7);
  log4=new Log(750,230,160,PI/7);
  ground = new Ground();
  bird=new Bird(100,100);

}

function draw() {

  Engine.update(myengine);
  background(0);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  bird.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
}

