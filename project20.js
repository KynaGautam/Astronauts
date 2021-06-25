const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body 

var astronaut
var b_g,b_gImg
var sleep
var brush
var gym
var eat 
var drink
var move


function preload(){
b_gImg=loadImage("iss.png")
sleep=loadImage("sleep.png")
brush=loadImage("brush.png")
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat=loadAnimation("eat1.png","eat2.png")
drink=loadAnimation("drink1.png","drink2.png")
move=loadAnimation("move.png","move1.png")
}
function setup() {
  createCanvas(800,400);
  b_g=createSprite(400, 200 );
  b_g=addAnimation("bg",bgImg)
  

}

function draw() {
  background(255,255,255);  
  drawSprites();
}