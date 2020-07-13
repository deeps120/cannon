class Ball{
    constructor(x,y,width,height) {
      var options = {
         density:2,
        restitution:2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
     this.image=loadImage("balls.png");
    }
    display(){
      var pos =this.body.position;
      
      this.body.VelocityX=3;
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
