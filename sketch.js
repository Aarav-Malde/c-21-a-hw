var bullet, wall;
var speed, weight;
var damage,thickness;

function setup() {
  createCanvas(800,400);
  bullet = createSprite(50,200,50,15);
  wall = createSprite(750,200,50,height/2); 

  bullet.shapeColor="white";
  wall.shapeColor="black";

 
}

function draw() {
  background("#7CFC00");  

  speed= random(223,321);
  weight= random(30,52);
  thickness=random(22,83);

  bullet.velocityX =speed;
  
  fill("#191970");
  text("DAMAGE DONE IS ",350,50);
  text(damage,500,50);

 damageBullet();


 if(bullet.x>750){
   bullet.velocityX=0;
 }
 drawSprites();
}



function damageBullet(){
    damage = 0.5*weight*speed*speed/thickness/thickness/thickness

  if(isTouching(bullet,wall)){
    if(damage<10){
      wall.shapeColor="green";
      bullet.velocityX=0;
    }
    else if(damage>10){
      wall.shapeColor="red";
      bullet.veloctyX=0;
    }
  }
}
    
  
