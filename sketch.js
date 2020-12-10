 var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0; 
 
function preload(){
  
  
  monkey_running =  loadAnimation("monkey_0.png","monkey_1.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background(255);
  
 
  if(ground.x<0){
     ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
   if(keyDown("space")&& monkey.y >= 161) {
        monkey.velocityY = -16;
         
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  spawnObstacles();
  spawnbanana();
  
  monkey.collide(ground);
  drawSprites();
   
   stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    
  }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime :"+ survivalTime,200,50);
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage );
    banana.scale = 0.1;
    banana.velocityX = -3;
     
    banana.lifetime = 200;
     
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount % 240 === 0){
   var obstacle = createSprite(600,315,10,40);
   obstacle.addImage(obstaceImage);
   obstacle.velocityX = -6         
   obstacle.scale = 0.2;
   obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);
 }
}