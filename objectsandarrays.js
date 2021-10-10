////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                         define  possible objects
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var boxA,
  boxA1,
  boxB,
  boxC,
  boxD,
  boxE,
  boxE1,
  boxE2,
  boxF,
  boxG,
  boxG1,
  boxH,
  boxI,
  boxJ,
  boxK,
  boxL,
  boxL1,
  boxM,
  boxN,
  boxO,
  boxO1,
  boxO2,
  boxP,
  boxQ,
  boxR,
  boxR1,
  boxS,
  boxT,
  boxT1,
  boxU,
  boxU1,
  boxK1,
  boxV,
  boxW,
  boxX,
  boxY,
  boxZ,
  boxGo,
  boxV9,
  boxI9,
  boxC9,
  boxT9,
  boxO9,
  boxR9,
  boxY9,
  boxPlayAgainFamily,
  boxPlayAgainAnimal,
  boxPlayAgainVechicle,
  boxM2,
  boxN1;
alphaBodies = [
  (boxA = Bodies.rectangle(0, 0, 100, 100, {
    label: "a",
    render: { sprite: { texture: "./img/boxA.jpg" } },
  })),
  (boxA1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "a",
    render: { sprite: { texture: "./img/boxA.jpg" } },
  })),
  (boxB = Bodies.rectangle(0, 0, 100, 100, {
    label: "b",
    render: { sprite: { texture: "./img/boxB.jpg" } },
  })),
  (boxC = Bodies.rectangle(0, 0, 100, 100, {
    label: "c",
    render: { sprite: { texture: "./img/boxC.jpg" } },
  })),
  (boxD = Bodies.rectangle(0, 0, 100, 100, {
    label: "d",
    render: { sprite: { texture: "./img/boxD.jpg" } },
  })),
  (boxE = Bodies.rectangle(0, 0, 100, 100, {
    label: "e",
    render: { sprite: { texture: "./img/boxE.jpg" } },
  })),
  (boxE1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "e",
    render: { sprite: { texture: "./img/boxE.jpg" } },
  })),
  (boxE2 = Bodies.rectangle(0, 0, 100, 100, {
    label: "e",
    render: { sprite: { texture: "./img/boxE.jpg" } },
  })),
  (boxF = Bodies.rectangle(0, 0, 100, 100, {
    label: "f",
    render: { sprite: { texture: "./img/boxF.jpg" } },
  })),
  (boxG = Bodies.rectangle(0, 0, 100, 100, {
    label: "g",
    render: { sprite: { texture: "./img/boxG.jpg" } },
  })),
  (boxG1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "g",
    render: { sprite: { texture: "./img/boxG.jpg" } },
  })),
  (boxH = Bodies.rectangle(0, 0, 100, 100, {
    label: "h",
    render: { sprite: { texture: "./img/boxH.jpg" } },
  })),
  (boxI = Bodies.rectangle(0, 0, 100, 100, {
    label: "i",
    render: { sprite: { texture: "./img/boxI.jpg" } },
  })),
  (boxJ = Bodies.rectangle(0, 0, 100, 100, {
    label: "j",
    render: { sprite: { texture: "./img/boxJ.jpg" } },
  })),
  (boxK = Bodies.rectangle(0, 0, 100, 100, {
    label: "k",
    render: { sprite: { texture: "./img/boxK.jpg" } },
  })),
  (boxK1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "k",
    render: { sprite: { texture: "./img/boxK.jpg" } },
  })),
  (boxL = Bodies.rectangle(0, 0, 100, 100, {
    label: "l",
    render: { sprite: { texture: "./img/boxL.jpg" } },
  })),
  (boxL1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "l",
    render: { sprite: { texture: "./img/boxL.jpg" } },
  })),
  (boxM = Bodies.rectangle(0, 0, 100, 100, {
    label: "m",
    render: { sprite: { texture: "./img/boxM.jpg" } },
  })),
  (boxM2 = Bodies.rectangle(0, 0, 100, 100, {
    label: "m",
    render: { sprite: { texture: "./img/boxM.jpg" } },
  })),
  (boxN = Bodies.rectangle(0, 0, 100, 100, {
    label: "n",
    render: { sprite: { texture: "./img/boxN.jpg" } },
  })),
  (boxN1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "n",
    render: { sprite: { texture: "./img/boxN.jpg" } },
  })),
  (boxO = Bodies.rectangle(0, 0, 100, 100, {
    label: "o",
    render: { sprite: { texture: "./img/boxO.jpg" } },
  })),
  (boxO1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "o",
    render: { sprite: { texture: "./img/boxO.jpg" } },
  })),
  (boxO2 = Bodies.rectangle(0, 0, 100, 100, {
    label: "o",
    render: { sprite: { texture: "./img/boxO.jpg" } },
  })),
  (boxP = Bodies.rectangle(0, 0, 100, 100, {
    label: "p",
    render: { sprite: { texture: "./img/boxP.jpg" } },
  })),
  (boxQ = Bodies.rectangle(0, 0, 100, 100, {
    label: "q",
    render: { sprite: { texture: "./img/boxQ.jpg" } },
  })),
  (boxR = Bodies.rectangle(0, 0, 100, 100, {
    label: "r",
    render: { sprite: { texture: "./img/boxR.jpg" } },
  })),
  (boxR1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "r",
    render: { sprite: { texture: "./img/boxR.jpg" } },
  })),
  (boxS = Bodies.rectangle(0, 0, 100, 100, {
    label: "s",
    render: { sprite: { texture: "./img/boxS.jpg" } },
  })),
  (boxT = Bodies.rectangle(0, 0, 100, 100, {
    label: "t",
    render: { sprite: { texture: "./img/boxT.jpg" } },
  })),
  (boxT1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "t",
    render: { sprite: { texture: "./img/boxT.jpg" } },
  })),
  (boxU = Bodies.rectangle(0, 0, 100, 100, {
    label: "u",
    render: { sprite: { texture: "./img/boxU.jpg" } },
  })),
  (boxU1 = Bodies.rectangle(0, 0, 100, 100, {
    label: "u",
    render: { sprite: { texture: "./img/boxU.jpg" } },
  })),
  (boxV = Bodies.rectangle(0, 0, 100, 100, {
    label: "v",
    render: { sprite: { texture: "./img/boxV.jpg" } },
  })),
  (boxW = Bodies.rectangle(0, 0, 100, 100, {
    label: "w",
    render: { sprite: { texture: "./img/boxW.jpg" } },
  })),
  (boxX = Bodies.rectangle(0, 0, 100, 100, {
    label: "x",
    render: { sprite: { texture: "./img/boxX.jpg" } },
  })),
  (boxY = Bodies.rectangle(0, 0, 100, 100, {
    label: "y",
    render: { sprite: { texture: "./img/boxY.jpg" } },
  })),
  (boxZ = Bodies.rectangle(0, 0, 100, 100, {
    label: "z",
    render: { sprite: { texture: "./img/boxZ.jpg" } },
  })),
  (boxV9 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/boxV.jpg" } },
  })),
  (boxI9 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/boxI.jpg" } },
  })),
  (boxC9 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/boxC.jpg" } },
  })),
  (boxT9 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/boxT.jpg" } },
  })),
  (boxO9 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/boxO.jpg" } },
  })),
  (boxR9 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/boxR.jpg" } },
  })),
  (boxY9 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/boxY.jpg" } },
  })),
  (boxGo = Bodies.rectangle(500, 500, 200, 100, {
    render: { sprite: { texture: "./img/GoButton.png" } },
  })),
  (boxPlayAgainFamily = Bodies.rectangle(120, -1600, 300, 200, {
    render: { sprite: { texture: "./img/spellFamily.png" } },
  })),
  (boxPlayAgainAnimal = Bodies.rectangle(420, -1600, 300, 200, {
    render: { sprite: { texture: "./img/spellAnimals.png" } },
  })),
  (boxPlayAgainVechicle = Bodies.rectangle(720, -1600, 300, 200, {
    render: { sprite: { texture: "./img/spellVehicles.png" } },
  })),
];

