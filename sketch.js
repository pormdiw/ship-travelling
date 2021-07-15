var ship,ship_floating;
var sea, sea_image;

function preload(){

    ship_floating = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
    sea_image = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  //creating sea
  sea = createSprite(200,180)
  sea.addImage("sea",sea_image)
  sea.scale = 0.3;
  sea.velocityX = -2;
  sea.x = 200;
  
  //code to reset the background
  if(sea.x < 0){

    sea.x = sea.width /2;
}
  // creating ship
  ship = createSprite(200,250,30,30);
  ship.addAnimation("floating", ship_floating);
  
  //adding scale and position to ship
  ship.scale = 0.25;
  
}


function draw() {
   
  background = "white"; 
  drawSprites();
}