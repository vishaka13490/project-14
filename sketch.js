 var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sword;
var fruitsGroup,EnemyGroup;

function preload(){
  swordImage = loadImage("sword.png");
 fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  monsterImage = loadImage("alien1.png");
  monsterImage = loadImage("alien2.png");
  gameover = loadImage("gameover.png");
  
  score = 0;
} 

function setup() {
createCanvas(600,600);
  
  //creating a sword
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
//gameover1=createSprite(140,200,20,20);
//score  variables and Groups
  score = 0;
  fruitGroup = createGroup();
  EnemyGroup = createGroup();
}
  
  function draw() {
    background("lightblue");
    if(gameState===PLAY){
      
    //sword moves with mouse
    sword.y = World.mouseY;
    sword.x = World.mouseX;
 fruits();
 Enemy();
    
if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  score = score+2;
}
    
if(EnemyGroup.isTouching(sword)){
gameState=END;
}
    }
    else if(gameState===END){
      EnemyGroup.destroyEach();
    fruitGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    EnemyGroup.setVelocityXEach(0);
    sword.addImage(gameover);
    }
 drawSprites();

//display score
text("Score :"+score,300,30);
}

 function fruits(){
  if(World.frameCount%80===0){
    fruit = createSprite(400,200,20,20)
    fruit.scale = 0.2
    //fruit.debug=true;
    r=Math.round(random(1,4));
    if(r == 1){
      fruit.addImage(fruit1);
    } else if(r == 2){
      fruit.addImage(fruit2);
    } else if(r == 3){
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    } 
    fruit.y=Math.round(random(50,340));{
    
    fruit.velocityX = -7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
    
    }
    }
    }
  

function Enemy(){
  if(World.frameCount%200===0){
    monster = createSprite(400,20,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX = -8;
    monster.setLifetime = 50;
    EnemyGroup.add(monster);
  } 
}