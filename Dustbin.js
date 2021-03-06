class Dustbin {
    constructor(x, y, width, height) {
        
        var options = {isStatic:true};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("sprites/dustbin.png");
      
        World.add(world, this.body);
    }
   
    display(){

        fill("blue");
        imageMode(CENTER);
        image(this.image, 1180, 180, 150, 150);
    }
}