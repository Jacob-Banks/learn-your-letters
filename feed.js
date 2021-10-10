
let whois= readValue("test1"); 
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





// make the ragdoll in the middle of the screen
let screenWidth= wi;
let screenHeight=he;
ragDollFill();

// set cheecks for moving objects
let leftLimit=false;
let upperLimit=false;
let lowerLimit=true;
let rightLimit=true;
let foodItem =0;
var gravity = engine.world.gravity;
let level=1;
var moving=0;
var velocity=0.00400001;
let timer=0;
let bites=0

// create objects in the world
var box0 = Bodies.circle( wi*0.15   ,   he*0.5   ,  50, {label: 'fran' ,render: { sprite: { texture: './img/faceFranka.png'}}}); 
var box8 = Bodies.circle( wi*0.66   ,   he*0.5    ,  50, {label: 'sol' ,render: { sprite: { texture: './img/faceSolomona.png'}}});
var box4 = Bodies.circle( wi*0.44   ,   he*0.5   ,  50, {label: 'andr' ,render: { sprite: { texture: './img/faceAndrea.png'}}});
var box6 = Bodies.circle( wi*0.55   ,   he*0.5   ,  50, {label: 'alice' ,render: { sprite: { texture: './img/faceAlicea.png'}}});

var box2 = Bodies.circle( wi*0.77   ,   he*0.5    ,  50, {label: 'emm' ,render: { sprite: { texture: './img/faceEmmaa.png'}}});
var box5 = Bodies.circle( wi*0.25   ,   he*0.5    ,  50, {label: 'luke'  ,render: { sprite: { texture: './img/faceLuke.png'}}});
var box3 = Bodies.circle( wi*0.59   ,   he*0.5    ,  50, {label: 'ben' , render:{ sprite: { texture: './img/faceBena.png'}}});
var box7 = Bodies.circle( wi*0.86   ,   he*0.5    ,  50, {label: 'vero',render: { sprite: { texture: './img/faceVeroa.png'}}});
var box1 = Bodies.circle( wi*0.76   ,   he*0.5    ,  50,{label: 'harv',render: { sprite: { texture: './img/faceHarveya.png'}}});
var box9 = Bodies.circle( 850   ,   100   ,  50, {render: { sprite: { texture: './img/faceFranka.png'}}});

var boxA  = Bodies.circle(wi*0.1, he/2     , 30,{label: 'food' , render:{ sprite: { texture: './img/food/brocollib.png'}}});
var boxB  = Bodies.circle(wi*0.1, he/2     , 30,{label: 'food' , render:{ sprite: { texture: './img/food/avocadob.png'}}});
var boxC  = Bodies.circle(wi*0.1, he/2     , 30,{label: 'food' , render:{ sprite: { texture: './img/food/hamburgerb.png'}}});
var boxD  = Bodies.circle(wi*0.1, he/2     , 30,{label: 'food' , render:{ sprite: { texture: './img/food/pizzab.png'}}});
var boxE  = Bodies.circle(wi*0.1, he/2     , 30,{label: 'food' , render:{ sprite: { texture: './img/food/cakeb.png'}}});

// rectangle (     x,     y,  w,  h,  [options])
var ceiling = Bodies.rectangle(wi/2, -10,  wi, 101, {label: 'wall', isStatic: true }); //ceiling
var floor   = Bodies.rectangle(wi/2,     he,  wi, 101, { label: 'wall',isStatic: true }); //floor
var right   = Bodies.rectangle(  0,   he, 50,   he*2, { label: 'wall',isStatic: true }); //right
var left    = Bodies.rectangle(  wi-28,   he, 50,   he*2, {label: 'wall', isStatic: true });  //left
World.add(world, [ceiling,floor,right,left]);

////////put objects in world ,ragdoll
World.add(world, [boxA,ragdoll]);
World.add(world, [box0]);

            // body name,leftlimit,upperlimit,lowerlimit,rightlimit
let face0 = [box0, true,false,true,false,wi*0.25,he*0.5]; 
let face1 = [box1, false,false,false,true,wi*0.66,he*0.5]; 
let face2 = [box2, true,false,true,false,wi*0.44,he*0.5]; 
let face3 = [box3, false,false,true,false,wi*0.55,he*0.5];
let face4 = [box4, false,true,false,true,wi*0.77,he*0.5];
let face5 = [box5, false,false,true,false,wi*0.36,he*0.5];
let face6 = [box6, false,true,false,true,wi*0.59,he*0.5];
let face7 = [box7, false,false,true,false,wi*0.76,he*0.5];
let feed=[boxA,boxB,boxC,boxD,boxE,box8] 

