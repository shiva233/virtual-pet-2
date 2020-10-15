class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('images/Milk.png');
    }
  
    

        
  getFoodStock(){
    return this.foodStock;
  }

  updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   deductFood(){
    if(this.foodStock>0){
     this.foodStock=this.foodStock-1;
    }
   }


   
   getFeedTime(lastFed){


    this.lastFed = lastFed
    

   }

    display(){
        background(46,139,87);
  
        fill(255,255,254);
        textSize(15);
     
        var x=70,y=100; 
        imageMode(CENTER);
        
        if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    


   }
}

