class Cannon{
    constructor(x,y,width,height) {
      var options = {
         density:2,
         friction:2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("cannon.png");
    }
    display(){
      var pos =this.body.position;
      fill("black");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
