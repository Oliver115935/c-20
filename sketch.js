var bgImg;
var cat;

function preload() {
    //load the images here

bgImg = loadImage(garden.png);
catimg = loadAnimation(images/cat1.png);
mouseimg1 = loadAnimation(images/mouse.png);
catimg2 = loadAnimation(cat2.png,cat4.png);
mouseimg2 = loadAnimation(mouse2.png,mouse3.png);


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(garden.png);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25
    }

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25
    }

  //For moving and changing animation write code here
}
