
var gameobject1, gameobject2, gameobject3,gameobject4, movingRect;

function setup() {
  createCanvas(800,400);
  gameobject1=createSprite(100, 50, 50, 80);
  gameobject2=createSprite(160, 50, 50, 80);
  gameobject3=createSprite(220, 50, 50, 80);
  gameobject4=createSprite(280, 50, 50, 80);
  
  movingRect=createSprite(450,200,80,30);
  
  
  gameobject1.shapeColor="green";
  gameobject2.shapeColor="green";
  gameobject3.shapeColor="green";
  gameobject4.shapeColor="green";
  movingRect.shapeColor="green";

  gameobject1.debug= true;
  gameobject2.debug= true;
  gameobject3.debug= true;
  gameobject4.debug= true;
  movingRect.debug=true;


}

function draw() {
  background(0);  
  movingRect.x= mouseX;
  movingRect.y=mouseY;
    
  if (isTouching(movingRect,gameobject2)){
    movingRect.shapeColor = "red";
     gameobject2.shapeColor="red";
  } else {
    gameobject2.shapeColor="green";
    movingRect.shapeColor="green";
  }
     

  drawSprites();
}

