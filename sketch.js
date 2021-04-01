var bg ;
var cat  , Mouse ;


function preload() {
    //load the images here

    bg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png")

    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
    cat = createSprite(700,500,80,30)
    cat.addAnimation("cat_sitting",catImg1);
    cat.scale = 0.1;
    cat.debug = true;

    Mouse = createSprite(200,500)
    Mouse.addAnimation("mouse_standing" , mouse1);
    Mouse.scale = 0.1 ;
    Mouse.debug = true;

    
}   

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x - Mouse.x < (cat.width - Mouse.width)){
    Mouse.addAnimation("mouse_happy",mouse3);
    Mouse.changeAnimation("mouse_happy") 

    cat.velocityX = 0;
    cat.addAnimation("cat_standing",catImg3)
    cat.changeAnimation("cat_standing")
     
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===RIGHT_ARROW){
    Mouse.addAnimation("mouse_teasing",mouse2);
    Mouse.frameDelay = 30;
    Mouse.changeAnimation("mouse_teasing");

  }
  if(keyCode===LEFT_ARROW){
      Mouse.addAnimation("mouse_teasing",mouse2);
      Mouse.frameDelay = 30;
      Mouse.changeAnimation("mouse_teasing");

      cat.velocityX = -5;
      cat.addAnimation("cat_running",catImg2)
      cat.changeAnimation("cat_running")
  
  }

}
