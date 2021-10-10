// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Events = Matter.Events,
  Body = Matter.Body,
  Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(),
  world = engine.world;

// create renderer

var gw =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var gh =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
var wi = gw - 50;
var he = gh - 50;

// create renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: wi - 20,
    height: he,
    background: "transparent",

    wireframeBackground: "transparent",
    showAngleIndicator: false,
    wireframes: false,
  },
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
        visible: false,
      },
    },
  });
// add mouse to the world
World.add(world, mouseConstraint);
// keep the mouse in sync with renderingpp
render.mouse = mouse;

let whois = readValue("test1");

// possible object
var ragdollH = createARagdoll(200, 600, "H", wi / 3, he / 4);
var ragdollF = createARagdoll(200, 600, "F", wi / 2, he / 4);
var ragdollS = createARagdoll(200, 600, "S", wi * 0.66, he / 4);
var ragdollE = createARagdoll(200, 600, "E", wi * 0.66, he / 4);

var boxA,
  boxB,
  boxC,
  boxD,
  boxE,
  boxF,
  boxG,
  boxH,
  boxI,
  boxJ,
  boxK,
  boxL,
  boxm,
  boxN,
  boxO,
  boxP,
  boxQ,
  boxR,
  boxS,
  boxT,
  boxU,
  boxV,
  boxW,
  boxX,
  boxY,
  boxZ;
alphaBodies = [
  (boxA = Bodies.rectangle(100, 120, 100, 100, {
    restitution: 0.9,
    render: { sprite: { texture: "./img/boxA.jpg" } },
  })),
  (boxB = Bodies.rectangle(100, 120, 100, 100, {
    render: { sprite: { texture: "./img/boxB.jpg" } },
  })),
  (boxC = Bodies.rectangle(100, 320, 100, 100, {
    render: { sprite: { texture: "./img/boxC.jpg" } },
  })),
  (boxD = Bodies.rectangle(100, 620, 100, 100, {
    render: { sprite: { texture: "./img/boxD.jpg" } },
  })),
  (boxE = Bodies.rectangle(100, 120, 100, 100, {
    render: { sprite: { texture: "./img/boxE.jpg" } },
  })),
  (boxF = Bodies.rectangle(100, 120, 100, 100, {
    render: { sprite: { texture: "./img/boxF.jpg" } },
  })),
  (boxG = Bodies.rectangle(100, 120, 100, 100, {
    render: { sprite: { texture: "./img/boxG.jpg" } },
  })),
  (boxH = Bodies.rectangle(100, 120, 100, 100, {
    render: { sprite: { texture: "./img/boxH.jpg" } },
  })),
  (boxI = Bodies.rectangle(200, 120, 100, 100, {
    render: { sprite: { texture: "./img/boxI.jpg" } },
  })),
  (boxJ = Bodies.rectangle(200, 120, 100, 100, {
    render: { sprite: { texture: "./img/boxJ.jpg" } },
  })),
  (boxK = Bodies.rectangle(200, 20, 100, 100, {
    render: { sprite: { texture: "./img/boxK.jpg" } },
  })),
  (boxL = Bodies.rectangle(200, 20, 100, 100, {
    render: { sprite: { texture: "./img/boxL.jpg" } },
  })),
  (boxM = Bodies.rectangle(200, 20, 100, 100, {
    render: { sprite: { texture: "./img/boxM.jpg" } },
  })),
  (boxN = Bodies.rectangle(200, 20, 100, 100, {
    render: { sprite: { texture: "./img/boxN.jpg" } },
  })),
  (boxO = Bodies.rectangle(200, 20, 100, 100, {
    render: { sprite: { texture: "./img/boxO.jpg" } },
  })),
  (boxP = Bodies.rectangle(200, 20, 100, 100, {
    render: { sprite: { texture: "./img/boxP.jpg" } },
  })),
  (boxQ = Bodies.rectangle(270, 20, 100, 100, {
    render: { sprite: { texture: "./img/boxQ.jpg" } },
  })),
  (boxR = Bodies.rectangle(380, 20, 100, 100, {
    render: { sprite: { texture: "./img/boxR.jpg" } },
  })),
  (boxS = Bodies.rectangle(390, 200, 100, 100, {
    render: { sprite: { texture: "./img/boxS.jpg" } },
  })),
  (boxT = Bodies.rectangle(310, 200, 100, 100, {
    render: { sprite: { texture: "./img/boxT.jpg" } },
  })),
  (boxU = Bodies.rectangle(320, 200, 100, 100, {
    render: { sprite: { texture: "./img/boxU.jpg" } },
  })),
  (boxV = Bodies.rectangle(330, 320, 100, 100, {
    render: { sprite: { texture: "./img/boxV.jpg" } },
  })),
  (boxW = Bodies.rectangle(340, 200, 100, 100, {
    render: { sprite: { texture: "./img/boxW.jpg" } },
  })),
  (boxX = Bodies.rectangle(350, 200, 100, 100, {
    render: { sprite: { texture: "./img/boxX.jpg" } },
  })),
  (boxY = Bodies.rectangle(360, 200, 100, 100, {
    render: { sprite: { texture: "./img/boxY.jpg" } },
  })),
  (boxZ = Bodies.rectangle(370, 200, 100, 100, {
    render: { sprite: { texture: "./img/boxZ.jpg" } },
  })),
];

