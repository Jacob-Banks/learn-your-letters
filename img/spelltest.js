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

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                       define sound arrays                                                
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

alphaSound = [//letters of the alphabet in english
    "./audio/a.mp3",    "./audio/b.mp3",    "./audio/c.mp3",    "./audio/d.mp3",    "./audio/e.mp3",
    "./audio/f.mp3",    "./audio/g.mp3",    "./audio/h.mp3",    "./audio/i.mp3",    "./audio/j.mp3",
    "./audio/k.mp3",    "./audio/l.mp3",    "./audio/m.mp3",    "./audio/n.mp3",    "./audio/o.mp3",
    "./audio/p.mp3",    "./audio/q.mp3",    "./audio/r.mp3",    "./audio/s.mp3",    "./audio/t.mp3",
    "./audio/u.mp3",    "./audio/v.mp3",    "./audio/w.mp3",    "./audio/x.mp3",    "./audio/y.mp3",
    "./audio/z.mp3"
];
alphaSoundF = [//letters of the alphabet in french
    "./audioF/a.mp3",    "./audioF/b.mp3",    "./audioF/c.mp3",    "./audioF/d.mp3",    "./audioF/e.mp3",
    "./audioF/f.mp3",    "./audioF/g.mp3",    "./audioF/h.mp3",    "./audioF/i.mp3",    "./audioF/j.mp3",
    "./audioF/k.mp3",    "./audioF/l.mp3",    "./audioF/m.mp3",    "./audioF/n.mp3",    "./audioF/o.mp3",
    "./audioF/p.mp3",    "./audioF/q.mp3",    "./audioF/r.mp3",    "./audioF/s.mp3",    "./audioF/t.mp3",
    "./audioF/u.mp3",    "./audioF/v.mp3",    "./audioF/w.mp3",    "./audioF/x.mp3",    "./audioF/y.mp3",
    "./audioF/z.mp3"
];
numSound = [// numbers in english
    "./audio/zero.mp3",    "./audio/one.mp3",    "./audio/two.mp3",   "./audio/three.mp3",   
     "./audio/four.mp3",   "./audio/five.mp3",   "./audio/six.mp3",   "./audio/seven.mp3",    
     "./audio/eight.mp3",  "./audio/nine.mp3",
];
numSoundF = [//////note zero is missing from the French
    "./audio/zero.mp3",    "./audioF/un.mp3",    "./audioF/duex.mp3",   "./audioF/trois.mp3",   
     "./audioF/quatre.mp3",   "./audioF/cinq.mp3",   "./audioF/six.mp3",   "./audioF/sept.mp3",    
     "./audioF/huit.mp3",  "./audioF/neuf.mp3",
];
otherSound = [//sound effects
    "./audio/tom.mp3", "./audio/cabasa.mp3", "./audio/chhl.mp3", "./audio/chhs.mp3", "./audio/clap.mp3", 
    "./audio/cowb.mp3", "./audio/crash.mp3", "./audio/kick.mp3"
];
requestSound =  [
    "./audio/firstTouch.mp3", "./audio/nowTouch.mp3", "./audio/nextIs.mp3", 
    "./audio/findThe.mp3", "./audio/nowTouch.mp3","./audio/nextIs.mp3","./audio/lastLetterIs.mp3"
];
rightSound =    ["./audio/great.mp3", "./audio/right.mp3", "./audio/wayToGo.mp3"];
wrongSound =    ["./audio/tryAgain.mp3", "./audio/oops.mp3","./audio/yikes.mp3","./audio/no.mp3"];
winSounds =     ["./audio/fantastic.mp3", "./audio/weveGotAWinner.mp3", "./audio/aSuperSpeller.mp3"];
nameSound =     ["./audio/spellHarvey.mp3","./audio/spellSolomon.mp3","./audio/spellFrank.mp3"]; 
startSound =    ["./audio/nowLetsGetGoing.mp3","./audio/firstTouch.mp3", "./audio/hereWeGo.mp3" ];
harveySound =   ["./audio/h.mp3","./audio/a.mp3","./audio/r.mp3","./audio/v.mp3","./audio/e.mp3","./audio/y.mp3"]
solSound =      ["./audio/s.mp3","./audio/o.mp3","./audio/l.mp3","./audio/o.mp3","./audio/m.mp3","./audio/O.mp3","./audio/n.mp3"];
aliceSound =    ["./audio/a.mp3","./audio/l.mp3","./audio/i.mp3","./audio/c.mp3","./audio/e.mp3"];
frankSound =     ["./audio/f.mp3","./audio/r.mp3","./audio/a.mp3","./audio/n.mp3","./audio/k.mp3"];
andreSound =    ["./audio/a.mp3","./audio/n.mp3","./audio/d.mp3","./audio/r.mp3","./audio/e.mp3"];
benSound =     ["./audio/b.mp3","./audio/e.mp3","./audio/n.mp3","./audio/j.mp3","./audio/a.mp3","./audio/m.mp3","./audio/i.mp3","./audio/n.mp3"];
veroSound =     ["./audio/v.mp3","./audio/e.mp3","./audio/r.mp3","./audio/o.mp3"];
lukeSound =     ["./audio/l.mp3","./audio/u.mp3","./audio/k.mp3","./audio/a.mp3","./audio/s.mp3"];
emmaSound =     ["./audioF/e.mp3","./audioF/m.mp3","./audioF/m.mp3","./audioF/a.mp3","./audioF/n.mp3","./audioF/u.mp3","./audioF/e.mp3","./audioF/l.mp3","./audioF/l.mp3","./audioF/e.mp3"];
cementSound =     ["./audio/c.mp3","./audio/e.mp3","./audio/m.mp3","./audio/e.mp3","./audio/n.mp3","./audio/t.mp3"];
diggerSound =     ["./audio/d.mp3","./audio/i.mp3","./audio/g.mp3","./audio/g.mp3","./audio/e.mp3","./audio/r.mp3"];
rollerSound =     ["./audio/r.mp3","./audio/o.mp3","./audio/l.mp3","./audio/l.mp3","./audio/e.mp3","./audio/r.mp3"];
dumpSound =     ["./audio/d.mp3","./audio/u.mp3","./audio/m.mp3","./audio/p.mp3"];
catSound =     ["./audio/c.mp3","./audio/a.mp3","./audio/t.mp3"];
dogSound =     ["./audio/d.mp3","./audio/o.mp3","./audio/g.mp3"];
tigerSound =     ["./audio/t.mp3","./audio/i.mp3","./audio/g.mp3","./audio/e.mp3","./audio/r.mp3"];
bearSound =     ["./audio/b.mp3","./audio/e.mp3","./audio/a.mp3","./audio/r.mp3"];
honoluluSound =     ["./audio/h.mp3","./audio/o.mp3","./audio/n.mp3","./audio/o.mp3","./audio/l.mp3","./audio/u.mp3","./audio/l.mp3","./audio/u.mp3"];
ottawaSound =     ["./audio/o.mp3","./audio/t.mp3","./audio/t.mp3","./audio/a.mp3","./audio/w.mp3","./audio/a.mp3"];
barklakeSound =     ["./audio/b.mp3","./audio/a.mp3","./audio/r.mp3","./audio/k.mp3","./audio/l.mp3","./audio/a.mp3","./audio/k.mp3","./audio/e.mp3"];





