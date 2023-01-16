var bolinha;
var bolinhaImg;
var obstaculo1p1,obstaculo1p2,obstaculo1p3 ;
var linha;
var estado = 0; //estado do jogo igual a 0 no inicio
var estrela
var estrelaimg

//var edges;
var parede1, parede2, parede3, parede4;

function preload(){
  bolinhaImg = loadImage("bolinha.png");
  estrelaimg = loadImage("estrela.png");
}


function setup() {
  createCanvas(700, 700);
  bolinha = createSprite(350, 700); 
  bolinha.addImage("bola", bolinhaImg);
  bolinha.scale = 0.2;

  obstaculo1p1 = createSprite(150, 400, 200, 50);
  obstaculo1p1.velocityX = 5;
  obstaculo1p1.shapeColor = "purple";
  obstaculo1p2 = createSprite(350, 400, 250, 50);
  obstaculo1p2.velocityX = 5;
  obstaculo1p2.shapeColor = "white";
  obstaculo1p3 = createSprite(550, 400, 200, 50);
  obstaculo1p3.velocityX = 5;
  obstaculo1p3.shapeColor = "green";
  //edges = createEdgeSprites();
  parede1 = createSprite(270, 3500, 1, 100000);
  parede2 = createSprite(350, 3500, 1, 100000);
  parede3 = createSprite(10, 3500, 1, 100000);
  parede4 = createSprite(690, 3500, 1, 100000);

  parede1.visible = false;
  parede2.visible = false;
  parede3.visible = false;
  parede4.visible = false;

  linha = createSprite(350, 700, 700, 1);

  estrela = createSprite(350, 10);
  estrela.addImage("estrela", estrelaimg);
  estrela.scale = 0.1;


}

function draw() {
  background("black");

  obstaculo1p1.bounceOff(parede3);
  obstaculo1p2.bounceOff(parede3);
  obstaculo1p3.bounceOff(parede3);

  obstaculo1p1.bounceOff(parede4);
  obstaculo1p2.bounceOff(parede4);
  obstaculo1p3.bounceOff(parede4);

  if(bolinha.collide(obstaculo1p1) || bolinha.collide(obstaculo1p3)) {
    bolinha.x = 350;
    bolinha.y = 700;
    estado = 0;
  }

  

  bolinha.collide(parede1);
  bolinha.collide(parede2);
 
  if(keyDown("space")) {
    bolinha.velocityY = -10;
    estado = 1; //o estado do jogo 1 jogando
  }
  
   if(estado == 1) {
    bolinha.velocityY += 1;
  }
  
  camera.y = bolinha.y;

  drawSprites();

}