let alphaBody = [
  boxA,
  boxB,
  boxC,
  boxD,
  boxE,
  boxF,
  boxG,
  boxH,
  boxI,
  boxJ,
  boxK,
  boxL,
  boxM,
  boxN,
  boxO,
  boxP,
  boxQ,
  boxR,
  boxS,
  boxT,
  boxU,
  boxV,
  boxW,
  boxX,
  boxY,
  boxZ,
];

/// possible sounds

let objectsInWorld = [];
let soundsInWorld = [];
alphaSound = [
  "./audio/a.mp3",
  "./audio/b.mp3",
  "./audio/c.mp3",
  "./audio/d.mp3",
  "./audio/e.mp3",
  "./audio/f.mp3",
  "./audio/g.mp3",
  "./audio/h.mp3",
  "./audio/i.mp3",
  "./audio/j.mp3",
  "./audio/k.mp3",
  "./audio/l.mp3",
  "./audio/m.mp3",
  "./audio/n.mp3",
  "./audio/o.mp3",
  "./audio/p.mp3",
  "./audio/q.mp3",
  "./audio/r.mp3",
  "./audio/s.mp3",
  "./audio/t.mp3",
  "./audio/u.mp3",
  "./audio/v.mp3",
  "./audio/w.mp3",
  "./audio/x.mp3",
  "./audio/y.mp3",
  "./audio/z.mp3",
];
alphaSoundF = [
  //letters of the alphabet in french
  "./audioF/a.mp3",
  "./audioF/b.mp3",
  "./audioF/c.mp3",
  "./audioF/d.mp3",
  "./audioF/e.mp3",
  "./audioF/f.mp3",
  "./audioF/g.mp3",
  "./audioF/h.mp3",
  "./audioF/i.mp3",
  "./audioF/j.mp3",
  "./audioF/k.mp3",
  "./audioF/l.mp3",
  "./audioF/m.mp3",
  "./audioF/n.mp3",
  "./audioF/o.mp3",
  "./audioF/p.mp3",
  "./audioF/q.mp3",
  "./audioF/r.mp3",
  "./audioF/s.mp3",
  "./audioF/t.mp3",
  "./audioF/u.mp3",
  "./audioF/v.mp3",
  "./audioF/w.mp3",
  "./audioF/x.mp3",
  "./audioF/y.mp3",
  "./audioF/z.mp3",
];

World.add(world, [ragdollE, ragdollH, ragdollF]);

World.add(world, [
  // rectangle (     x,     y,  w,  h,  [options])
  Bodies.rectangle(wi / 2, -1500, wi, 101, { isStatic: true }), //ceiling
  Bodies.rectangle(wi / 2, he, wi, 101, { isStatic: true }), //floor
  Bodies.rectangle(0, he, 50, he * 2, { isStatic: true }), //right
  Bodies.rectangle(wi - 28, he, 50, he * 2, { isStatic: true }), //left
]);

/////**********************************
Events.on(mouseConstraint, "mousedown", function (event) {
  // console.log("clicked on "  +mouseConstraint.body.id);
  if (mouseConstraint.body != null && mouseConstraint.body.id >= 94) {
    //******** 94 MAJIC NUMBER */
    console.log("about to play sound for " + mouseConstraint.body.id);
    playletter();
  }

  if (mouseConstraint.body != null && mouseConstraint.body.id < 94) {
    console.log("clicked on  something that is not a letter ");
  } else {
    console.log("clicked on background");
  }
});

addToWorld();

/////****************************************** MAJIC NUMBERS */

Events.on(engine, "beforeUpdate", function (event) {
  for (i = 0; i <= 25; i++) {
    if (alphaBody[i].speed < 1) {
      Matter.Body.setAngle(alphaBody[i], 0);
    }
  }
});

// add keyboard control that applies force to body parts defined below
window.addEventListener("keydown", (event) => {
  var time = engine.timing.timestamp;
  const FORCE_VALUE = 0.05;
  switch (event.keyCode) {
    case 81: //q
      console.log("typed a q");
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
    case 32: //p
      Matter.Composite.scale(ragdollH, 0.8, 0.8, { x: 30, y: 30 }, true);
      Matter.Composite.scale(ragdollF, 1.2, 1.2, { x: 30, y: 30 }, true);
      break;
  }
});

var time = engine.timing.timestamp;
var wait = 0;
Events.on(engine, "beforeUpdate", function (event) {
  time = engine.timing.timestamp;
  wait = time % 20;
  // console.log( time);
  // if (wait <1 ) {         console.log(" another sec "); }
});

function readValue(item) {
  // find out the nameToSpell from home page
  var x = localStorage.getItem(item);
  return x;
}

function playletter() {
  var currentbody = soundsInWorld[0];
  for (i = 0; i < objectsInWorld.length; i++) {
    if (mouseConstraint.body == objectsInWorld[i]) {
      currentbody = soundsInWorld[i];
    }
  }
  var touched = new Howl({
    src: currentbody,
    autoplay: true,
    loop: false,
    volume: 0.6,
  });
  touched.play();
}

function addToWorld() {
  for (i = 0; i < alphaBody.length; i++) {
    // get the  correct audio and put them into the array that fills the world with bodyies
    objectsInWorld.push(alphaBodies[i]);
    if (whois == "emma") {
      soundsInWorld.push(alphaSoundF[i]);
    } else {
      soundsInWorld.push(alphaSound[i]);
    }
  }

  for (i = 0; i < objectsInWorld.length; i++) {
    World.add(world, [objectsInWorld[i]]);
  } // add the array of bodies to world
}
