
var background, cat_running, mouse_running;
var backgroundImage;
var sittingCat, standingCat, movingCat, eatingMouse, movingMouse, lookingMouse;
var sittingCatImage, standingCatImage, eatingMouseImage, lookingMouseImage;

function preload() {
    //load the images here
backgroundImage=loadImage("images/garden.png");
cat_running=loadAnimation("images/cat2.png","images/cat3.png");
sittingCatImage=loadImage("images/cat1.png");
standingCatImage=loadImage("images/cat4.png");
movingMouse=loadAnimation("images/mouse2.png","images/mouse3.png");
eatingMouseImage=loadImage("images/mouse1.png");
lookingMouseImage=loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom=createSprite(900,600,120,200);
 tom.addAnimation("tomSleeping",sittingCatImage);
 tom.scale=0.1;

 jerry=createSprite(200,600,120,200);
 jerry.addAnimation("jerryRunning",eatingMouseImage);
 jerry.scale=0.1;

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide

    if(tom.isTouching(jerry)){
        tom.addAnimation("standingCatImage" , standingCatImage);
        tom.changeAnimation("standingCatImage");
        tom.velocityX=0;
        jerry.addAnimation("a" , lookingMouseImage);
        jerry.changeAnimation("a");     
    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW) {
    tom.velocityX=-5;
    tom.addAnimation("cat_running" , cat_running);
    tom.changeAnimation("cat_running");
    jerry.addAnimation("movingMouse" , movingMouse);
    jerry.changeAnimation("movingMouse");


}
}
