const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;
var score = 0;
var particle;
var turn = 0;
var gamestate;

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
    world = engine.world;
  ground = new Ground();
  for (var k=0;k<=width;k=k+80) {
    divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight));
  }
  for (var j = 75;j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 50;j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75;j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50;j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  for (index = 0; index < 801; index = index+80) {
    //var xpos  = 8*index;
    fill("white");
    text(score,index+20,550)
  }
  Engine.update(engine);
  ground.display();
  fill("white")
  line(0,400,800,400)
  for (var i = 0;i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount%40===0){
    particles.push(new Particle(random(80,750),10,10,10));
  }
  for (var j = 0;j < particles.length; j++) {
    particles[j].display();
  }
  
  for (var k = 0;k < divisions.length; k++) {
    divisions[k].display();
  }
  if(particle!=null) {
    particle.display();
    if(particle.body.position.y>760) {

      if(particle.body.position.x<300) {
        score = score+500;
        particle = null;
        if(count>=5) gamestate = "end";
      }
    }
  }
 
 
 

  //drawSprites();
}
function mousePressed() {
  if(gamestate!=="end") {
    count++;
    particle = new particle(mouseX,10,10,10);
  }
}