nameToSpellSound = [];
 // "./audio/spellHarvey.mp3"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                    animations
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

harveyAnimLook = [
    './img/harveyAnim/lookdown.png','./img/harveyAnim/lookdown.png','./img/harveyAnim/lookdownalso.png','./img/harveyAnim/lookdownalso2.png',
    './img/harveyAnim/lookleft.png','./img/harveyAnim/lookup.png','./img/harveyAnim/lookwayleft.png','./img/harveyAnim/lookwayright.png'
    ]
harveyAnimWrong = [
    './img/harveyAnim/wrong1.png','./img/harveyAnim/wrong2.png','./img/harveyAnim/wrong3.png','./img/harveyAnim/wrong4.png',
    './img/harveyAnim/lookdown.png','./img/harveyAnim/lookdown.png','./img/harveyAnim/lookdownalso.png','./img/harveyAnim/lookdownalso2.png',
    './img/harveyAnim/lookleft.png','./img/harveyAnim/lookup.png','./img/harveyAnim/lookwayleft.png','./img/harveyAnim/lookwayright.png'
    ]
harveyAnimRight = [
    './img/harveyAnim/base.png','./img/harveyAnim/animArmPump1.png','./img/harveyAnim/animArmPump2.png','./img/harveyAnim/animArmPump1.png',
    './img/harveyAnim/lookdown.png','./img/harveyAnim/lookdown.png','./img/harveyAnim/lookdownalso.png','./img/harveyAnim/lookdownalso2.png',
    './img/harveyAnim/lookleft.png','./img/harveyAnim/lookup.png','./img/harveyAnim/lookwayleft.png','./img/harveyAnim/lookwayright.png'
    ]
harveyAnimWin = ['./img/harveyAnim/base.png','./img/harveyAnim/winner1.png','./img/harveyAnim/winner2.png','./img/harveyAnim/winner1.png',]

emmaAnimLook = [
    './img/emmaAnim/lookDown.png','./img/emmaAnim/lookLeft.png','./img/emmaAnim/lookRight.png','./img/emmaAnim/lookRightUp.png',
    './img/emmaAnim/lookUp.png','./img/emmaAnim/lookLeftUp.png','./img/emmaAnim/base.png'
    ]
