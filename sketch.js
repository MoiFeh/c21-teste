const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

let ground;
let left;
let right;
let top_wall;
let ball;
let btn1;
let btn2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  let ball_options ={
    restitution: 0.95
  }
  
  ball = Bodies.circle(200,300,20,ball_options);

  btn1 = createImg("rigth.png");
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);

  btn2 = createImg("up.png");
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x, ball.position.y, 20);

  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0});
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.0, y:-0.05});
}