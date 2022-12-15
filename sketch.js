var bolinha;

function setup() {
  createCanvas(700, 7000);
  bolinha = createSprite(350, 500 ); 
}

function draw() {
  background("black");

 
  if(keyDown("space")) {
    bolinha.velocityY = -1.5;
  }
  
  bolinha.velocityY += 0.1;
  
  camera.y = bolinha.y;

  drawSprites();
}

