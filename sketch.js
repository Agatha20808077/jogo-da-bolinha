var bolinha;
var bolinhaImg;
var obstaculo1p1,obstaculo1p2,obstaculo1p3 ;
var edges;

function preload(){
  bolinhaImg = loadImage("bolinha.png");

}


function setup() {
  createCanvas(700, 700);
  bolinha = createSprite(350, 500 ); 
  bolinha.addImage("bola", bolinhaImg);
  bolinha.scale = 0.2;

  obstaculo1p1 = createSprite(150, 100, 200, 50);
  obstaculo1p1.velocityX = 10;
  obstaculo1p1.shapeColor = "purple";
  obstaculo1p2 = createSprite(350, 100, 200, 50);
  obstaculo1p2.velocityX = 10;
  obstaculo1p2.shapeColor = "white";
  obstaculo1p3 = createSprite(550, 100, 200, 50);
  obstaculo1p3.velocityX = 10;
  obstaculo1p3.shapeColor = "green";
  edges = createEdgeSprites();
}

function draw() {
  background("black");

  obstaculo1p1.bounceOff(edges);
  obstaculo1p2.bounceOff(edges);
  obstaculo1p3.bounceOff(edges);

  bolinha.bounceOff(obstaculo1p1);
  bolinha.bounceOff(obstaculo1p3);
 
  if(keyDown("space")) {
    bolinha.velocityY = -10;
  }
  
  bolinha.velocityY += 1;
  
  //camera.y = bolinha.y;

  drawSprites();
}

