const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine)

    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(370,270,250,10);
    ground2 = new Ground(770,270,250,10);

    //TOWER1
    //LEVEL1
    box1 =  new Box(320,250,30,40)
    box2 =  new Box(335,250,30,40)
    box3 =  new Box(350,250,30,40)
    box4 =  new Box(365,250,30,40)
    box5 =  new Box(380,250,30,40)
    box6 =  new Box(395,250,30,40)
    box7 =  new Box(410,250,30,40)

    //LEVEL2
    box8 =  new Box(335,230,30,40)
    box9 =  new Box(350,230,30,40)
    box10 =  new Box(365,230,30,40)
    box11 =  new Box(380,230,30,40)
    box12 =  new Box(395,230,30,40)

    //LEVEL3
    box13 =  new Box(350,210,30,40)
    box14 =  new Box(365,210,30,40)
    box15 =  new Box(380,210,30,40)

    //LEVEL4
    box16 =  new Box(365,190,30,40)


    //TOWER2
    //LEVEL1
    box17 =  new Box(735,230,30,40)
    box18 =  new Box(750,230,30,40)
    box19 =  new Box(765,230,30,40)
    box20 =  new Box(780,230,30,40)
    box21 =  new Box(795,230,30,40)

    //LEVEL2
    box22 =  new Box(750,210,30,40)
    box23 =  new Box(765,210,30,40)
    box24 =  new Box(780,210,30,40)

    //LEVEL3
    box25 =  new Box(765,190,30,40)

    ball = Bodies.circle(20,20,5,5);
    World.add(world,ball);
    
    console.log(ball.body)

    
}

function draw(){
    background(0)
    Engine.update(engine);

    rectMode(CENTER)

    //TOWER1
    //LEVEL1
    rect(box1.body.position.x,box1.body.position.y,30,40)
    rect(box2.body.position.x,box2.body.position.y,30,40)
    rect(box3.body.position.x,box3.body.position.y,30,40)
    rect(box4.body.position.x,box4.body.position.y,30,40)
    rect(box5.body.position.x,box5.body.position.y,30,40)
    rect(box6.body.position.x,box6.body.position.y,30,40)
    rect(box7.body.position.x,box7.body.position.y,30,40)

    //LEVEL2
    rect(box8.body.position.x,box8.body.position.y,30,40)
    rect(box9.body.position.x,box9.body.position.y,30,40)
    rect(box10.body.position.x,box10.body.position.y,30,40)
    rect(box11.body.position.x,box11.body.position.y,30,40)
    rect(box12.body.position.x,box12.body.position.y,30,40)

    //LEVEL3
    rect(box13.body.position.x,box13.body.position.y,30,40)
    rect(box14.body.position.x,box14.body.position.y,30,40)
    rect(box15.body.position.x,box15.body.position.y,30,40)

    //LEVEL4
    rect(box16.body.position.x,box16.body.position.y,30,40)


    //TOWER2
    //LEVEL1
    rect(box17.body.position.x,box17.body.position.y,30,40)
    rect(box18.body.position.x,box18.body.position.y,30,40)
    rect(box19.body.position.x,box19.body.position.y,30,40)
    rect(box20.body.position.x,box20.body.position.y,30,40)
    rect(box21.body.position.x,box21.body.position.y,30,40)

    //LEVEL2
    rect(box22.body.position.x,box22.body.position.y,30,40)
    rect(box23.body.position.x,box23.body.position.y,30,40)
    rect(box24.body.position.x,box24.body.position.y,30,40)

    //LEVEL3
    rect(box25.body.position.x,box25.body.position.y,30,40)
    
    ellipse(ball.body.position.x,ball.body.position.y,5,5);



    ground.display();
    ground1.display();
    ground2.display();
}
//function mouseDragged(){
//    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
//}

//function mouseReleased(){
 //   slingshot.fly();
//}