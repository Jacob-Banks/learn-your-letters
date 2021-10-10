// https://javascript.info/coding-style
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                      setup matter.js
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// set screen size variables
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
// keep the mouse in sync with rendering
render.mouse = mouse;
