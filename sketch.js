//Create variables here

var dogImg,happyDogImg,foodS,foodStock,dog,feedButton,addButton,fedTime,lastFed
var foodObj

function preload()
{

 
  //load images here
  
  dogImg = loadImage("images/Dog.png");

  happyDogImg = loadImage("images/happydog.png");

}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();

  dog = createSprite(250,250,20,20);

  dog.scale = 0.2;

  dog.addImage("normal",dogImg)

  foodStock=database.ref('Food')
    foodStock.on("value",readStock);

    
  foodObj = new Food();

  feedButton = createButton('feed');
  addButton = createButton('Add Food')
  feedButton.mousePressed(feedDog)
  addButton.mousePressed(addFood)

  feedButton.position(500,100);
  addButton.position(570,100);



}


function draw() {  

  background(46, 139, 87);


  //if(keyWentDown(UP_ARROW)){

    //writeStock(foodS);
    //dog.addImage(happyDogImg);

  //}

  

  foodObj.display()


  drawSprites();
  //add styles here

  
  fedTime = database.ref('lastFed');
  fedTime.on("value",function(data){

    lastFed=data.val()

  });


  fill(255,255,255);

  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 50,30);
}else if(lastFed==0){
    text("Last Feed : 12 AM",50,30);
}else{
    text("Last Feed : "+ lastFed + " AM", 50,30);
}


  text("Food Remaining:"+ foodS,150,350);


}


function readStock(data){

  foodS=data.val();

}

function writeStock(x){


    if(x<=0){

      x=0;

    }else{

      x=x-1;

    }


    database.ref('/').update({

      Food:x

    })


}

function addFood() {



  foodS++

  database.ref('/').update({

    Food:foodS

  })

}

function feedDog(){
  dog.addImage(happyDogImg);

  foodObj.updateFoodStock(foodObj.getFoodStock(-1));
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FedTime:hour(),
  
  })
}