emmaAnimWrong = ['./img/emmaAnim/base.png','./img/emmaAnim/wrong1.png','./img/emmaAnim/wrong2.png','./img/emmaAnim/wrong3.png', './img/emmaAnim/lookDown.png','./img/emmaAnim/lookLeft.png','./img/emmaAnim/lookRight.png','./img/emmaAnim/lookRightUp.png',
'./img/emmaAnim/lookUp.png','./img/emmaAnim/lookLeftUp.png','./img/emmaAnim/base.png', './img/emmaAnim/lookDown.png','./img/emmaAnim/lookLeft.png','./img/emmaAnim/lookRight.png','./img/emmaAnim/lookRightUp.png',
'./img/emmaAnim/lookUp.png','./img/emmaAnim/lookLeftUp.png','./img/emmaAnim/base.png']
emmaAnimRight = ['./img/emmaAnim/base.png','./img/emmaAnim/right1.png','./img/emmaAnim/right2.png','./img/emmaAnim/right3.png', './img/emmaAnim/lookDown.png','./img/emmaAnim/lookLeft.png','./img/emmaAnim/lookRight.png','./img/emmaAnim/lookRightUp.png',
'./img/emmaAnim/lookUp.png','./img/emmaAnim/lookLeftUp.png','./img/emmaAnim/base.png', './img/emmaAnim/lookDown.png','./img/emmaAnim/lookLeft.png','./img/emmaAnim/lookRight.png','./img/emmaAnim/lookRightUp.png',
'./img/emmaAnim/lookUp.png','./img/emmaAnim/lookLeftUp.png','./img/emmaAnim/base.png']
emmaAnimWin = ['./img/emmaAnim/base.png','./img/emmaAnim/win1.png','./img/emmaAnim/win2.png','./img/emmaAnim/win3.png']
animLook=[];
animWin=[];
animRight=[];
animWrong=[];
currentAnim = animWrong;
var photo='';

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                         define  possible objects                                                   
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var boxA,boxA1,boxB,boxC,boxD,boxE,boxE1,boxE2,boxF,boxG,boxG1,boxH,boxI,boxJ,boxK,boxL,boxL1,boxM,boxN,boxO,boxO1,boxO2,boxP,boxQ,
    boxR,boxR1,boxS,boxT,boxT1,boxU,boxU1,boxK1,boxV,boxW,boxX,boxY,boxZ,boxGo,boxV9,boxI9,boxC9,boxT9,boxO9,boxR9,boxY9, boxPlayAgain,boxM2,boxN1;
alphaBodies = [
    boxA  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxA.jpg'}}}),
    boxA1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxA.jpg'}}}),
    boxB  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxB.jpg'}}}),
    boxC  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxC.jpg'}}}),
    boxD  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxD.jpg'}}}),
    boxE  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxE.jpg'}}}),
    boxE1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxE.jpg'}}}),
    boxE2 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxE.jpg'}}}),
    boxF  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxF.jpg'}}}),
    boxG  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxG.jpg'}}}),
    boxG1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxG.jpg'}}}),
    boxH  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxH.jpg'}}}),
    boxI  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxI.jpg'}}}),
    boxJ  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxJ.jpg'}}}),
    boxK  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxK.jpg'}}}),
    boxK1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxK.jpg'}}}),    
    boxL  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxL.jpg'}}}),
    boxL1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxL.jpg'}}}),
    boxM  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxM.jpg'}}}),
    boxM2 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxM.jpg'}}}),
    boxN  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxN.jpg'}}}),
    boxN1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxN.jpg'}}}),
    boxO  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxO.jpg'}}}),
    boxO1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxO.jpg'}}}),
    boxO2 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxO.jpg'}}}),
    boxP  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxP.jpg'}}}),
    boxQ  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxQ.jpg'}}}),
    boxR  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxR.jpg'}}}),
    boxR1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxR.jpg'}}}),
    boxS  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxS.jpg'}}}),
    boxT  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxT.jpg'}}}),
    boxT1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxT.jpg'}}}),
    
    boxU  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxU.jpg'}}}),
    boxU1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxU.jpg'}}}),
    boxV  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxV.jpg'}}}),
    boxW  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxW.jpg'}}}),
    boxX  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxX.jpg'}}}),
    boxY  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxY.jpg'}}}),
    boxZ  = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxZ.jpg'}}}),
    boxV9 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxV.jpg'}}}),
    boxI9 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxI.jpg'}}}),
    boxC9 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxC.jpg'}}}),
    boxT9 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxT.jpg'}}}),
    boxO9 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxO.jpg'}}}),
    boxR9 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxR.jpg'}}}),
    boxY9 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/boxY.jpg'}}}),
    boxGo = Bodies.rectangle( 500,   500,  200, 100,{render: { sprite: { texture: './img/GoButton.png'}}}),
    boxPlayAgain = Bodies.rectangle( 100,   -600,  300, 200,{render: { sprite: { texture: './img/spellAgain.png'}}}),
];

