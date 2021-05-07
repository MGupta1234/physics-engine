const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var mayank;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var barrier={
    isStatic:true
  }
  var recover={
    restitution:0.9
  }
  ball=Bodies.circle(200,200,30,recover);
  mayank=Bodies.rectangle(200,380,100,20,barrier);
  World.add(world,mayank);
  World.add(world,ball);
  console.log(mayank.position.x);
  console.log(mayank.position.y);
  
}

function draw() {
  background(0);  
  
  Engine.update(engine);
  rectMode(CENTER);
  fill("green");
  rect(mayank.position.x,mayank.position.y,400,20);
  ellipseMode(RADIUS);
  fill("orange");
  ellipse(ball.position.x,ball.position.y,30);
}