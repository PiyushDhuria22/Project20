var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(700,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black"); 
  if(wall.x-car.x<(wall.width+car.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22500;
  } 
  if(deformation<180){
    car.shapeColour=colour(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColour=colour(230,230,0);
  }
  if(deformation<100){
    car.shapeColour=colour(0,255,0);
  }
  car.display();
  wall.display();
  drawSprites();
}