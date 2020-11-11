const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var box2,ground,box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(400,300,70,70);
  ground = new Ground(400,390,800);
  box2 = new Box(420,250,70,70);
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  ground.display();
  box2.display();
}