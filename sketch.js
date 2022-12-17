var bolinha;
var bolinhaImg;
var obstaculo1;
var edges;

function preload(){
  bolinhaImg = loadImage("bolinha.png");

}


function setup() {
  createCanvas(700, 700);
  bolinha = createSprite(350, 500 ); 
  bolinha.addImage("bola", bolinhaImg);
  bolinha.scale = 0.2;

  obstaculo1 = createSprite(350, 100, 500, 50);
  obstaculo1.velocityX = 20;
  edges = createEdgeSprites();
}

function draw() {
  background("black");

  obstaculo1.bounceOff(edges);

 
  if(keyDown("space")) {
    bolinha.velocityY = -10;
  }
  
  bolinha.velocityY += 1;
  
  //camera.y = bolinha.y;

  drawSprites();
}

