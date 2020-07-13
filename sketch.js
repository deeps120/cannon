const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,cannon;
var ball;
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    cannon= new Cannon(50,200,250,250);
    ground = new Ground(displayWidth/2,displayHeight-20,displayWidth,60);
    ball = new Ball(cannon.x,cannon.y,20,20);
 
}

function draw(){
    background("white");
    Engine.update(engine);
   ground.display();
   cannon.display();
  if(keyCode===32){
 ball.display();
  }
 
   
  
    
}
