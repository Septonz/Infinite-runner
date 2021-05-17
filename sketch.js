
var player 
var score=0
var END =0;
var PLAY =1;
var gameState = PLAY;
function preload(){

gameImg=loadImage("e2a3f767395688206be60fb8e9453b96.jpg")
  playerImg=loadImage("ggggggggg-1.png")
  obsatcleImg=loadImage("Untitled-1.png")
  g=loadImage("lklklklklklk.png");
  r=loadImage("vhvvhv.png");
  trian=loadImage("sgfdgsg.png");
  music=loadSound("Today's Plan - DJ Freedem.mp3")
}

function setup() {
   createCanvas(400, 400);
     music.loop();

  game=createSprite(200,200);
game.addImage(gameImg)
  game.scale=0.5
  game.velocityX=-3
  
  player=createSprite(200,150)
  player.addImage(playerImg)
player.scale=0.05  
  
  inv=createSprite(200,400,400)
  inv.height=7
  inv.shapeColor = "red"

  gi=createSprite(160,200)
  gi.addImage(g)
  gi.visible=false
  
  restart=createSprite(200,320)
  restart.addImage(r)
  restart.scale=0.3
  restart.visible=false
  redObstacleGroup = new Group()
 
  whiteObstacleGroup = new Group() 
   triObstacleGroup = new Group() 
}

function draw() {
 background("")
  
  if(gameState===PLAY){
      game.velocityX=0
 score=score+Math.round(frameRate()/60);
  // game.velocityX=-(6 + 3*score/100);
  
  if(game.x<0){
    game.x=game.width/4;
  }


    if(keyDown("space")){
      player.velocityY=-10;   
       
    }
  player.velocityY=player.velocityY+0.8;
   
  player.collide(inv)

  spawnObstacles()
  spawnObstaclesq()
    spawntriangles()
  if(player.isTouching(whiteObstacleGroup)){
    player.velocityY=0
  }
  
  if(player.isTouching(redObstacleGroup)){
    gameState=END;
    
  }
    if(player.isTouching(triObstacleGroup)){
      gameState=END;
    }
  } 
  
  if(gameState===END){
    player.x=200
    player.y=200
    gi.visible=true
    restart.visible=true
    redObstacleGroup.setVelocityEach(0);
    whiteObstacleGroup.setVelocityEach(0);
    player.velocityY=0
    game.velocityX=0
      if(mousePressedOver(restart)){
      reset()
      
    }
  }
    drawSprites()
  textSize(20)
 fill("white")
  text("SCORE: "+score,275,30);

}


function spawnObstacles(){
    if (frameCount % 40===0){
    var obstacle= createSprite(450,Math.round(random(100,350)))
       obstacle.shapeColor = "white"
     obstacle.velocityX=-4
        player.collide(obstacle)
    obstacle.scale=0.5;
     obstacle.depth=player.depth
  
    whiteObstacleGroup.add(obstacle)
    }
  // obstacle.addImage(obstacleImg)
    
    // var rand = Math.round(random(1,6))
    // switch(rand){
    //   case 1:obstacle.addImage(obstacleImg);
    //     break 
        
//             case 2:obstacle.addImage(obstacle2);
//         break 
        
//             case 3:obstacle.addImage(obstacle3);
//         break 
        
//             case 4:obstacle.addImage(obstacle4);
//         break 
        
//             case 5:obstacle.addImage(obstacle5);
//         break 
        
//             case 6:obstacle.addImage(obstacle6);
//         break 
        // default: break;  
        

  
  
  
  
  
  
}



function spawnObstaclesq(){
    if (frameCount % 125===0){
    var obstacleq= createSprite(450,Math.round(random(110,300)))
       obstacleq.shapeColor = "red"
     obstacleq.velocityX=-4
        // player.collide(obstacleq)
    obstacleq.scale=0.5;
     obstacleq.depth=player.depth
    player.depth=player.depth+1
           redObstacleGroup.add(obstacleq)

    }
  

  
}
function spawntriangles(){
    if (frameCount % 15===0){
    var triangles= createSprite(400,380)
       triangles.shapeColor = "red"
     triangles.velocityX=-4
      triangles.addImage(trian)
        // player.collide(obstacleq)
    triangles.scale=0.05;
     triangles.depth=player.depth
    player.depth=player.depth+1
           triObstacleGroup.add(triangles)

    }
  

  
}

function reset(){
  gameState=PLAY;
  score=0;

  gi.visible=false
  restart.visible=false
  redObstacleGroup.destroyEach()
    whiteObstacleGroup.destroyEach()
}