class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      fill("blue")
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      
   
    }
  };
  