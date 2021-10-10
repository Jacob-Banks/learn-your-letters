


// Create body parts and assemble them into a ragdoll
function createARagdoll(x, y, kid, xPos, yPos) { //kid is going to be the string  H, F, S, or E for Harvey Frank Solomon or Emma

   // console.log("going to create a ragdoll of " + kid);

    // aliases
    const { Bodies, Body, Composite, Constraint } = Matter;
    const defaultCollisionGroup = -1;

    // Define Body Part Options
    const chestOptions1 = {
        friction: 1,
        frictionAir: 0.05,
        collisionFilter: {
        group: defaultCollisionGroup - 1,
        },
        chamfer: { radius: 20 },
        label: "chest1",
        render: { fillStyle: "transparent " },
    };
    
      //heads
      const headOptionsH = {
          friction: 1,
          frictionAir: 0.05,
          label: 'head',
          render: { sprite: { texture: './img/hPuppetSet1/hHead.png'}}
        };
      const headOptionsF = {
          friction: 1,
          frictionAir: 0.05,
          label: 'head',
          render: { sprite: { texture: './img/hPuppetSet1/fHead.png'}}
        };
      const headOptionsS = {
          friction: 1,
          frictionAir: 0.05,
          label: 'head',
          render: { sprite: { texture: './img/hPuppetSet1/sHead.png'}}
        };
      const headOptionsE = {
          friction: 1,
          frictionAir: 0.05,
          label: 'head',
          render: { sprite: { texture: './img/hPuppetSet1/eHead.png'}}
        };
    //body parts for the boys
    const chestOptions2 = {
        friction: 1,
        frictionAir: 0.05,
        collisionFilter: { group: defaultCollisionGroup - 1,},
        chamfer: {radius: 20},
        label: "chest2",
        render: { sprite: { texture: './img/hPuppetSet1/chestSS.png'}}
      };
      const uarmOptionsL = {
          friction: 1,
          frictionAir: 0.03,
          collisionFilter: { group: defaultCollisionGroup, },
          render: { sprite: { texture: './img/hPuppetSet1/upperArmL.png'}}
        };
      const uarmOptionsR = {
          friction: 1,
          frictionAir: 0.03,
          collisionFilter: { group: defaultCollisionGroup, },
          render: { sprite: { texture: './img/hPuppetSet1/upperArmR.png'}}
        };
  
      const larmOptionsL = {
          friction: 1,
          frictionAir: 0.03,
          collisionFilter: {group: defaultCollisionGroup, },
          render: { sprite: { texture: './img/hPuppetSet1/lowerArmL.png'}}
        };
      const larmOptionsR = {
          friction: 1,
          frictionAir: 0.03,
          collisionFilter: {group: defaultCollisionGroup, },
          render: { sprite: { texture: './img/hPuppetSet1/lowerArmR.png'}}
        };
    
      const legOptionsL = {
        friction: 1,
        frictionAir: 0.03,
        collisionFilter: { group: defaultCollisionGroup - 1,},
        render: {sprite: { texture: './img/hPuppetSet1/upperLegR.png'}}
      };
      const legOptionsR = {
          friction: 1,
          frictionAir: 0.03,
          collisionFilter: { group: defaultCollisionGroup - 1,},
          render: {sprite: { texture: './img/hPuppetSet1/upperLegL.png'}}
        };
  
      const lowerLegOptionsL = {
        friction: 1,
        frictionAir: 0.03,
        collisionFilter: {group: defaultCollisionGroup - 1,},
        render: { sprite: { texture: './img/hPuppetSet1/lowerLegR.png'}}
      };
      const lowerLegOptionsR = {
          friction: 1,
          frictionAir: 0.03,
          collisionFilter: {group: defaultCollisionGroup - 1,},
          render: { sprite: { texture: './img/hPuppetSet1/lowerLegL.png'}}
        };

//body parts for Emma
    const chestOptions2e = {
        friction: 1,
        frictionAir: 0.05,
        collisionFilter: { group: defaultCollisionGroup - 1,},
        chamfer: {radius: 20},
        label: "chest2",
        render: { sprite: { texture: './img/hPuppetSet1/EmchestSS.png'}}
    };
    const uarmOptionsLe = {
        friction: 1,
        frictionAir: 0.03,
        collisionFilter: { group: defaultCollisionGroup, },
        render: { sprite: { texture: './img/hPuppetSet1/EmupperArmL.png'}}
      };
    const uarmOptionsRe = {
        friction: 1,
        frictionAir: 0.03,
        collisionFilter: { group: defaultCollisionGroup, },
        render: { sprite: { texture: './img/hPuppetSet1/EmupperArmR.png'}}
      };

    const larmOptionsLe = {
        friction: 1,
        frictionAir: 0.03,
        collisionFilter: {group: defaultCollisionGroup, },
        render: { sprite: { texture: './img/hPuppetSet1/EmlowerArmL.png'}}
      };
    const larmOptionsRe = {
        friction: 1,
        frictionAir: 0.03,
        collisionFilter: {group: defaultCollisionGroup, },
        render: { sprite: { texture: './img/hPuppetSet1/EmlowerArmR.png'}}
      };

    const legOptionsLe = {
      friction: 1,
      frictionAir: 0.03,
      collisionFilter: { group: defaultCollisionGroup - 1,},
      render: {sprite: { texture: './img/hPuppetSet1/EmupperLegR.png'}}
    };
    const legOptionsRe = {
        friction: 1,
        frictionAir: 0.03,
        collisionFilter: { group: defaultCollisionGroup - 1,},
        render: {sprite: { texture: './img/hPuppetSet1/EmupperLegL.png'}}
      };

    const lowerLegOptionsLe = {
      friction: 1,
      frictionAir: 0.03,
      collisionFilter: {group: defaultCollisionGroup - 1,},
      render: { sprite: { texture: './img/hPuppetSet1/EmlowerLegR.png'}}
    };
    const lowerLegOptionsRe = {
        friction: 1,
        frictionAir: 0.03,
        collisionFilter: {group: defaultCollisionGroup - 1,},
        render: { sprite: { texture: './img/hPuppetSet1/EmlowerLegL.png'}}
      };

    //NOW define the body parts including the above options
     if(kid == 'H') {
         head = Bodies.circle(x, y - 70, 50, headOptionsH);
         roof = Bodies.rectangle(xPos, 0, 20, 30, { isStatic: true }); //ceiling
        };
     if(kid == 'F') {
         head = Bodies.circle(x, y - 70, 50, headOptionsF);
         roof = Bodies.rectangle(xPos, 0, 20, 30, { isStatic: true }); //ceiling
        };
    if(kid == 'S') {
        head = Bodies.circle(x, y - 70, 50, headOptionsS);
        roof = Bodies.rectangle(xPos, 0, 20, 30, { isStatic: true }); //ceiling
        };
    if(kid == 'E') {
        //console.log("creating Emma ragdoll")
        head = Bodies.circle(x, y - 70, 50, headOptionsE);
        roof = Bodies.rectangle(xPos, 0, 20, 30, { isStatic: true }); //ceiling
        };
    
    if(kid == 'H' || 'F' || 'S'){
        //console.log("going to build parts " + kid);
        chest1 =        Bodies.rectangle(x, y,           60, 80, chestOptions1);//the transperent chest you can't see
        chest2 =        Bodies.rectangle(x+2 , y+2 ,     50, 70,  Object.assign({}, chestOptions2));
        rightUpperArm = Bodies.rectangle(x + 40, y - 20, 20, 40,  Object.assign({}, uarmOptionsL));
        rightLowerArm = Bodies.rectangle(x + 40, y + 20, 20, 60,  Object.assign({}, larmOptionsL));
        leftUpperArm =  Bodies.rectangle(x - 40, y - 20, 20, 40,  Object.assign({}, uarmOptionsR));
        leftLowerArm =  Bodies.rectangle(x - 40, y + 20, 20, 60,  Object.assign({}, larmOptionsR));
        leftUpperLeg =  Bodies.rectangle(x - 20, y + 60, 20, 40,  Object.assign({}, legOptionsL));
        rightUpperLeg = Bodies.rectangle(x + 20, y + 60, 20, 40,  Object.assign({}, legOptionsR));
        leftLowerLeg =  Bodies.rectangle(x - 20, y + 100, 20, 60, Object.assign({}, lowerLegOptionsL));
        rightLowerLeg = Bodies.rectangle(x + 20, y + 100, 20, 60, Object.assign({}, lowerLegOptionsR));
    }
    if(kid == 'E'){
        //console.log("this should be Emma" + kid);
        chest1 =        Bodies.rectangle(x, y,           60, 80, chestOptions1);//the transperent chest you can't see
        chest2 =        Bodies.rectangle(x+2 , y+2 ,     50, 70,  Object.assign({}, chestOptions2e));
        rightUpperArm = Bodies.rectangle(x + 40, y - 20, 20, 40,  Object.assign({}, uarmOptionsLe));
        rightLowerArm = Bodies.rectangle(x + 40, y + 20, 20, 60,  Object.assign({}, larmOptionsLe));
        leftUpperArm =  Bodies.rectangle(x - 40, y - 20, 20, 40,  Object.assign({}, uarmOptionsRe));
        leftLowerArm =  Bodies.rectangle(x - 40, y + 20, 20, 60,  Object.assign({}, larmOptionsRe));
        leftUpperLeg =  Bodies.rectangle(x - 20, y + 60, 20, 40,  Object.assign({}, legOptionsLe));
        rightUpperLeg = Bodies.rectangle(x + 20, y + 60, 20, 40,  Object.assign({}, legOptionsRe));
        leftLowerLeg =  Bodies.rectangle(x - 20, y + 100, 20, 60, Object.assign({}, lowerLegOptionsLe));
        rightLowerLeg = Bodies.rectangle(x + 20, y + 100, 20, 60, Object.assign({}, lowerLegOptionsRe));
    }  
    //and finally the main part that everything the constraints are based on
    const legTorso = Body.create({
      parts: [chest1,  leftUpperLeg, rightUpperLeg],
      collisionFilter: { group: defaultCollisionGroup - 1, },
    });
  
    /*****************************
     * Define Constraints/Joints *
     *****************************/
    const chestToRightUpperArm = Constraint.create({
      bodyA: legTorso,
      pointA: { x: 25,  y: -40,  },
      pointB: { x: -1,  y: -10,  },
      bodyB: rightUpperArm, 
      stiffness: 0.9,  
      render: { visible: false, },
    });
    const chestToLeftUpperArm = Constraint.create({
      bodyA: legTorso, 
      pointA: { x: -25,  y: -40,  },
      pointB: { x: 1,    y: -10,},
      bodyB: leftUpperArm, 
      stiffness: 0.9, 
      render: { visible: false, },
    });
  
    const upperToLowerRightArm = Constraint.create({ 
      bodyA: rightUpperArm,
      bodyB: rightLowerArm,
      pointA: {x: 0,y: 15,},
      pointB: { x: 0,y: -20,},
      stiffness: 0.9,  
      render: { visible: false, },
    });
  
    const upperToLowerLeftArm = Constraint.create({
      bodyA: leftUpperArm,
      bodyB: leftLowerArm,
      pointA: {x: 0,y: 15, },
      pointB: { x: 0, y: -20, },
      stiffness: 0.9, 
      render: {visible: false, },
    });
  
    const upperToLowerLeftLeg = Constraint.create({
      bodyA: legTorso,
      bodyB: leftLowerLeg,
      pointA: { x: -20,y: 60,},
      pointB: { x: 0,y: -25, },
      stiffness: 0.7, 
      render: { visible: false, },
    });
  
    const upperToLowerRightLeg = Constraint.create({
      bodyA: legTorso,
      bodyB: rightLowerLeg,
      pointA: {x: 20, y: 60, },
      pointB: { x: 0,y: -25, },
      stiffness: 0.7,
      render: {visible: false, },
    });
  
    const headContraint = Constraint.create({
      bodyA: head,
      bodyB: chest2,
      pointA: {x: -10,y: 20, },
      pointB: {x: 0,y: -55,},
      stiffness: 0.9,
      render: {visible: false,},
    });
  
    const chest2Tochest1 = Constraint.create({
        bodyA: legTorso,
        bodyB: chest2,
        pointA: { x: 0, y: -50,},
        pointB: { x: 0, y: -40,},
        stiffness: 0.9,
        length:0,
        render: { visible: false,},
    });

    const nooseContraint = Constraint.create({
        bodyA: head,
        bodyB: roof,
        pointA: { x: 10, y: -30, },
        pointB: { x: 0, y: -55, },
        stiffness: 0.01,
        length:yPos,
        render: { visible: true, },
    });

    //assemble the body parts and the constraints into a person
    const person = Composite.create({
      bodies: [legTorso, head, chest2, leftLowerArm, leftUpperArm, rightLowerArm, 
              rightUpperArm, leftLowerLeg, rightLowerLeg,roof],
      constraints: [
        upperToLowerLeftArm,
        upperToLowerRightArm,
        chestToLeftUpperArm,
        chestToRightUpperArm,
        headContraint,
        upperToLowerLeftLeg,
        upperToLowerRightLeg,
        chest2Tochest1,
        nooseContraint,
      ],
    });
    return person;
  }


