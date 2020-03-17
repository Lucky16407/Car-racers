class Form {
    constructor(){
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h4');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
     var title = createElement('h2');
     title.html("Car Racers");
     title.position(400,200);

     
     this.input.position(400,350);

     
     this.button.position(400,400);

     this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
        
        player.name = this.input.value();
        
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Welcome To The World Of Racing,Oh Brave "+player.name);
        this.greeting.position(450,160);
       

     });

    }
}