var box0,box1,box2,box3,box4,box5,box6,box7,box8,box9;
numBodies = [
    box0 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box0.jpg'}}}),
    box1 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box1.jpg'}}}),
    box2 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box2.jpg'}}}),
    box3 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box3.jpg'}}}),
    box4 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box4.jpg'}}}),
    box5 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box5.jpg'}}}),
    box6 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box6.jpg'}}}),
    box7 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box7.jpg'}}}),
    box8 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box8.jpg'}}}),
    box9 = Bodies.rectangle( 0,   0,  100, 100, {render: { sprite: { texture: './img/box9.jpg'}}}),
];

var ball0,ball1,ball2,blob0,blob1,bolb2,tri0,tri1,tri2;
otherBodies = [
    ball0 = Bodies.circle(0, 0, 20,{ render: { fillStyle: 'red', strokeStyle: 'black',lineWidth: 5 }}),
    ball1 = Bodies.circle(0, 0, 30,{ render: { fillStyle: 'green', strokeStyle: 'black',lineWidth: 5 }}), 
    ball2 = Bodies.circle(0, 0, 40,{ render: { fillStyle: 'blue', strokeStyle: 'black',lineWidth: 5 }}),
    blob0 = Bodies.rectangle( 0,0,  80, 30, { chamfer: { radius: 10 },   render:  {fillStyle: 'red', strokeStyle: 'black',lineWidth: 3}}),
    blob1 = Bodies.rectangle( 0,0,  90, 30, { chamfer: { radius: 15 },   render:  {fillStyle: 'green', strokeStyle: 'black',lineWidth: 3}}),
    blob2 = Bodies.rectangle( 0,0,  100, 30, { chamfer: { radius: 10 },   render:  {fillStyle: 'blue', strokeStyle: 'black',lineWidth: 3}}),
    blob3 = Bodies.rectangle( 0,0,  70, 40, { chamfer: { radius: 10 },   render:  {fillStyle: 'yellow', strokeStyle: 'black',lineWidth: 3}}),tri0 = Bodies.polygon(0, 0, 3, 50, { render: { fillStyle: 'red', strokeStyle: 'black',lineWidth: 5 }}),
    tri1 = Bodies.polygon(0, 0, 3, 60, { render: { fillStyle: 'green', strokeStyle: 'black',lineWidth: 5 }}),
    tri2  = Bodies.polygon(0, 0, 3, 40, { render: { fillStyle: 'blue', strokeStyle: 'black',lineWidth: 5 }}),
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//              Setup  variables and arrays
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let numBody = [box0,box1,box2,box3,box4,box5,box6,box7,box8,box9];
let alphaBody = [boxA,boxB,boxC,boxD,boxE,boxF,boxG,boxH,boxI,boxJ,boxK,boxL,boxM,boxN,
                 boxO,boxP,boxQ,boxR,boxS,boxT,boxU,boxV,boxW,boxX,boxY,boxZ];
let otherBody = [ball0,ball1,ball2,blob0,blob1,blob3,blob2,tri1,tri2,tri0];
let   nameToSpell = [];
let harvey = [boxH,boxA,boxR,boxV,boxE,boxY];
let frank = [boxF,boxR,boxA,boxN,boxK]
let sol = [boxS,boxO,boxL,boxO1,boxM,boxO2,boxN]
let alice = [boxA,boxL,boxI,boxC,boxE]
let andre = [boxA,boxN,boxD,boxR,boxE,]
let luke = [boxL,boxU,boxK,boxA,boxS,]
let vero = [boxV,boxE,boxR,boxO,]
let ben = [boxB,boxE,boxN,boxJ,boxA,boxM,boxI,boxN1]
let emma = [boxE,boxM,boxM2,boxA,boxN,boxU,boxE1,boxL,boxL1,boxE2]
let cement = [boxC,boxE,boxM,boxE1,boxN,boxT]
let digger = [boxD,boxI,boxG,boxG1,boxE,boxR]
let dump = [boxD,boxU,boxM,boxP]
let roller = [boxR,boxO,boxL,boxL1,boxE,boxR1]
let tiger = [boxT,boxI,boxG,boxE,boxR]
let cat = [boxC,boxA,boxT]
let dog = [boxD,boxO,boxG]
let bear = [boxB,boxE,boxA,boxR1]
let honolulu = [boxH,boxO,boxN1,boxO1,boxL,boxU,boxL1,boxU1]
let ottawa = [boxO,boxT,boxT1,boxA,boxW,boxA1]
let barklake = [boxB,boxA,boxR,boxK,boxL,boxA1,boxR1,boxK1,boxE]
let car = [boxC,boxA,boxR]
let train = [boxT,boxR,boxA,boxI,boxN]
let airplane = [boxA,boxI,boxR,boxP,boxL1,boxA1,boxN,boxE1]


let winning=[boxV9,boxI9,boxC9,boxT9,boxO9,boxR9,boxY9]
let soundsInWorld = [];
let objectsInWorld = [];
let moved = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let lettersMoved = 0;
let ypos = 150;
let timer = 0;
let frame = 0;
let perc = 5;
let back = 0;
let pro = 0;
let win= 'notset';
let whois= readValue("test1");  // get the   nameToSpell from the index page 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                     add starting objects to the world
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//add walls to the world based on size of screen
World.add(world, [
    // rectangle (     x,     y,  w,  h,  [options])
    Bodies.rectangle(wi/2, -1500,  wi, 101, { isStatic: true }), //ceiling high off screen
    Bodies.rectangle(wi/2,     he,  wi, 101, { isStatic: true }), //floor
    Bodies.rectangle(  0,   he, 50,   he*2, { isStatic: true }), //right
    Bodies.rectangle(  wi-28,   he, 50,   he*2, { isStatic: true })  //left
]);
World.add(world,[boxGo,boxPlayAgain]);  // add start button
for(i=0;i<winning.length;i++){// add the victory message **unseen** for some reason if added on victory they fall through the walls???? 
    World.add(world,[winning[i]]); 
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                              tasks performed before every screen update
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Events.on(engine, "beforeUpdate", function (event) {           // on every tick
    timer++;                                                   // a hack to play a background animatition 
        if (timer == 50) {
            timer = 0; 
            frame++;
            if (frame > currentAnim.length-1){ frame = 0; };   // loop the animation
            background(frame);                                 // which background image
        };
    correctLetterMove();                                       // if a correct letter has been clicked move it and turn off gravity
    rightOrrentation();                                        // make all possible objects have normaal orrentation once its barely moving
    if (win == true){                                          // once a win is achived
        setTimeout(function(){                                 //plays win auodio after a small delay
            winSound();
            win='won';                                         // change to paramerter that regulates what is on screen: in this case so that win sound is only played once
            },2500)                                            // the delay
        removal();                                             // get rid of extra bodies/objects
        currentAnim= animWin;                                  // play winning background animation
        frame=0
    }
    victoryMove();                                             // controls wheither victory message is hidden or shown
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                tasks performed with each mouse click or screen touch
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Events.on(mouseConstraint, 'mousedown', function(event) {
    if(mouseConstraint.body== boxGo) {// if go button is touched
      nameToSpellPhoto();
      addToWorld();                   //put bodies in world
      setWorldPositions();            //set thier starting positon
      intro();                        //promt   nameToSpell to toch first body
      World.remove(world, [boxGo])    // get rid of the start button 
      win=false;                      //// change to paramerter that regulates what is on screen        
      currentAnim= animLook;          // change the background to looking 
    };
    
    if(mouseConstraint.body == boxPlayAgain){
        playagain();
    };

    if ( mouseConstraint.body !=null && win==false && mouseConstraint.body.render.sprite.texture == nameToSpell[lettersMoved].render.sprite.texture) { //if correcet letter clicked on  
            nameToSpell[lettersMoved]=mouseConstraint.body;
            moved[lettersMoved] = true;     //moves correct letter and turns of gravity
            testcorrect();                  //plays corecet audio and a prompt
            lettersMoved++;
            currentAnim = animRight;        // changes background to happy 
            frame=0;                        // start at the first frame 
        if (lettersMoved==nameToSpell.length)  // check to see if a win has been achieved
        {win=true;}                              // change to paramerter that regulates what is on screen
    }else{                              // if touch was wrong and the game is not over;  
        if (win==false && mouseConstraint.body != null && mouseConstraint.body != boxGo){                                                           
                playletter();            //play a wrong sound,
                currentAnim = animWrong; //and change background to unhappy
                frame=0;
                
            }    
    };
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                             .functions
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//??????????????????formating??  why wrong twice:\?  should be called set animatins or something
function background(){//play next animation frame
    switch (whois)  { // get which backgrouds animations to use
      case 'harvey':
          for(i=0; i < harveyAnimWrong.length; i++){// get the nameToSpells anim
            animWrong.push(harveyAnimWrong[i])
          }
          for(i=0; i < harveyAnimRight.length; i++){// get the nameToSpells anim
            animRight.push(harveyAnimRight[i])
          }
          for(i=0; i < harveyAnimLook.length; i++){// get the nameToSpells anim
            animLook.push(harveyAnimLook[i])
          }
          for(i=0; i < harveyAnimWin.length; i++){// get the nameToSpells anim
            animWin.push(harveyAnimWin[i])
          }
        break;
        case 'emma':
          for(i=0; i < emmaAnimWrong.length; i++){// get the nameToSpells anim
            animWrong.push(emmaAnimWrong[i])
          }
          for(i=0; i < emmaAnimRight.length; i++){// get the nameToSpells anim
            animRight.push(emmaAnimRight[i])
          }
          for(i=0; i < emmaAnimLook.length; i++){// get the nameToSpells anim
            animLook.push(emmaAnimLook[i])
          }
          for(i=0; i < emmaAnimWin.length; i++){// get the nameToSpells anim
            animWin.push(emmaAnimWin[i])
          }
        break;
      default:
          for(i=0; i < harveyAnimWrong.length; i++){// get the nameToSpells anim
             animWrong.push(harveyAnimWrong[i])
            }
          for(i=0; i < harveyAnimRight.length; i++){// get the nameToSpells anim
            animRight.push(harveyAnimRight[i])
            }
          for(i=0; i < harveyAnimLook.length; i++){// get the nameToSpells anim
            animLook.push(harveyAnimLook[i])
            }
          for(i=0; i < harveyAnimWin.length; i++){// get the nameToSpells anim
            animWin.push(harveyAnimWin[i])
            }
        } 
    document.body.style.backgroundImage = 'url("' + photo + '"), url("' + currentAnim[frame] + '"),url("' + photo + '")'; // set the background
}


//??????????????????? should be called something like setNameAndSoundArrays, and be called in setup section,
// fill nameToSpell
function fillnameToSpell(){
console.log(whois)
    switch (whois){
       case 'harvey':
            for(i=0; i < harvey.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(harvey[i]);
                nameToSpellSound.push(harveySound[i])
                }
            break;
        case 'sol':
            for(i=0; i < sol.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(sol[i]);
                nameToSpellSound.push(solSound[i])
            }
        
         break;
         case 'alice':
            for(i=0; i < alice.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(alice[i]);
                nameToSpellSound.push(aliceSound[i])
            }
      
         break;
         case 'andre':
            for(i=0; i < andre.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(andre[i]);
                nameToSpellSound.push(andreSound[i])
            }
           
         break;
         case 'frank':
            for(i=0; i < frank.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(frank[i]);
                nameToSpellSound.push(frankSound[i])
            }
            
         break;
         case 'luke':
            for(i=0; i < luke.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(luke[i]);
                nameToSpellSound.push(lukeSound[i])
            }
                     break;
         case 'ben':
            for(i=0; i < ben.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(ben[i]);
                nameToSpellSound.push(benSound[i])
            }
            
         break;
         case 'emma':
            for(i=0; i < emma.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(emma[i]);
                nameToSpellSound.push(emmaSound[i])
            }
            
         break;
         case 'vero':
            for(i=0; i < vero.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(vero[i]);
                nameToSpellSound.push(veroSound[i])
            }
            
         break;
         case 'cement':
            for(i=0; i < cement.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(cement[i]);
                nameToSpellSound.push(cementSound[i])
            }
            
         break;
         case 'digger':
            for(i=0; i < digger.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(digger[i]);
                nameToSpellSound.push(diggerSound[i])
            }
            
         break;
         case 'dump':
            for(i=0; i < dump.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
                nameToSpell.push(dump[i]);
                nameToSpellSound.push(dumpSound[i])
            }
            
         break;
         case 'roller':
         for(i=0; i < roller.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(roller[i]);
             nameToSpellSound.push(rollerSound[i])
         }
         
      break;
      case 'airplane':
         for(i=0; i < airplane.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(airplane[i]);
             nameToSpellSound.push(airplaneSound[i])
         }
         
      break;
      case 'train':
         for(i=0; i < train.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(train[i]);
             nameToSpellSound.push(trainSound[i])
         }
         
      break;
      case 'car':
         for(i=0; i < car.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(car[i]);
             nameToSpellSound.push(carSound[i])
         }
         
      break;
      case 'barklake':
         for(i=0; i < barklake.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(barklake[i]);
             nameToSpellSound.push(barklakeSound[i])
         }
         
      break;
      case 'honolulu':
         for(i=0; i < honolulu.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(honolulu[i]);
             nameToSpellSound.push(honoluluSound[i])
         }
         
      break;
      case 'ottawa':
         for(i=0; i < ottawa.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(ottawa[i]);
             nameToSpellSound.push(ottawaSound[i])
         }
         
      break;
      case 'tiger':
         for(i=0; i < tiger.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(tiger[i]);
             nameToSpellSound.push(tigerSound[i])
         }
         
      break;
      case 'bear':
         for(i=0; i < bear.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(bear[i]);
             nameToSpellSound.push(bearSound[i])
         }
         
      break;
      case 'dog':
         for(i=0; i < dog.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(dog[i]);
             nameToSpellSound.push(dogSound[i])
         }
         
      break;
      case 'cat':
         for(i=0; i < cat.length; i++){// get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
             nameToSpell.push(cat[i]);
             nameToSpellSound.push(catSound[i])
         }
         
      break;
      
        }     
    }

// place bodies in world
//??????????????????? should be called something like addGameOjectsToWorld
function addToWorld(){  
    fillnameToSpell();
    //add 5 numbers 
    var i=0;
    while (i < 7){
        var thisNumber = Math.floor(Math.random() * 10); 
            if ( objectsInWorld.includes(numBody[thisNumber])) {i--;
            }else  {
                objectsInWorld.push(numBody[thisNumber]);
                if(whois != 'emma'){soundsInWorld.push([numSound[thisNumber]]);}
                else{soundsInWorld.push([numSoundF[thisNumber]]);}
                };
        i++;
        };   
    
        var i=0;
        while (i < 6){
            var thisOther = Math.floor(Math.random() * 10); 
                if ( objectsInWorld.includes(otherBody[thisOther])) {i--;
                }else{
                    objectsInWorld.push(otherBody[thisOther]);
                    soundsInWorld.push([otherSound[thisOther]]);
                };
            i++;
            };
       
    
        // create arrays of various types of bodies that will be placed in the world, and matching sound arrays
    var i=0;
    for(i=0; i < nameToSpell.length; i++){// get the name the nameToSpell  
        objectsInWorld.push(nameToSpell[i]);
        soundsInWorld.push(nameToSpellSound[i])
    };    
    
        //add  letters
    var i=0;
    while (i < 11){
        var thisAlpha = Math.floor(Math.random() * 26); 
            if ( objectsInWorld.includes(alphaBody[thisAlpha])){
                i--;
            }else  {
                objectsInWorld.push(alphaBody[thisAlpha]);
            if(whois != 'emma') {soundsInWorld.push([alphaSound[thisAlpha]]);}
            else{soundsInWorld.push([alphaSoundF[thisAlpha]]);}
            };
        i++;
        };
    // add some shapes
     //now add all of the bodies in the above arrays to the matter.js world 
    for (i=0; i < objectsInWorld.length; i++){
        World.add(world, [objectsInWorld[i]]);
    } 
};

// remove unused bodies at end ?????????????????? removeAllObjects
function removal(){
    for (i= 0; i < 13; i++){
        World.remove(world, [objectsInWorld[i]]);
    }
    for (i=13+nameToSpell.length; i<objectsInWorld.length; i++){
        World.remove(world, [objectsInWorld[i]]);
    }
}
// give bodies a position
function setWorldPositions(){
    var w= 100;
    var h= -400;
    for (i= 0; i < objectsInWorld.length; i++){
        Matter.Body.setPosition(objectsInWorld[i], {x: w, y: h});
        w +=(wi-50)/7;                      // place an obecjt every 1/7 of the screen
        if (w >wi-50){w=105, h= h+125 };    // if object is off screen make a new row
    }
}

//move a body to specific spot,,,, turn off gravity
function forceMove(body, endX, endY, pct) {
    var gravity = engine.world.gravity;
    let dx = endX - body.position.x;  // dx is the total distance to move in the X direction
    let dy = endY - body.position.y;  // dy is the total distance to move in the Y direction
    let x = body.position.x + (dx * pct) / 100;// use dx & dy to calculate where the current [x,y] is at a given pct
    let y = body.position.y + (dy * pct) / 100;
    Matter.Body.setPosition(body, {x: x, y: y});
    Matter.Body.setInertia(body, Infinity);
    Matter.Body.setAngle(body, 0);
    Body.applyForce(body, body.position, {//turn gravity off for the body
        x: -gravity.x * gravity.scale * body.mass,
        y: -gravity.y * gravity.scale * body.mass
        }
);}
 
    
   // moves the correct letteers to a spot dependent on screen size and turns off gravity  //////////
function correctLetterMove(){
    for(i=0;i<nameToSpell.length;i++){
        if (moved[i] == true && win!='won'){ 
            forceMove(nameToSpell[i], (wi-50)/(nameToSpell.length+1)+((wi-50)/(nameToSpell.length+1)*i), ypos,perc); 
        };
    }
}
// make letters/numbers rightside up
function rightOrrentation(){
     for (i = 0; i < objectsInWorld.length; i++) {
        if (objectsInWorld[i].speed < 1){
             Matter.Body.setAngle(objectsInWorld[i], 0);
        }
    } 
}    

    

   


//right sfx--->prompt sfx
function testcorrect (){

   let which = Math.floor(Math.random() * 3);
   var right = new Howl({
       src:rightSound[which],
       autoplay: true,
       loop:false,
       volume:0.6,
       onend: function() {request()}
    });
   right.play();
   
 }

// hi spell ____
 function intro (){
    let which = Math.floor(Math.random() * 3);
    var right = new Howl({
        src:startSound[which],
        autoplay: true,
        loop:false,
        volume:0.6,
        onend: function() {request()}// prompt for next letter
     });
    right.play();
    
}
 

//audio prompt get me the next letteer
function request(){    
    var which =lettersMoved;
    if(which == nameToSpell.length-1){which= 6;}
    if(lettersMoved == nameToSpell.length){which= 9;}
    var request = new Howl({
        src:requestSound[which],
        autoplay: true,
        loop:false,
        volume:0.6,
        onend: function() {nLetter();console.log(which)}  // get desired letter
     });
}



// plays the sound of the next letter 
function nLetter(){
    var letter= new Howl({src:nameToSpellSound[lettersMoved]});
        letter.play();
}
  
  

  //  random wrong sfx
function testwrong (){
    let which = Math.floor(Math.random() * 4);
    var wrong = new Howl({src:wrongSound[which]});
        wrong.play();
}

function playletter(){
    for (i=0; i<objectsInWorld.length;i++) // if the wrong letter/number/shape was clicked say the letter then play a wrong sfx
            if (mouseConstraint.body == objectsInWorld[i]){
                var wrongbody = soundsInWorld[i];
            }    
            var touched= new Howl({
                src:wrongbody,
                autoplay: true,
                loop:false,
                volume:0.6,
                onend: function() {testwrong()}
            });
        touched.play();
}
// play a win sound on victory
function winSound (){
    if (win==true){
        let what= Math.floor(Math.random() * 3);
        var victory = new Howl({src:winSounds[what]});
            victory.play();
    }
}

// where the victory messages is kept
function victoryMove(){
 
 if (win!= 'won'){                                 // keep victory message of screen until a win has been achived 
    for(i=0;i<winning.length;i++){
        var p=1
        forceMove(winning[i],p+100,-800,5);
        p=p+100;
        }
    forceMove(boxPlayAgain,100,-900,6)    
    } else{                                        // // move victory message to the screen 
        var p=100;
        var s= 100; 
        for(i=0;i<winning.length;i++){
            forceMove(winning[i],p,he-500,5);
            p=p+110;
        }
        for(i=0;i<nameToSpell.length;i++){
            forceMove(nameToSpell[i],s,he-300,5);
            s=s+110;
        }
        forceMove(boxPlayAgain,200,he-700,5)
    } 
}



function playagain(){
    let newName= Math.floor(Math.random() * 20);
    console.log(newName);
    let theNewName='this should never be seen';
    switch (newName){
        case 0:
           theNewName='roller';
           
        break;
        case 1:
            theNewName='cement';
            
        break;
        case 2:
            theNewName='dump';
            

        break;
        case 3:
            theNewName='digger';
            
        break;
        case 4:
            theNewName='andre';
            
        break;
        case 5:
            theNewName='alice';
            
        break;
        case 6:
            theNewName='frank';
            
        break;
        case 7:
            theNewName='harvey';
            
        break;
        case 21:
            theNewName='ottawa';            
        break;
        case 20:
            theNewName='barklake';            
        break;
        case 22:
            theNewName='honolulu';            
        break;
        case 11:
            theNewName='car';            
        break;
        case 12:
            theNewName='train';            
        break;
        case 13:
            theNewName='airplane';            
        break;
        case 14:
            theNewName='sol';            
        break;
        case 15:
            theNewName='bear';            
        break;
        case 16:
            theNewName='cat';            
        break;
        case 17:
            theNewName='dog';            
        break;
        case 18:
            theNewName='tiger';            
        break;
        case 19:
            theNewName='vero';            
        break;
        case 8:
            theNewName='luke';            
        break;
        case 9:
            theNewName='emma';            
        break;
        case 10:
            theNewName='ben';            
        break;

    }
    createNewUser(theNewName);
    console.log(whois);
   // console.log(theNewName);
   location.reload();


}
function createNewUser(who) {
    localStorage.setItem("test1", who);
     whois= readValue("test1"); 
  }
function readValue(item){ // find out the nameToSpell from home page
    var x = localStorage.getItem(item);
    return x;
}
function nameToSpellPhoto(){
    switch (whois){
        case 'harvey':
           photo=  'img/faceHarvey.png';
        break;
        case 'sol':
            photo='img/faceSolomon.png';
        break;
        case 'frank':
            photo='img/faceFrank.png';
        break;
        case 'alice':
            photo=  'img/faceAlice.png';
        break;
        case 'andre':
            photo= 'img/faceAndre.png';
        break;
        case 'luke':
            photo=   'img/faceLuke.png';
        break;
        case 'vero':
            photo=   'img/faceVero.png';
        break;
        case 'ben':
            photo=  'img/faceBen.png';
        break;
        case 'emma':
            photo=   'img/faceEmma.png';
        break;
        case 'cement':
            photo=   'img/cementTruck.png';
        break;
        case 'roller':
            photo=   'img/roller.png';
        break;
        case 'dump':
            photo=   'img/dumpTruck.png';
        break;
        case 'digger':
            photo=   'img/digger.png';
        break;
        case 'cat':
            photo=   'img/cat.png';
        break;

        case 'dog':
            photo=   'img/dog.png';
        break;

        case 'tiger':
            photo=   'img/tiger.png';
        break;

        case 'bear':
            photo=   'img/bear.png';
        break;
        case 'ottawa':
            photo=   'img/ottawa.png';
        break;

        case 'barklake':
            photo=   'img/barklake.png';
        break;

        case 'honolulu':
            photo=   'img/honolulu.png';
        break;


       }    
}