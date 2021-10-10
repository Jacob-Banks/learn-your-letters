
let whois= readValue("test1"); 
console.log(whois)
let ragdoll='';




// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Events = Matter.Events,
    Body = Matter.Body,
    Bodies = Matter.Bodies,

    Common = Matter.Common,
    Composite = Matter.Composite,
    Composites = Matter.Composites;

// create an engine
var engine = Engine.create(),
    world = engine.world;  

// create renderer
    
var gw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var gh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var wi  = gw-50;
var he  = gh-50;


// create renderer
    var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: wi-20,
        height: he,
        background: 'transparent',
    
        wireframeBackground: 'transparent',
        showAngleIndicator: false,
        wireframes: false,
    }
});



// run the renderer
Render.run(render);

// runner
let runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);


// make the ragdoll in the middle of the screen
let screenWidth= wi;
let screenHeight= he;
ragDollFill();

// create objects in the world
var ballA = Bodies.circle(50, 40, 40,{ render: { fillStyle: 'yellow', strokeStyle: 'black',lineWidth: 5 }}); 
var ballB = Bodies.circle(80, 60, 30,{ render: { fillStyle: 'blue', strokeStyle: 'black',lineWidth: 3}});
var ballC = Bodies.circle(250, 40, 20,{ render: { fillStyle: 'red', strokeStyle: 'black',lineWidth: 5 }}); 
var ballD = Bodies.circle(80, 60, 50,{ render: { fillStyle: 'green', strokeStyle: 'black',lineWidth: 3}});
var boxRounded1 = Bodies.rectangle( 443,   -0,  200, 30, {
    chamfer: { radius: 10 },   render:  {fillStyle: 'violet', strokeStyle: 'black',lineWidth: 3}});
var boxRounded2 = Bodies.rectangle( 443,   -0,  100, 50, {
    chamfer: { radius: 15 },   render:  {fillStyle: 'orange', strokeStyle: 'black',lineWidth: 3}});
var boxRounded3 = Bodies.rectangle( 443,   -0,  80, 80, {
    chamfer: { radius: 20 },   render:  {fillStyle: 'purple', strokeStyle: 'black',lineWidth: 3}});
var boxRounded4 = Bodies.rectangle( 443,   -0,  120, 40, {
    chamfer: { radius: 15 },   render:  {fillStyle: 'cyan', strokeStyle: 'black',lineWidth: 3}});


World.add(world, [ ballA, ballB, ballC, ballD,  boxRounded1, boxRounded2,boxRounded3,boxRounded4,ragdoll ]);

World.add(world, [
  // rectangle (     x,     y,  w,  h,  [options])
  Bodies.rectangle(wi/2, -1500,  wi, 101, { isStatic: true }), //ceiling
  Bodies.rectangle(wi/2,     he,  wi, 101, { isStatic: true }), //floor
  Bodies.rectangle(  0,   he, 50,   he*2, { isStatic: true }), //right
  Bodies.rectangle(  wi-28,   he, 50,   he*2, { isStatic: true })  //left
]);

 // add mouse control
 var mouse = Mouse.create(render.canvas),
 mouseConstraint = MouseConstraint.create(engine, {
     mouse: mouse,
     constraint: {
         stiffness: 0.2,
         render: {
             visible: false
         }
     }
 });
 // add mouse to the world
World.add(world, mouseConstraint);
// keep the mouse in sync with rendering
render.mouse = mouse;


// add keyboard control that applies force to body parts defined below
window.addEventListener("keydown", event => {
  var time = engine.timing.timestamp;
    const FORCE_VALUE = 0.05;
    switch (event.keyCode) {
      case 81: //q
        Matter.Body.applyForce(leftLowerArm, leftLowerArm.position, {
          x: -FORCE_VALUE,
          y: -FORCE_VALUE,
        });
        break;
      case 87: //w
        Matter.Body.applyForce(leftLowerLeg, leftLowerLeg.position, {
          x: -FORCE_VALUE,
          y: FORCE_VALUE,
        });
        break;
      case 79: //o
        Matter.Body.applyForce(rightLowerArm, rightLowerArm.position, {
          x: FORCE_VALUE,
          y: -FORCE_VALUE,
        });
        break;
      case 80: //p
        Matter.Body.applyForce(rightLowerLeg, rightLowerLeg.position, {
          x: FORCE_VALUE,
          y: FORCE_VALUE,
        });
        break;
        case 32: //space?
        Composite.rotate(ragdollH, Math.sin(time * 0.001) * 0.01, {
          x: 300,
          y: 300
      });
        break;
    }
  });

  var time = engine.timing.timestamp;
  var wait = 0;
  Events.on(engine, "beforeUpdate", function (event) {
    time = engine.timing.timestamp;
    wait = time % 20;
  });
  Events.on(engine, 'collisionStart', function(event) {
    var pairs = event.pairs;
    if (whois == 'emma') {
      if((pairs[0].bodyA.id==1 || pairs[0].bodyB.id==1)&&(pairs[0].bodyA.id>33 ||pairs[0].bodyB.id>33)){
        bang();
        console.log("colision between " + pairs[0].bodyA.id + " - " + pairs[0].bodyB.id);
      }
    };
    if (whois != 'emma') {
      if((pairs[0].bodyA.id==1 || pairs[0].bodyB.id==1)&&(pairs[0].bodyA.id>23 ||pairs[0].bodyB.id>23)){
        bang();
        console.log("colision between " + pairs[0].bodyA.id + " - " + pairs[0].bodyB.id);
      }
    };
  });

// test to find out id of mouse click
//Events.on(mouseConstraint, 'mousedown', function(event) {console.log(mouseConstraint.body.id)});


  function readValue(item){ // find out the nameToSpell from home page
    var x = localStorage.getItem(item);
    return x;
}
function ragDollFill(){//play next animation frame
 
  console.log("what is this: " + screenWidth/2);
  switch (whois)  { // get which backgrouds animations to use
    case 'harvey':
      
      ragdoll= createARagdoll(200, 400, 'H',screenWidth/2, screenHeight*0.45);
      break;
    case 'emma':
      ragdoll= createARagdoll(200, 400, 'E',screenWidth/2, screenHeight*0.45);
       break;
    case 'frank':
      ragdoll= createARagdoll(200, 400, 'F',screenWidth/2, screenHeight*0.45);
      break;
   

  }

}
function bang() {
  console.log("should play bonk");
  var bonk = new Howl({src:"./audio/bonk.mp3"});
  bonk.play();
}