var box0, box1, box2, box3, box4, box5, box6, box7, box8, box9;
numBodies = [
  (box0 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box0.jpg" } },
  })),
  (box1 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box1.jpg" } },
  })),
  (box2 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box2.jpg" } },
  })),
  (box3 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box3.jpg" } },
  })),
  (box4 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box4.jpg" } },
  })),
  (box5 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box5.jpg" } },
  })),
  (box6 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box6.jpg" } },
  })),
  (box7 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box7.jpg" } },
  })),
  (box8 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box8.jpg" } },
  })),
  (box9 = Bodies.rectangle(0, 0, 100, 100, {
    render: { sprite: { texture: "./img/box9.jpg" } },
  })),
];

var ball0, ball1, ball2, blob0, blob1, bolb2, tri0, tri1, tri2;
otherBodies = [
  (ball0 = Bodies.circle(0, 0, 20, {
    render: { fillStyle: "red", strokeStyle: "black", lineWidth: 5 },
  })),
  (ball1 = Bodies.circle(0, 0, 30, {
    render: { fillStyle: "green", strokeStyle: "black", lineWidth: 5 },
  })),
  (ball2 = Bodies.circle(0, 0, 40, {
    render: { fillStyle: "blue", strokeStyle: "black", lineWidth: 5 },
  })),
  (blob0 = Bodies.rectangle(0, 0, 80, 30, {
    chamfer: { radius: 10 },
    render: { fillStyle: "red", strokeStyle: "black", lineWidth: 3 },
  })),
  (blob1 = Bodies.rectangle(0, 0, 90, 30, {
    chamfer: { radius: 15 },
    render: { fillStyle: "green", strokeStyle: "black", lineWidth: 3 },
  })),
  (blob2 = Bodies.rectangle(0, 0, 100, 30, {
    chamfer: { radius: 10 },
    render: { fillStyle: "blue", strokeStyle: "black", lineWidth: 3 },
  })),
  (blob3 = Bodies.rectangle(0, 0, 70, 40, {
    chamfer: { radius: 10 },
    render: { fillStyle: "yellow", strokeStyle: "black", lineWidth: 3 },
  })),
  (tri0 = Bodies.polygon(0, 0, 3, 50, {
    render: { fillStyle: "red", strokeStyle: "black", lineWidth: 5 },
  })),
  (tri1 = Bodies.polygon(0, 0, 3, 60, {
    render: { fillStyle: "green", strokeStyle: "black", lineWidth: 5 },
  })),
  (tri2 = Bodies.polygon(0, 0, 3, 40, {
    render: { fillStyle: "blue", strokeStyle: "black", lineWidth: 5 },
  })),
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//              Setup  variables and arrays
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let numBody = [box0, box1, box2, box3, box4, box5, box6, box7, box8, box9];
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
let otherBody = [
  ball0,
  ball1,
  ball2,
  blob0,
  blob1,
  blob3,
  blob2,
  tri1,
  tri2,
  tri0,
];
let nameToSpell = [];
let harvey = [boxH, boxA, boxR, boxV, boxE, boxY];
let frank = [boxF, boxR, boxA, boxN, boxK];
let sol = [boxS, boxO, boxL, boxO1, boxM, boxO2, boxN];
let alice = [boxA, boxL, boxI, boxC, boxE];
let andre = [boxA, boxN, boxD, boxR, boxE];
let luke = [boxL, boxU, boxK, boxA, boxS];
let vero = [boxV, boxE, boxR, boxO];
let ben = [boxB, boxE, boxN, boxJ, boxA, boxM, boxI, boxN1];
let emma = [boxE, boxM, boxM2, boxA, boxN, boxU, boxE1, boxL, boxL1, boxE2];
let cement = [boxC, boxE, boxM, boxE1, boxN, boxT];
let digger = [boxD, boxI, boxG, boxG1, boxE, boxR];
let dump = [boxD, boxU, boxM, boxP];
let roller = [boxR, boxO, boxL, boxL1, boxE, boxR1];
let tiger = [boxT, boxI, boxG, boxE, boxR];
let cat = [boxC, boxA, boxT];
let dog = [boxD, boxO, boxG];
let bear = [boxB, boxE, boxA, boxR];
let honolulu = [boxH, boxO, boxN1, boxO1, boxL, boxU, boxL1, boxU1];
let ottawa = [boxO, boxT, boxT1, boxA, boxW, boxA1];
let barklake = [boxB, boxA, boxR, boxK, boxL, boxA1, boxR1, boxK1, boxE];
let car = [boxC, boxA, boxR];
let train = [boxT, boxR, boxA, boxI, boxN];
let airplane = [boxA, boxI, boxR, boxP, boxL1, boxA1, boxN, boxE1];
