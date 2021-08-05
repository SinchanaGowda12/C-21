var movingrect;
var object1;
var object2;
var object3;
var object4;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400,200,100,80);
  object1 = createSprite(300,400,50,50);
  object2 = createSprite(500,400,50,50);
  object3 = createSprite(700,400,50,50);
  object4 = createSprite(900,400,50,50);

  movingrect.shapeColor="green";
  object1.shapeColor="green";
  object2.shapeColor="green";
  object3.shapeColor="green";
  object4.shapeColor="green";

  movingrect.debug= true;
  object1.debug= true;
  object2.debug= true; 
  object3.debug= true;
  object4.debug= true;
}

function draw() {
  background(0,0,0);  

movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

if (isTouching(movingrect,object4)){
    movingrect.shapeColor="blue";
    object4.shapeColor="blue";
    }
    else{
      movingrect.shapeColor="green";
      object4.shapeColor="green";
    }



  drawSprites();
}

function isTouching(mr,ob4){
if(mr.x - ob4.x < mr.width/2 + ob4.width/2 &&
   ob4.x - mr.x < mr.width/2 + ob4.width/2 &&
   mr.y - ob4.y < mr.height/2 + ob4.height/2 &&
   ob4.y - mr.y < mr.height/2 + ob4.height/2){
   return true;
   }
   else{
    return false}
}
