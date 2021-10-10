nameToSpellSound = [];
// "./audio/spellHarvey.mp3"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                    animations
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

animLook = [];
animWin = [];
animRight = [];
animWrong = [];
currentAnim = animWrong;
var photo = "";

let winning = [boxV9, boxI9, boxC9, boxT9, boxO9, boxR9, boxY9];
let soundsInWorld = [];
let objectsInWorld = [];
let moved = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let lettersMoved = 0;
let ypos = 150;
let timer = 0;
let frame = 0;
let perc = 5;
let back = 0;
let pro = 0;
let win = "notset";
let whois = readValue("test1"); // get the   nameToSpell from the index page

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                     add starting objects to the world
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//add walls to the world based on size of screen
World.add(world, [
  // rectangle (     x,     y,  w,  h,  [options])
  Bodies.rectangle(wi / 2, -1900, wi, 101, { isStatic: true }), //ceiling high off screen
  Bodies.rectangle(wi / 2, he, wi, 101, { isStatic: true }), //floor
  Bodies.rectangle(0, he, 50, he * 2, { isStatic: true }), //right
  Bodies.rectangle(wi - 28, he, 50, he * 2, { isStatic: true }), //left
]);
World.add(world, [
  boxGo,
  boxPlayAgainFamily,
  boxPlayAgainAnimal,
  boxPlayAgainVechicle,
]); // add start button
for (i = 0; i < winning.length; i++) {
  // add the victory message **unseen** for some reason if added on victory they fall through the walls????
  World.add(world, [winning[i]]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                              tasks performed before every screen update
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Events.on(engine, "beforeUpdate", function (event) {
  // on every tick
  timer++; // a hack to play a background animatition
  if (timer == 50) {
    timer = 0;
    frame++;
    if (frame > currentAnim.length - 1) {
      frame = 0;
    } // loop the animation
    background(frame); // which background image
  }
  correctLetterMove(); // if a correct letter has been clicked move it and turn off gravity
  rightOrrentation(); // make all possible objects have normaal orrentation once its barely moving
  if (win == true) {
    // once a win is achived
    setTimeout(function () {
      winSound();
      win = "won"; // change to paramerter that regulates what is on screen: in this case so that win sound is only played once
    }, 2500);
    removal(); // get rid of extra bodies/objects
    currentAnim = animWin; // play winning background animation
    frame = 0;
  }
  victoryMove(); // controls wheither victory message is hidden or shown
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                tasks performed with each mouse click or screen touch
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Events.on(mouseConstraint, "mousedown", function (event) {
  if (mouseConstraint.body == boxGo) {
    // if go button is touched
    nameToSpellPhoto();
    addToWorld(); //put bodies in world
    setWorldPositions(); //set thier starting positon
    intro(); //promt   nameToSpell to toch first body
    World.remove(world, [boxGo]); // get rid of the start button
    win = false; //// change to paramerter that regulates what is on screen
    currentAnim = animLook; // change the background to looking
  }

  if (
    mouseConstraint.body == boxPlayAgainFamily ||
    mouseConstraint.body == boxPlayAgainVechicle ||
    mouseConstraint.body == boxPlayAgainAnimal
  ) {
    playagain(mouseConstraint.body);
  }

  if (
    mouseConstraint.body != null &&
    win == false &&
    mouseConstraint.body.label == nameToSpell[lettersMoved].label
  ) {
    //if correcet letter clicked on
    nameToSpell[lettersMoved] = mouseConstraint.body;
    moved[lettersMoved] = true; //moves correct letter and turns of gravity
    testcorrect(); //plays corecet audio and a prompt
    lettersMoved++;
    currentAnim = animRight; // changes background to happy
    frame = 0; // start at the first frame
    if (lettersMoved == nameToSpell.length) {
      // check to see if a win has been achieved
      win = true;
    } // change to paramerter that regulates what is on screen
  } else {
    // if touch was wrong and the game is not over;
    if (
      win == false &&
      mouseConstraint.body != null &&
      mouseConstraint.body != boxGo
    ) {
      playletter(); //play a wrong sound,
      currentAnim = animWrong; //and change background to unhappy
      frame = 0;
    }
  }
});
window.addEventListener("keydown", (event) => {
  if (nameToSpell[lettersMoved].label == event.key);
  rightkey();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                             .functions
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//??????????????????formating??  why wrong twice:\?  should be called set animatins or something
function background() {
  //play next animation frame
  switch (
    whois // get which backgrouds animations to use
  ) {
    case "harvey":
      for (i = 0; i < harveyAnimWrong.length; i++) {
        // get the nameToSpells anim
        animWrong.push(harveyAnimWrong[i]);
      }
      for (i = 0; i < harveyAnimRight.length; i++) {
        // get the nameToSpells anim
        animRight.push(harveyAnimRight[i]);
      }
      for (i = 0; i < harveyAnimLook.length; i++) {
        // get the nameToSpells anim
        animLook.push(harveyAnimLook[i]);
      }
      for (i = 0; i < harveyAnimWin.length; i++) {
        // get the nameToSpells anim
        animWin.push(harveyAnimWin[i]);
      }
      break;
    case "emma":
      for (i = 0; i < emmaAnimWrong.length; i++) {
        // get the nameToSpells anim
        animWrong.push(emmaAnimWrong[i]);
      }
      for (i = 0; i < emmaAnimRight.length; i++) {
        // get the nameToSpells anim
        animRight.push(emmaAnimRight[i]);
      }
      for (i = 0; i < emmaAnimLook.length; i++) {
        // get the nameToSpells anim
        animLook.push(emmaAnimLook[i]);
      }
      for (i = 0; i < emmaAnimWin.length; i++) {
        // get the nameToSpells anim
        animWin.push(emmaAnimWin[i]);
      }
      break;
    default:
      for (i = 0; i < harveyAnimWrong.length; i++) {
        // get the nameToSpells anim
        animWrong.push(harveyAnimWrong[i]);
      }
      for (i = 0; i < harveyAnimRight.length; i++) {
        // get the nameToSpells anim
        animRight.push(harveyAnimRight[i]);
      }
      for (i = 0; i < harveyAnimLook.length; i++) {
        // get the nameToSpells anim
        animLook.push(harveyAnimLook[i]);
      }
      for (i = 0; i < harveyAnimWin.length; i++) {
        // get the nameToSpells anim
        animWin.push(harveyAnimWin[i]);
      }
  }
  document.body.style.backgroundImage =
    'url("' +
    photo +
    '"), url("' +
    currentAnim[frame] +
    '"),url("' +
    photo +
    '")'; // set the background
}

//??????????????????? should be called something like setNameAndSoundArrays, and be called in setup section,
// fill nameToSpell
function fillnameToSpell() {
  console.log(whois);
  switch (whois) {
    case "harvey":
      for (i = 0; i < harvey.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(harvey[i]);
        nameToSpellSound.push(harveySound[i]);
      }
      break;
    case "sol":
      for (i = 0; i < sol.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(sol[i]);
        nameToSpellSound.push(solSound[i]);
      }

      break;
    case "alice":
      for (i = 0; i < alice.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(alice[i]);
        nameToSpellSound.push(aliceSound[i]);
      }

      break;
    case "andre":
      for (i = 0; i < andre.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(andre[i]);
        nameToSpellSound.push(andreSound[i]);
      }

      break;
    case "frank":
      for (i = 0; i < frank.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(frank[i]);
        nameToSpellSound.push(frankSound[i]);
      }

      break;
    case "luke":
      for (i = 0; i < luke.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(luke[i]);
        nameToSpellSound.push(lukeSound[i]);
      }
      break;
    case "ben":
      for (i = 0; i < ben.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(ben[i]);
        nameToSpellSound.push(benSound[i]);
      }

      break;
    case "emma":
      for (i = 0; i < emma.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(emma[i]);
        nameToSpellSound.push(emmaSound[i]);
      }

      break;
    case "vero":
      for (i = 0; i < vero.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(vero[i]);
        nameToSpellSound.push(veroSound[i]);
      }

      break;
    case "cement":
      for (i = 0; i < cement.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(cement[i]);
        nameToSpellSound.push(cementSound[i]);
      }

      break;
    case "digger":
      for (i = 0; i < digger.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(digger[i]);
        nameToSpellSound.push(diggerSound[i]);
      }

      break;
    case "dump":
      for (i = 0; i < dump.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(dump[i]);
        nameToSpellSound.push(dumpSound[i]);
      }

      break;
    case "roller":
      for (i = 0; i < roller.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(roller[i]);
        nameToSpellSound.push(rollerSound[i]);
      }

      break;
    case "airplane":
      for (i = 0; i < airplane.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(airplane[i]);
        nameToSpellSound.push(airplaneSound[i]);
      }

      break;
    case "train":
      for (i = 0; i < train.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(train[i]);
        nameToSpellSound.push(trainSound[i]);
      }

      break;
    case "car":
      for (i = 0; i < car.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(car[i]);
        nameToSpellSound.push(carSound[i]);
      }

      break;
    case "barklake":
      for (i = 0; i < barklake.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(barklake[i]);
        nameToSpellSound.push(barklakeSound[i]);
      }

      break;
    case "honolulu":
      for (i = 0; i < honolulu.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(honolulu[i]);
        nameToSpellSound.push(honoluluSound[i]);
      }

      break;
    case "ottawa":
      for (i = 0; i < ottawa.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(ottawa[i]);
        nameToSpellSound.push(ottawaSound[i]);
      }

      break;
    case "tiger":
      for (i = 0; i < tiger.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(tiger[i]);
        nameToSpellSound.push(tigerSound[i]);
      }

      break;
    case "bear":
      for (i = 0; i < bear.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(bear[i]);
        nameToSpellSound.push(bearSound[i]);
      }

      break;
    case "dog":
      for (i = 0; i < dog.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(dog[i]);
        nameToSpellSound.push(dogSound[i]);
      }

      break;
    case "cat":
      for (i = 0; i < cat.length; i++) {
        // get the nameToSpells correct bodies and put them into the array that fills the world with bodyies
        nameToSpell.push(cat[i]);
        nameToSpellSound.push(catSound[i]);
      }

      break;
  }
}

// place bodies in world
//??????????????????? should be called something like addGameOjectsToWorld
function addToWorld() {
  fillnameToSpell();
  //add 7 numbers
  var i = 0;
  while (i < 8) {
    var thisNumber = Math.floor(Math.random() * 10);
    if (objectsInWorld.includes(numBody[thisNumber])) {
      i--;
    } else {
      objectsInWorld.push(numBody[thisNumber]);
      if (whois != "emma") {
        soundsInWorld.push([numSound[thisNumber]]);
      } else {
        soundsInWorld.push([numSoundF[thisNumber]]);
      }
    }
    i++;
  }

  var i = 0;
  while (i < 6) {
    var thisOther = Math.floor(Math.random() * 10);
    if (objectsInWorld.includes(otherBody[thisOther])) {
      i--;
    } else {
      objectsInWorld.push(otherBody[thisOther]);
      soundsInWorld.push([otherSound[thisOther]]);
    }
    i++;
  }

  // create arrays of various types of bodies that will be placed in the world, and matching sound arrays
  var i = 0;
  for (i = 0; i < nameToSpell.length; i++) {
    // get the name the nameToSpell
    objectsInWorld.push(nameToSpell[i]);
    soundsInWorld.push(nameToSpellSound[i]);
  }

  //add  letters
  var i = 0;
  while (i < 11) {
    var thisAlpha = Math.floor(Math.random() * 26);
    if (objectsInWorld.includes(alphaBody[thisAlpha])) {
      i--;
    } else {
      objectsInWorld.push(alphaBody[thisAlpha]);
      if (whois != "emma") {
        soundsInWorld.push([alphaSound[thisAlpha]]);
      } else {
        soundsInWorld.push([alphaSoundF[thisAlpha]]);
      }
    }
    i++;
  }
  // add some shapes
  //now add all of the bodies in the above arrays to the matter.js world
  for (i = 0; i < objectsInWorld.length; i++) {
    World.add(world, [objectsInWorld[i]]);
  }
}

// give bodies a position
function setWorldPositions() {
  var w = 100;
  var h = -400;
  for (i = 0; i < objectsInWorld.length; i++) {
    Matter.Body.setPosition(objectsInWorld[i], { x: w, y: h });
    w += (wi - 50) / 7; // place an obecjt every 1/7 of the screen
    if (w > wi - 50) {
      (w = 105), (h = h + 125);
    } // if object is off screen make a new row
  }
}

//move a body to specific spot,,,, turn off gravity
function forceMove(body, endX, endY, pct) {
  var gravity = engine.world.gravity;
  let dx = endX - body.position.x; // dx is the total distance to move in the X direction
  let dy = endY - body.position.y; // dy is the total distance to move in the Y direction
  let x = body.position.x + (dx * pct) / 100; // use dx & dy to calculate where the current [x,y] is at a given pct
  let y = body.position.y + (dy * pct) / 100;
  Matter.Body.setPosition(body, { x: x, y: y });
  Matter.Body.setInertia(body, Infinity);
  Matter.Body.setAngle(body, 0);
  Body.applyForce(body, body.position, {
    //turn gravity off for the body
    x: -gravity.x * gravity.scale * body.mass,
    y: -gravity.y * gravity.scale * body.mass,
  });
}

// moves the correct letteers to a spot dependent on screen size and turns off gravity  //////////
function correctLetterMove() {
  for (i = 0; i < nameToSpell.length; i++) {
    if (moved[i] == true && win != "won") {
      forceMove(
        nameToSpell[i],
        (wi - 50) / (nameToSpell.length + 1) +
          ((wi - 50) / (nameToSpell.length + 1)) * i,
        ypos,
        perc
      );
    }
  }
}
// make letters/numbers rightside up
function rightOrrentation() {
  for (i = 0; i < objectsInWorld.length; i++) {
    if (objectsInWorld[i].speed < 1) {
      Matter.Body.setAngle(objectsInWorld[i], 0);
    }
  }
}

// remove unused bodies at end ?????????????????? removeAllObjects
function removal() {
  for (i = 0; i < 14; i++) {
    World.remove(world, [objectsInWorld[i]]);
  }
  for (i = 14 + nameToSpell.length; i < objectsInWorld.length; i++) {
    World.remove(world, [objectsInWorld[i]]);
  }
}
// where the victory messages is kept
function victoryMove() {
  if (win != "won") {
    // keep victory message of screen until a win has been achived
    for (i = 0; i < winning.length; i++) {
      var p = 1;
      forceMove(winning[i], p + 100, -800, 5);
      p = p + 100;
    }
    forceMove(boxPlayAgainFamily, 220, -1200, 6);
    forceMove(boxPlayAgainVechicle, 420, -900, 6);
    forceMove(boxPlayAgainAnimal, 720, -900, 6);
  } else {
    // // move victory message to the screen
    var p = 100;
    var s = 100;
    for (i = 0; i < winning.length; i++) {
      forceMove(winning[i], p, he - 500, 5);
      p = p + 110;
    }
    for (i = 0; i < nameToSpell.length; i++) {
      forceMove(nameToSpell[i], s, he - 300, 5);
      s = s + 110;
    }
    setTimeout(function () {
      forceMove(boxPlayAgainFamily, 200, he - 700, 5);
      forceMove(boxPlayAgainAnimal, 520, he - 700, 5);
      forceMove(boxPlayAgainVechicle, 820, he - 700, 5);
      for (i = 0; i < winning.length; i++) {
        World.remove(world, [winning[i]]);
      }
      for (i = 0; i < nameToSpell.length; i++) {
        World.remove(world, [nameToSpell[i]]);
      }
      photo = "";
      currentAnim = "";
    }, 5000);
    setTimeout();
  }
}

function playagain(x) {
  let newName = "";
  if (x == boxPlayAgainVechicle) {
    newName = Math.floor(Math.random() * 7);
  }
  if (x == boxPlayAgainFamily) {
    newName = Math.floor(Math.random() * 9) + 11;
  }
  if (x == boxPlayAgainAnimal) {
    newName = Math.floor(Math.random() * 4) + 7;
  }
  console.log(newName);
  let theNewName = "this should never be seen";
  switch (newName) {
    case 0:
      theNewName = "roller";
      break;
    case 1:
      theNewName = "cement";
      break;
    case 2:
      theNewName = "dump";
      break;
    case 3:
      theNewName = "digger";
      break;
    case 4:
      theNewName = "car";
      break;
    case 5:
      theNewName = "train";
      break;
    case 6:
      theNewName = "airplane";
      break;
    case 7:
      theNewName = "bear";
      break;
    case 8:
      theNewName = "cat";
      break;
    case 9:
      theNewName = "dog";
      break;
    case 10:
      theNewName = "tiger";
      break;
    case 11:
      theNewName = "andre";
      break;
    case 12:
      theNewName = "alice";
      break;
    case 13:
      theNewName = "frank";
      break;
    case 14:
      theNewName = "harvey";
      break;
    case 15:
      theNewName = "sol";
      break;
    case 16:
      theNewName = "vero";
      break;
    case 17:
      theNewName = "luke";
      break;
    case 18:
      theNewName = "emma";
      break;
    case 19:
      theNewName = "ben";
      break;
  }
  createNewUser(theNewName);
  console.log(whois);
  location.reload();
}

function createNewUser(who) {
  localStorage.setItem("test1", who);
  whois = readValue("test1");
}
function readValue(item) {
  // find out the nameToSpell from home page
  var x = localStorage.getItem(item);
  return x;
}
function rightkey() {
  moved[lettersMoved] = true; //moves correct letter and turns of gravity
  testcorrect(); //plays corecet audio and a prompt
  lettersMoved++;
  currentAnim = animRight; // changes background to happy
  frame = 0; // start at the first frame
  if (lettersMoved == nameToSpell.length) {
    // check to see if a win has been achieved
    win = true;
  } // change to paramerter that regulates what is on screenange to paramerter that regulates what is on screen
}

function nameToSpellPhoto() {
  switch (whois) {
    case "harvey":
      photo = "img/faceHarvey.png";
      break;
    case "sol":
      photo = "img/faceSolomon.png";
      break;
    case "frank":
      photo = "img/faceFrank.png";
      break;
    case "alice":
      photo = "img/faceAlice.png";
      break;
    case "andre":
      photo = "img/faceAndre.png";
      break;
    case "luke":
      photo = "img/faceLuke.png";
      break;
    case "vero":
      photo = "img/faceVero.png";
      break;
    case "ben":
      photo = "img/faceBen.png";
      break;
    case "emma":
      photo = "img/faceEmma.png";
      break;
    case "cement":
      photo = "img/cementTruck.png";
      break;
    case "roller":
      photo = "img/roller.png";
      break;
    case "dump":
      photo = "img/dumpTruck.png";
      break;
    case "digger":
      photo = "img/digger.png";
      break;
    case "cat":
      photo = "img/cat.png";
      break;
    case "car":
      photo = "img/car.png";
      break;
    case "airplane":
      photo = "img/airplane.png";
      break;
    case "dog":
      photo = "img/dog.png";
      break;

    case "tiger":
      photo = "img/tiger.png";
      break;

    case "bear":
      photo = "img/bear.png";
      break;
    case "ottawa":
      photo = "img/ottawa.png";
      break;

    case "barklake":
      photo = "img/barklake.png";
      break;

    case "honolulu":
      photo = "img/honolulu.png";
      break;
  }
}
