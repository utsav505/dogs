//Create variables here
var doggo,dog,dogIMG,dogHapp,foodStock,foodS;

function preload(){

  dogIMG = loadImage("dogIMG.png");
  dogHapp = loadImage("dogImg1.png");
  //load images here
}

function setup() {
  createCanvas(800, 700);
  background(46, 139, 87);
  database = firebase.database();
  dog = createSprite(400,350);
  dog.addImage(dogIMG);
  dog.addImage("ok",dogHapp);
  dog.scale=0.3;

  foodStock = database.ref('food');
  foodStock.on("value",readStock);

}


function draw(){  

  if (keyDown(UP_ARROW)) {
    writeStock(foodS);
    
    dog.changeImage("ok",dogHapp);    
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();

}

function writeStock (x){
  database.ref('/').update ({
 
  })
  if (x<=0){
    x = 0;
  } else {
    x = x-1;
  } 
}

