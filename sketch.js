var box 
  
box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
  box.shapeColor = "red"
  
}

function draw() 
{
  background(200);
  
  if (keyIsDown(RIGHT_ARROW))
    {
    box.position.x = box.positon.x +1;
  }
  if (keyIsDown(LEFT_ARROW))
   { 
  box.position.x = box.positon.x -1;
  }
  drawSprites();
}