// add keyboard control that applies force to body parts defined below
window.addEventListener("keydown", event => {
  var time = engine.timing.timestamp;
    const FORCE_VALUE = 0.05;
    switch (event.keyCode) {
       
        case 37: //left
        moving=10;
        Matter.Body.applyForce(feed[foodItem], feed[foodItem].position, {
          x: -0.03,
          y: 0,
        });
        break;
        case 38: //up
        moving=10;
        Matter.Body.applyForce(feed[foodItem],feed[foodItem].position, {
          x: 0 ,
          y: -0.033 ,
          
        });
        break;

        case 39: //right
        moving=10;
        Matter.Body.applyForce(feed[foodItem],feed[foodItem].position, {
          x: 0.03,
          y: 0,
        });
        break;
        case 40: //down
        moving=10;
        Body.applyForce(feed[foodItem],feed[foodItem].position, {
          x: 0,
          y: 0.03,
        });
    }
  });
  Events.on(mouseConstraint, 'mousedown', function(event) {console.log(mouseConstraint.body.label)})  
Events.on(engine, "beforeUpdate", function (event) {
  timer=timer+1;
  
  switch(level){
    case 1:
      moveVertical(face0);
    break;
    case 2:
      moveVertical(face0);moveVertical(face1);moveVertical(face2); 
    break;
    case 3:
      moveVertical(face0);moveVertical(face1);moveVertical(face2);moveVertical(face3);moveVertical(face4);
    break;
    case 4:
      moveVertical(face0);moveVertical(face1);moveVertical(face2);moveVertical(face3);moveVertical(face4);moveVertical(face5);
    break;
    case 5:
      moveVertical(face0);moveVertical(face1);moveVertical(face2);moveVertical(face3);moveVertical(face4);moveVertical(face5);moveVertical(face6);moveVertical(face7);  
    break;
    
  }
  
  if( foodItem== feed.length-1){
    World.remove(world, [box0,box1,box2,box3,box4,box5,box6,box7,box8]);  
  }
  if(mouseConstraint.body==ceiling){
    velocity= velocity*1.05;
  }
  if(mouseConstraint.body==floor){
    velocity= velocity*0.95;
  }
  if  (feed[foodItem].speed>15){
    Body.setVelocity(feed[foodItem], {
      x: 12,
      y: feed[foodItem].velocity.y
    });
        console.log('woah there nelly');
  }

  //turn gravity off for the circle
  Body.applyForce(feed[foodItem], feed[foodItem].position, {
    x: -gravity.x * gravity.scale * feed[foodItem].mass,
    y: -gravity.y * gravity.scale * feed[foodItem].mass
  })}
   
);
  
Events.on(engine, 'collisionStart', function(event) {
  let pairs = event.pairs;
  pairs.forEach(function(pair) {
    if (pair.bodyB.label == 'food'&& timer>30) {
      switch (pair.bodyA.label) {
          case 'sol':
            bang();
            intecepted();
            bites=bites+1;
            console.log(bites);
            timer=0
          break;
          case 'ben':
            bang();
            intecepted();
            bites=bites+1;
            console.log(bites);
            timer=0
          break;
          case 'harv':
            bang();
            intecepted();
            timer=0 
            bites=bites+1;
            console.log(bites);
          break;
          case 'vero':
            bang();
            intecepted();
            timer=0
            bites=bites+1;
            console.log(bites);
          break;
          case 'emm':
            bang(); 
            intecepted();
            timer=0
            bites=bites+1;
            console.log(bites);
          break;
          case 'luke':
            bang();
            intecepted();
            timer=0
            bites=bites+1;
            console.log(bites);
          break;
          case 'andr':
            timer=0
            bites=bites+1;
            bang();
            intecepted();
            console.log(bites);
          break;
          case 'alice':
              timer=0
              bites=bites+1;
              bang();
              intecepted();
              console.log(bites);
          break;  
          case 'fran':
            bang();
            intecepted();  
            timer=0
            bites=bites+1;
            console.log(bites);
            break;
          case 'head':
            bang();
            console.log("colision between " + pairs[0].bodyA.id + " - " + pairs[0].bodyB.id);
            takeAway();
            level++;
            foodItem++
            bringBack()
            timer=-20;
            bites=0;
            velocity=velocity+0.002;
          default:
            break;
      
      }
    }
  })  
});


function readValue(item){ // find out the ragdoll from home page
  var x = localStorage.getItem(item);
  return x;
}

function ragDollFill(){//
  switch (whois)  { // get which backgrouds animations to use
    case 'harvey':
      ragdoll= createARagdoll(screenWidth*0.9, 400, 'H',screenWidth*0.9, screenHeight/2);
      break;
    case 'emma':
      ragdoll= createARagdoll(200, 400, 'E',screenWidth/2, screenHeight/2);
       break;
    case 'frank':
      ragdoll= createARagdoll(200, 400, 'F',screenWidth/2, screenHeight/2);
      break;
  }
}


function bang() {// say bonk on head touch
  var bonk = new Howl({src:"./audio/yummy.mp3"});
  bonk.play();
}

