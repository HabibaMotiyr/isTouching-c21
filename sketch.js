var fixedRect, movingRect;
var object1
var biscut1

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(200, 100, 100,100);
  object1.shapeColor = "blue";
  object1.debug=true;
  biscut1 = createSprite(600,700,80,80)
  biscut1.shapeColor="red"
  biscut1.debug=true; 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    object1.shapeColor="blue";
    biscut1.shapeColor="red";
  }                       
 
  if(isTouching(object1,movingRect)){
    object1.shapeColor="pink";
    movingRect.shapeColor="pink";
  }
  if(isTouching(biscut1, movingRect)){
    biscut1.shapeColor="yellow"
    movingRect.shapeColor="yellow"
  }
  drawSprites();

}

