function preload(){
  pigeonAnime = loadAnimation("pigeon1.png", "pigeon2.png", "pigeon3.png", "pigeon4.png", 
  "pigeon5.png", "pigeon6.png");
  backgroundImg = loadImage("background.png");
}

function setup() {
  createCanvas(1000,500);
  pigeon = createSprite(100, height/2, 50, 50);
  pigeon.addAnimation("animation",pigeonAnime);
  pigeon.scale = 2;
  pigeon.velocityX = 12;
}

function draw() {
  background(backgroundImg);  

  if(pigeon.x > 1000){
    pigeon.x = 0;
  }

  drawSprites();
}