// face [body name, leftlimit, upperlimit, lowerlimit, rightlimit]
function moveHorizontal(face){
  if (face[1]==true && face[4]==false){
    Body.applyForce(face[0], face[0].position, {
      x: -velocity,
      y: -gravity.y * gravity.scale * face[0].mass
    })
  }
  if (face[4]=true && face[1]==false){
    Body.applyForce(face[0], face[0].position, {
      x: velocity,
      y: -gravity.y * gravity.scale * face[0].mass
    })
  }
  if(face[0].position.x<200){ //magic number ***********
    face[1]=false,
    face[4]=true;
  }
  if(face[0].position.x>screenWidth-400){//magic number ***********
    face[1]=true,
    face[4]=false;
 }
 if (face[0].position.y<0){
  
  Body.applyForce(face[0], face[0].position, {
    x: 0,
    y: 0.06013
  })
 }
}

// face [body name, leftlimit, upperlimit, lowerlimit, rightlimit]
function moveVertical(face){
  if(face[2]==false && face[3]==true){
    Body.applyForce(face[0], face[0].position, {
      x: 0,
      y: -velocity*3
    })
  }
  if(face[2]==true && face[3]==false){
    Body.applyForce(face[0], face[0].position, {
      x: 0,
      y:  -gravity.y * gravity.scale * face[0].mass +velocity
    })
  }
  if (face[0].position.y<250){//magic number ***********
    face[2]=true;
    face[3]=false;
  }
  if (face[0].position.y>he-275){//magic number ***********
    face[2]=false;
    face[3]=true;
  }
}

  function setWorldPositions(){
    switch(level){
      case 2:
        Matter.Body.setPosition(box0, {x: face0[5], y: face0[6]});
        Matter.Body.setPosition(box1, {x: face1[5], y: face1[6]});
        Matter.Body.setPosition(box2, {x: face2[5], y: face2[6]}); 
      break;
      case 3:
        Matter.Body.setPosition(box0, {x: face0[5], y: face0[6]});
        Matter.Body.setPosition(box1, {x: face1[5], y: face1[6]});
        Matter.Body.setPosition(box2, {x: face2[5], y: face2[6]}); 
        Matter.Body.setPosition(box3, {x: face3[5], y: face3[6]});
        Matter.Body.setPosition(box4, {x: face4[5], y: face4[6]}); 
      break;
      case 4:
        Matter.Body.setPosition(box0, {x: face0[5], y: face0[6]});
        Matter.Body.setPosition(box1, {x: face1[5], y: face1[6]});
        Matter.Body.setPosition(box2, {x: face2[5], y: face2[6]}); 
        Matter.Body.setPosition(box3, {x: face3[5], y: face3[6]});
        Matter.Body.setPosition(box4, {x: face4[5], y: face4[6]});
        Matter.Body.setPosition(box5, {x: face5[5], y: face5[6]}); 
      break;
      case 5:
        Matter.Body.setPosition(box0, {x: face0[5], y: face0[6]});
        Matter.Body.setPosition(box1, {x: face1[5], y: face1[6]});
        Matter.Body.setPosition(box2, {x: face2[5], y: face2[6]}); 
        Matter.Body.setPosition(box3, {x: face3[5], y: face3[6]});
        Matter.Body.setPosition(box4, {x: face4[5], y: face4[6]});
        Matter.Body.setPosition(box5, {x: face5[5], y: face5[6]});
        Matter.Body.setPosition(box6, {x: face6[5], y: face6[6]});
        Matter.Body.setPosition(box7, {x: face7[5], y: face7[6]});
      break;
    }                           
}

function bringBack(){
  switch(level){
    case 2:
      World.add(world, [box0,box1,box2,feed[foodItem]]); 
    break;
    case 3:
      World.add(world, [box0,box1,box2,box3,box4,feed[foodItem]]);
    break;
    case 4:
      World.add(world, [box0,box1,box2,box3,box4, box5,feed[foodItem]]);
    break;
    case 5:
      World.add(world, [box0,box1,box2,box3,box4, box5,box6,box7,feed[foodItem]]);
    break;
    
  }
  setWorldPositions();
}

function takeAway(){
  switch(level){
    case 1:
      World.remove(world, [box0,feed[foodItem]]); 
    break;
    case 2:
      World.remove(world, [box0,box1,box2,feed[foodItem]]); 
    break;
    case 3:
      World.remove(world, [box0,box1,box2,box3,box4,feed[foodItem]]);
    break;
    case 4:
      World.remove(world, [box0,box1,box2,box3,box4, box5,feed[foodItem]]);
    break;
    case 5:
      World.remove(world, [box0,box1,box2,box3,box4, box5,box6,box7,feed[foodItem]]);
    break;
    
  }
}

function intecepted(){
  let targetX = 100;
  let targetY= he/2;
  Body.translate(feed[foodItem], { x: -(feed[foodItem].position.x - targetX), y: -(feed[foodItem].position.y - targetY) });
}

