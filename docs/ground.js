class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      //this.width = width;

      //this.height = height;
      this.ground = Bodies.rectangle(400,790,780,20,options);
      World.add(world, this.ground);
    }
    display(){
      var pos =this.ground.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y,800,20);
    }
  };
