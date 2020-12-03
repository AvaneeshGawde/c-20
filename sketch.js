/*var frect;
var mrect;

function setup() {
  createCanvas(800,400);
 frect= createSprite(400, 200, 100, 20);
 mrect = createSprite(100,100,50,50);
  mrect.shapeColor="green";
  frect.shapeColor="green";

}

function draw() {
  background(255,255,255); 
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  
  if (mrect.x-frect.x <= mrect.width/2+frect.width/2 && 
      frect.x-mrect.x<= mrect.width/2+frect.width/2 && 
      mrect.y-frect.y<= mrect.height/2+frect.height/2 &&
      frect.y-mrect.y<= mrect.height/2+frect.height/2){
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }

  else{
    mrect.shapeColor="green";
    frect.shapeColor="green";
  }
  drawSprites();
}*/
var squ;
var rect1;
function setup(){
  createCanvas(800,400);

  squ=createSprite(400,100,50,50);
  rect1=createSprite(400,400,50,50);
  rect1.shapeColor="green"
 squ.velocityY = 3;
 rect1.velocityY = -3;


}
function draw(){
background("white");

if (squ.x-rect1.x < squ.width/2+rect1.width/2 && 
    rect1.x-squ.x < squ.width/2+rect1.width/2 ){
      //console.log("touch");

      squ.velocityX = squ.velocityX * (-1);
      rect1.velocityX = rect1.velocityX * (-1);
    }


 if (squ.y-rect1.y< squ.height/2+rect1.height/2 &&
     rect1.y-squ.y < squ.height/2 + rect1.height/2){
     squ.velocityY = squ.velocityY * (-1);
      rect1.velocityY = rect1.velocityY * (-1);
     }
drawSprites();
}