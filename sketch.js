//const Engine = Matter.Engine
//const World = Matter.World
//const Bodies = Matter.Bodies
//const Body = Matter.Body 

var astronaut
var b_g,b_gImg
var sleep
var brush
var gym
var eat 
var drink
var move
var bath


function preload(){
b_gImg=loadImage("iss.png")
sleep=loadImage("sleep.png")
brush=loadImage("brush.png")
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat=loadAnimation("eat1.png","eat2.png")
drink=loadAnimation("drink1.png","drink2.png")
move=loadAnimation("move.png","move1.png")
bath=loadAnimation("bath1.png","bath2.png")
}
function setup() {
  createCanvas(800,400);
  b_g=createSprite(300, 200 );
b_g.addAnimation("b_g",b_gImg)

  
  astronaut=createSprite(400,200)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
  textSize(20); 
  fill("white")
   text("Instructions:",20, 35);
   textSize(15); 
   text("Up Arrow = Brushing",20, 55);
   text("Down Arrow = Gymming",20, 70); 
   text("Left Arrow = Eating",20, 85);
   text("Right Arrow = Bathing",20, 100);
   text("m key = Moving",20, 115);
  
}

function draw() {
  background(255,255,255); 
  
  textSize(20); 
  fill("white")
   text("Instructions:",20, 35);
   textSize(15); 
   text("Up Arrow = Brushing",20, 55);
   text("Down Arrow = Gymming",20, 70); 
   text("Left Arrow = Eating",20, 85);
   text("Right Arrow = Bathing",20, 100);
   text("m key = Moving",20, 115);

  if(keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
  astronaut.y=350
  astronaut.velocityX=0
  astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming")
    astronaut.y=300
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=250
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=250
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.x=250
    astronaut.velocityX=2
    astronaut.velocityY=2
  }
  edges=createEdgeSprites(); 
  astronaut.bounceOff(edges);


  drawSprites();
}
