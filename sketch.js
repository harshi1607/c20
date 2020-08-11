var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,50)
fixedRect.shapeColor="blue"
movingRect=createSprite(400, 200, 50, 50);
movingRect.shapeColor="blue"
}

function draw() {
  background("pink");
  movingRect.x=mouseX
  movingRect.y=mouseY 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="black"
    fixedRect.shapeColor="black"
  }
  else{
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="blue"
  }
  drawSprites();
}