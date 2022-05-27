
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftwall;
var rightwall;
var world;
var engine;



function setup()
 {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var balloptions=
	{
		restitution:0,
		density:1.2
	}
	ball=Bodies.circle(200,200,10,balloptions)
    World.add(world,ball)

	ground =new Ground(400,650,800,20);
	
	leftwall = new Ground(550,590,20,100)
	rightwall = new Ground(780,590,20,100)

	
	// isStatic = true




	//Create the Bodies Here.


	Engine.run(engine);
  
}

function applyForceUpwards()
{

Matter.Body.applyForce(ball,{x:0,y:0}, {x:0,y:-0.01})

}

function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,10,10)
  

  ground.show();
  leftwall.show();
  rightwall.show();

  if(keyIsDown(UP_ARROW))
  {
	Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.2,y:-0.2})
  }


  drawSprites();
 
}



