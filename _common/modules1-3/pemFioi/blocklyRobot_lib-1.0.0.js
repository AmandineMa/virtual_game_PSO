/*blocklyRoboy_lib-1.0.0 by Arthur Léonard*/

/*TODO : un changement de taille de la fenetre à la fin d'une execution duplique les items*/
/*TODO : traduire le context wiring*/
var robotCommands = [];

var getContext = function(display, infos, curLevel) {
  var localLanguageStrings = {
    fr: {
      label: {},
      code: {},
      messages: {},
      description: {}
    },
    en: {
      label: {},
      code: {},
      messages: {},
      description: {}
    },
    es: {
      label: {},
      code: {},
      messages: {},
      description: {}
    },
    de: {
      label: {},
      code: {},
      messages: {},
      description: {}
    }
  };

  var contextStrings = {
    none: {
      fr: {
        label: {
          wait: "attendre",
        right: "tourner à droite",
        left: "tourner à gauche",
        forward: "avancer",
        turnAround: "faire demi-tour",
        jump: "sauter",
        down: "descendre",
        east: "naviguer vers la droite",
        south: "naviguer vers le bas",
        west: "naviguer vers la gauche",
        north: "naviguer vers le haut",
        paint: "réparer",
        withdrawObject: "ramasser l'objet",
        dropTransportable: "déposer l'objet",
        onTransportable: "sur un objet",
        onHole: "sur un trou",
        transportableShape: "forme de l'objet",
        transportableColor: "couleur de l'objet",
        transportableRed:  "l'objet est rouge",
        transportableBlue: "l'objet est bleu",
        transportableSquare: "l'objet est carré",
        greenCell: "sur une case verte",
        brownCell: "sur une case marron",
        hasAKey: "une clé est sur la case",
        hasDiamond: "un diamant est sur la case",
        hasGreenMonster: "un montre vert est sur la case",
        hasOrangeMonster: "un montre orange est sur la case",
		openLocker1KeyFor1Locker: "ouvrir",
        openLocker1KeyForNLockers: "ouvrir",
        addPlatformAbove: "construire une plateforme au dessus",
        addPlatformInFront: "construire une plateforme devant",
        platformInFront: "plateforme devant",
        platformInFrontAndBelow: "plateforme devant plus bas",
        platformAbove: "plateforme au dessus",
        gridEdgeInFront: "bord de la grille devant",
        gridEdgeAbove: "bord de la grille au dessus",
        gridEdgeBelow: "bord de la grille en dessous",
        gridEdgeEast: "bord de la grille à droite",
        gridEdgeWest: "bord de la grille à gauche",
        obstacleInFront: "obstacle devant",
        obstacleRight: "obstacle à droite",
        obstacleLeft: "obstacle à gauche",
        obstacleEast: "obstacle à droite",
        obstacleWest: "obstacle à gauche",
        obstacleNorth: "obstacle en haut",
        obstacleSouth: "obstacle en bas",
        paintInFront: "peinture devant",
        paintOnCell: "peinture sur la case",
        paintNorthWest: "peinture en haut à gauche",
        paintNorth: "peinture en haut",
        paintNorthEast: "peinture en haut à droite",
        colorUnder: "couleur de la case",
        numberUnder: "nombre sur la case",
        writeNumber: "mettre le nombre de la case à",
        dir: "direction du robot",
        col: "colonne du robot",
        row: "ligne du robot",
        alert: "alerte",
        onPill: "sur une pastille",

        number: "nombre total d'objets à transporter",
        exists: "il existe un objet à transporter ",
        trans_row: "ligne de l'objet à transporter",
        trans_col: "colonne d'objet à transporter",
        },
        code: {
        wait: "attendre",
        right: "tournerDroite",
        left: "tournerGauche",
        turnAround: "demiTour",
        jump: "sauter",
        down: "descendre",
        forward: "avancer",
        east: "droite",
        south: "bas",
        west: "gauche",
        north: "haut",
        paint: "peindre",

        withdrawObject: "ramasser",
        openLocker1KeyFor1Locker: "ouvrirCadenas1ClePour1Cadenas",
        openLocker1KeyForNLockers: "ouvrirCadenas1ClePourNCadenas",
        dropTransportable: "deposer",
        onTransportable: "surObjet",
        onHole: "surTrou",
        transportableShape: "formeObjet",
        transportableColor: "couleurObjet",
        transportableRed: "objetRouge",
        transportableBlue: "objetBleu",
        transportableSquare: "objetCarre",
        greenCell: "caseVerte",
        brownCell: "caseMarron",
        hasAKey: "hasAKey",
        hasDiamond: "hasDiamond",

        hasGreenMonster: "hasGreenMonster",
        hasOrangeMonster: "hasOrangeMonster",

        platformInFront: "plateformeDevant",
        addPlatformAbove: "construirePlateformeAuDessus",
        addPlatformInFront: "construirePlateformeDevant",
        platformInFrontAndBelow: "plateformeDevantPlusBas",
        platformAbove: "plateformeAuDessus",
        gridEdgeInFront: "bordGrilleDevant",
        gridEdgeEast: "bordGrilleDroite",
        gridEdgeWest: "bordGrilleGauche",
        gridEdgeAbove: "bordGrilleAuDessus",
        gridEdgeBelow: "bordGrilleEnDessous",
        obstacleInFront: "obstacleDevant",
        obstacleRight: "obstacleADroite",
        obstacleLeft: "obstacleAGauche",
        obstacleEast: "obstacleDroite",
        obstacleWest: "obstacleGauche",
        obstacleNorth: "obstacleHaut",
        obstacleSouth: "obstacleBas",
        paintInFront: "peintureDevant",
        paintOnCell: "peintureSurCase",
        paintNorthWest: "peintureHautGauche",
        paintNorth: "peintureHaut",
        paintNorthEast: "peintureHautDroite",
        colorUnder: "couleurCase",
        numberUnder: "nombreCase",
        writeNumber: "ecrireNombre",
        dir: "direction",
        col: "colonne",
        row: "ligne",
        alert: "alerte",
        onPill: "surPastille",

        number: "nombreTransportables",
        exists: "existeTransportable",
        trans_row: "ligneTransportable",
        trans_col: "colonneTransportable",
        },
        messages: {
          leavesGrid: "Le robot sort de la grille !",
          obstacle: "Le robot essaie d'avancer dans un obstacle",
          nothingToPickUp: "Il n'y a rien à ramasser !",
          nothingToOpen: "Il n'y a rien à ouvrir !",
          nothingToLookAt: "Il n'y a rien dans cette boite",
          falls: "Le robot essaie de se jeter dans le vide !",
          willFallAndCrash: "Le robot va tomber de haut et s'écraser !",
          jumpOutsideGrid: "Le robot essaie de sauter en dehors de la grille !",
          jumpObstacleBlocking:
            "Le robot essaie de sauter mais il y a un obstacle qui le bloque",
          jumpNoPlatform:
            "Le robot essaie de sauter mais il n'y a pas de plateforme au dessus !",
          tooManyObjects:
            "Le robot essaie de transporter trop d'objets à la fois !",
          emptyBag:
            "Le robot essaie de déposer un objet alors qu'il n'en transporte pas !",
          successReachExit: "Bravo, le robot a atteint la sortie !",
          failureReachExit: "Le robot n'a pas atteint la sortie :(",
          successPickedAllWithdrawables:
            "Bravo, le robot a tout ramassé !",
          failurePickedAllWithdrawables:
            "Le robot n'a pas tout ramassé :(",
          successOpenAllLockers:  "Bravo, le robot a ouvert tous les cadenas !",
          failureOpenAllLockers:  "Le robot n'a pas ouvert tous les cadenas :(",
	      failureOpenLocker: "Le robot essaie d'ouvrir le cadenas mais il n'a pas de clé :(",
          successContainersFilled:
            "Well done, your robot has filled all the containers",
          failureContainersFilled: "There is an object outside the containers",
          failureContainersFilledLess:
            "Your robot has not filled all the containers",
          failureContainersFilledBag:
            "Your robot has not placed all the objects",
          failureUnfilteredObject: "Your robot has picked up an invalid object",
          failureTooManyMoves: "Votre robot a effectué trop de déplacements.",
          failureWriteHere: "Your robot can't write here!",
          failureReadHere: "There is no number written here!",
          successNumbersWritten:
            "Well done, your robot has written the right numbers!",
          failureNumbersWritten: "Your robot did not write the right numbers!",
          failureNothingToPush: "There is no object to push!",
          failureWhilePushing: "The robot cannot push this object!",
          failureDropObject: "We can't put an object here",
          failureDropOutside:
            "Your robot is trying to put an object outside the grid",
          failureNotEnoughPlatform: "Pas assez de plateformes",
          failureLights: "There are still spots to light up.",
          successLights: "Well done, your robot has turned on all the spots!",
          failureLaser:
            "The robot must be on a laser terminal to be able to shoot!",
          failureNoPlug:
            "The robot must be on an outlet to be able to connect a cable!",
          failureAlreadyWired: "This socket is already connected to a cable!",
          failureWrongPlugType: "We can't connect these sockets together!",
          successPlugsWired: "The machine is repaired!",
          failurePlugsWired:
            "The machine does not work because plugs have not been connected!",
          failureWireCrossing:
            "Impossible to connect these two sockets, two cables will intersect!",
          failureWireTooLong:
            "Impossible to connect these two sockets because they are too far apart!",
          failureTotalLengthExceeded:
            "You don't have enough cable length to connect these two sockets!",
          failureProjectile: "The robot has caught a projectile!",
          failureRewrite: "The robot tried to repaint a box."
        },
        startingBlockName: "Programme du robot"
      },
      en: {
        label: {
          row: "robot's row",
          col: "robot's column",
          wait: "wait",
          north: "move up",
          south: "move down",
          east: "move right",
          west: "more left",
          left: "turn left",
          right: "turn right",
          turnAround: "turn around",
          forward: "move forward",
          backwards: "move backwards",
          jump: "jump",
          obstacleInFront: "obstacle ahead",
          obstacleEast: "obstacle on the right",
          obstacleWest: "obstacle on the left",
          obstacleNorth: "obstacle above",
          obstacleSouth: "obstacle below",
          obstacleRight: "obstacle on the right",
          obstacleLeft: "obstacle on the left",
          gridEdgeEast: "grid edge on the right",
          gridEdgeWest: "grid edge on the left",
          gridEdgeNorth: "grid edge above",
          gridEdgeSouth: "grid edge below",
          platformInFront: "platform ahead",
          platformAbove: "platform above",
          withdrawObject: "pick the object",
          openLocker1KeyFor1Locker: "ouvrir",
		  openLocker1KeyForNLockers: "ouvrir",
          dropObject: "drop the object",
          onObject: "on an object",
          onContainer: "on a container",
          onNumber: "on a number",
          onWritable: "on a blackboard",
          onLauncher: "on a laser emitter",
          writeNumber: "write the number",
          readNumber: "number in the cell",
          pushObject: "push the object",
          pushableInFront: "pushable object ahead",
          shoot: "shoot a laser in direction %1",
          shoot_noShadow: "shoot a laser in direction %1",
          shootCondition:
            "laser shot returning to starting point in direction %1",
          shootCondition_noShadow:
            "laser shot returning to starting point in direction %1",
          connect: "plug a wire",
          onMale: "to a male plug",
          onFemale: "to a female plug"
        },
        code: {
          row: "robotRow",
          col: "robotColumn",
          wait: "wait",
          north: "up",
          south: "down",
          east: "right",
          west: "left",
          left: "turnLeft",
          right: "turnRight",
          turnAround: "turnAround",
          forward: "forward",
          backwards: "backwards",
          jump: "jump",
          obstacleInFront: "obstacleAhead",
          obstacleEast: "obstacleRight",
          obstacleWest: "obstacleLeft",
          obstacleNorth: "obstacleAbove",
          obstacleSouth: "obstacleBelow",
          obstacleRight: "obstacleRightRel",
          obstacleLeft: "obstacleLeftRel",
          gridEdgeEast: "gridEdgeRight",
          gridEdgeWest: "gridEdgeLeft",
          gridEdgeNorth: "gridEdgeAbove",
          gridEdgeSouth: "gridEdgeBelow",
          platformInFront: "plateformAhead",
          platformAbove: "platformAbove",
          withdrawObject: "pickObject",
          dropObject: "dropObject",
          onObject: "onObject",
          onContainer: "onContainer",
          onNumber: "onNumber",
          onWritable: "onWritable",
          onLauncher: "onLauncher",
          writeNumber: "writeNumber",
          readNumber: "numberOnCell",
          pushObject: "pushObject",
          pushableInFront: "pushableAhead",
          shoot: "shootLaser",
          shoot_noShadow: "shootLaser",
          shootCondition: "shootOnCondition",
          shootCondition_noShadow: "shootOnCondition",
          connect: "plugCable",
          onMale: "onMalePlug",
          onFemale: "onFemalePlug"
        },
        messages: {
          leavesGrid: "The robot exits the grid!",
          obstacle: "The robot attempts to move towards an obstacle!",
          nothingToPickUp: "There is nothing to puck up!",
          nothingToLookAt: "There is no card or container in this cell",
          falls: "The robot will leap into the void",
          willFallAndCrash: "The robot will jump from a high point and crash!",
          jumpOutsideGrid: "The robot tries to jump outside of the grid!",
          jumpObstacleBlocking:
            "The robot tries to jump but an obstacle blacks it",
          jumpNoPlatform:
            "The robot tries to jump but there is no platform above!",
          tooManyObjects:
            "The robot tries to transport too many objects at a time!",
          emptyBag:
            "The robot tries to drop an object but it doesn't carry one!",
          successReachExit: "Congratulations, your robot reached the exit!",
          failureReachExit: "Your robot didn't reach the exit.",
          successPickedAllWithdrawables:
            "Congratulations, your robot picked up everything!",
          failurePickedAllWithdrawables:
            "Your robot didn't pick up everything.",
          successContainersFilled:
            "Congratulations, your robot filled every container",
          failureContainersFilled: "An object was left outside of containers",
          failureContainersFilledLess: "Yout robot didn't fill every container",
          failureContainersFilledBag: "Your robot didn't drop all the objects",
          failureUnfilteredObject: "Your robot picked an invalid object",
          failureTooManyMoves: "Your robot made too many moves.",
          failureWriteHere: "Your robot can't write here!",
          failureReadHere: "There is no number written here!",
          successNumbersWritten:
            "Congratulations, your robot wrote all the correct numbers!",
          failureNumbersWritten: "Your robot didn't write the correct numbers!",
          failureNothingToPush: "There is no object to push!",
          failureWhilePushing: "The robot can't push this object!",
          failureDropObject: "You can't drop an object here",
          failureDropOutside:
            "Your robot tries to drop an object outside of the grid",
          failureNotEnoughPlatform: "Not enough platforms",
          failureLights: "There are still lights to turn on.",
          successLights:
            "Congratulations, your robot turned on all the lights!",
          failureLaser:
            "The robot has to be on a launcher to be able to shoot!",
          failureNoPlug: "The robot has to be on a plug to plug in a cable!",
          failureAlreadyWired: "This plug is already connected to a cable!",
          failureWrongPlugType: "You can't connect these plugs together!",
          successPlugsWired: "The machine is fixed!",
          failurePlugsWired:
            "The machine doesn't work because some plugs are not connected!",
          failureWireCrossing:
            "Impossible to connect these two plugs: two cables would intersect!",
          failureWireTooLong:
            "Impossible to connect these two plugs: they are too far from eachother!",
          failureTotalLengthExceeded:
            "You don't have enough length of cable to connect these two plugs!",
          failureProjectile: "The robot got hit by a projectile!"
        },
        startingBlockName: "Program of the robot"
      },

      es: {
        label: {
          row: "fila del robot",
          col: "columna del robot",
          north: "avanzar hacia arriba",
          south: "avanzar hacia abajo",
          east: "avanzar hacia la derecha",
          west: "avanzar hacia la izquierda",
          left: "girar a la izquierda",
          right: "girar a la derecha",
          turnAround: "dar media vuelta",
          forward: "avanzar",
          backwards: "retroceder",
          jump: "saltar",
          obstacleInFront: "obstáculo adelante",
          obstacleEast: "obstáculo a la derecha",
          obstacleWest: "obstáculo a la izquierda",
          obstacleNorth: "obstáculo arriba",
          obstacleSouth: "obstáculo abajo",
          obstacleRight: "obstáculo a la derecha",
          obstacleLeft: "obstáculo a la izquierda",
          gridEdgeEast: "borde de la cuadrícula a la derecha",
          gridEdgeWest: "borde de la cuadrícula a la izquierda",
          gridEdgeNorth: "borde de la cuadrícula arriba",
          gridEdgeSouth: "borde de la cuadrícula abajo",
          platformInFront: "plataforma adelante",
          platformAbove: "plataforma arriba",
          withdrawObject: "recoger el objeto",
          dropObject: "soltar el objeto",
          onObject: "sobre un objeto",
          onContainer: "sobre un contenedor",
          onNumber: "sobre un número",
          onWritable: "sobre un cuadro",
          onLauncher: "sobre un lanzador láser",
          writeNumber: "escribir el número",
          readNumber: "número en la casilla",
          pushObject: "empujar el objeto",
          pushableInFront: "objeto empujable adelante",
          shoot: "disparar el láser en la dirección %1",
          shoot_noShadow: "disparar el laser en la dirección %1",
          shootCondition: "dirección del tiro de retorno %1",
          shootCondition_noShadow: "dirección del tiro de retorno %1"
        },
        code: {
          row: "filaRobot",
          col: "columnaRobot",
          north: "arriba",
          south: "abajo",
          east: "derecha",
          west: "izquierda",
          left: "girarIzquierda",
          right: "girarDerecha",
          turnAround: "mediaVuelta",
          forward: "avanzar",
          backwards: "retroceder",
          jump: "saltar",
          obstacleInFront: "obstaculoAdelante",
          obstacleRight: "obstaculoDerechaRel",
          obstacleLeft: "obstaculoIzquierdaRel",
          obstacleEast: "obstaculoDerecha",
          obstacleWest: "obstaculoIzquierda",
          obstacleNorth: "obstaculoArriba",
          obstacleSouth: "obstaculoAbajo",
          gridEdgeEast: "bordeCuadriculaDerecha",
          gridEdgeWest: "bordeCuadriculaIzquierda",
          gridEdgeNorth: "bordeCuadriculaArriba",
          gridEdgeSouth: "bordeCuadriculaAbajo",
          platformInFront: "plataformaAdelante",
          platformAbove: "plataformaArriba",
          withdrawObject: "recogerObjeto",
          dropObject: "soltarObjeto",
          onObject: "sobreObjeto",
          onContainer: "sobreContenedor",
          onNumber: "sobreNumero",
          onWritable: "sobreCuadro",
          onLauncher: "sobreLanzador",
          writeNumber: "escribirNumero",
          readNumber: "leerNumero",
          pushObject: "empujarObjeto",
          pushableInFront: "empujableAdelante",
          shoot: "dispararLaser",
          shoot_noShadow: "dispararLaser",
          shootCondition: "condicionDisparo",
          shootCondition_noShadow: "condicionDisparo"
        },
        messages: {
          leavesGrid: "¡El robot salió de la cuadrícula!",
          obstacle: "¡El robot intenta moverse sobre un obstáculo!",
          nothingToPickUp: "No hay algo para recoger",
          nothingToLookAt: "No hay carta ni contenedor en esta casilla",
          falls: "¡El robot va a caer al vacío!",
          willFallAndCrash: "¡El robot va a caer y chocar!",
          jumpOutsideGrid: "¡El robot intenta saltar fuera de la cuadrícula!",
          jumpObstacleBlocking:
            "El robot intenta saltar pero hay un obstáculo que lo bloquea",
          jumpNoPlatform:
            "¡El robot intenta saltar pero no hay una plataforma arriba!",
          tooManyObjects:
            "¡El robot intenta transportar demasiados objetos al mismo tiempo!",
          emptyBag: "El robot intenta soltar un objeto, ¡pero no carga nada!",
          successReachExit: "Bravo, ¡su robot a llegado a la salida!",
          failureReachExit: "Su robot no ha llegado a la salida.",
          successPickedAllWithdrawables: "Bravo, su robot ha recogido todo!",
          failurePickedAllWithdrawables: "Su robot no ha recogido todo.",
          successContainersFilled:
            "Bravo, su robot ha llenado todos los contenedores",
          failureContainersFilled: "Hay un objeto fuera de los contenedores",
          failureContainersFilledLess:
            "Su robot no ha llenado todos los contenedores",
          failureContainersFilledBag: "Su robot no ha puesto todos los objetos",
          failureUnfilteredObject: "Su robot ha recogido un objeto inválido",
          failureTooManyMoves:
            "Su robot ha realizado demasiados desplazamientos.",
          failureWriteHere: "¡Su robot no puede escribir aquí!",
          failureReadHere: "¡No hay un número aquí!",
          successNumbersWritten:
            "Bravo, su robot ha escrito los números correctos!",
          failureNumbersWritten:
            "Su robot no ha escrito los números correctos!",
          failureNothingToPush: "¡No hay un objeto que empujar!",
          failureWhilePushing: "¡El robot no puede empujar este objeto!",
          failureDropObject: "No es posible poner el objeto aquí",
          failureDropOutside:
            "Su robot intenta poner un objeto fuera de la cuadrícula",
          failureNotEnoughPlatform: "No hay suficiente plataforma",
          failureLights: "Aún faltan lugares que iluminar.",
          successLights: "Bravo, ¡su robot ha iluminado todos los lugares!",
          failureLaser:
            "¡El robot debe encontrarse sobre una terminal láser para poder disparar!"
        },
        startingBlockName: "Programa del robot"
      },
      de: {
        label: {
          row: "Zeile des Roboters",
          col: "Spalte des Roboters",
          north: "gehe nach oben",
          south: "gehe nach unten",
          east: "gehe nach rechts",
          west: "gehe nach links",
          left: "drehe nach links",
          right: "drehe nach rechts",
          turnAround: "drehe um",
          forward: "gehe",
          backwards: "gehe rückwärts",
          jump: "springe",
          obstacleInFront: "vor Hindernis",
          obstacleEast: "Hindernis rechts",
          obstacleWest: "Hindernis links",
          obstacleNorth: "Hindernis oben",
          obstacleSouth: "Hindernis unten",
          obstacleRight: "Hindernis rechts",
          obstacleLeft: "Hindernis links",
          gridEdgeAbove: "unter Rand des Gitters",
          gridEdgeBelow: "über Rand des Gitters",
          gridEdgeEast: "links vom Gitterrand",
          gridEdgeWest: "rechts vom Gitterrand",
          platformInFront: "vor Plattform",
          platformAbove: "Plattform darüber",
          withdrawObject: "hebe Objekt auf",
          dropObject: "lege Objekt ab",
          onObject: "auf Objekt",
          onContainer: "auf Kiste",
          onNumber: "auf Zahl",
          onWritable: "auf Tafel",
          onLauncher: "sur un lanceur laser", // TODO :: translate
          writeNumber: "schreibe Zahl",
          readNumber: "Zahl auf dem Feld",
          pushObject: "schiebe Kiste",
          pushableInFront: "vor Kiste",
          shoot: "schieße Laser in Richtung %1",
          shoot_noShadow: "schieße Laser in Richtung %1",
          shootCondition: "Rückkehr von der Schießrichtung %1",
          shootCondition_noShadow: "Rückkehr von der Schießrichtung %1"
        },
        code: {
          row: "ligneRobot",
          col: "colonneRobot",
          north: "haut",
          south: "bas",
          east: "droite",
          west: "gauche",
          left: "tournerGauche",
          right: "tournerDroite",
          turnAround: "demiTour",
          forward: "avancer",
          backwards: "reculer",
          jump: "sauter",
          obstacleInFront: "obstacleDevant",
          obstacleEast: "obstacleDroite",
          obstacleWest: "obstacleGauche",
          obstacleNorth: "obstacleHaut",
          obstacleSouth: "obstacleBas",
          obstacleRight: "obstacleDroiteRel",
          obstacleLeft: "obstacleGaucheRel",
          gridEdgeEast: "bordGrilleDroite",
          gridEdgeWest: "bordGrilleGauche",
          gridEdgeNorth: "bordGrilleHaut",
          gridEdgeSouth: "bordGrilleBas",
          platformInFront: "plateformeDevant",
          platformAbove: "plateformeDessus",
          withdrawObject: "ramasserObjet",
          dropObject: "deposerObjet",
          onObject: "surObjet",
          onContainer: "surConteneur",
          onNumber: "surNombre",
          onWritable: "surTableau",
          onLauncher: "surLanceur",
          writeNumber: "ecrireNombre",
          readNumber: "nombreSurCase",
          pushObject: "pousserObjet",
          pushableInFront: "poussableDevant",
          shoot: "tirerLaser",
          shoot_noShadow: "tirerLaser",
          shootCondition: "tirerCondition",
          shootCondition_noShadow: "tirerCondition"
        },
        messages: {
          leavesGrid: "Der Roboter hat das Gitter verlassen!",
          obstacle: "Der Roboter ist gegen ein Hindernis gelaufen!",
          nothingToPickUp: "An dieser Stelle gibt es nichts zum aufheben!",
          nothingToLookAt: "An dieser Stelle gibt es nichts zum betrachten!",
          falls: "Der Roboter fällt in den Abgrund!",
          willFallAndCrash:
            "Der Roboter würde hier runterfallen und kaputt gehen!",
          jumpOutsideGrid: "Der Roboter versucht, aus dem Gitter zu springen!",
          jumpObstacleBlocking:
            "Der Roboter kann hier nicht springen, weil ein Hindernis ihn blockiert.",
          jumpNoPlatform:
            "Der Roboter kann hier nicht springen, weil über ihm keine Plattform ist.",
          tooManyObjects:
            "Der Roboter kann nicht so viele Objekte auf einmal tragen!",
          emptyBag:
            "Der Roboter kann nichts ablegen, weil er gar nichts transportiert!",
          successReachExit: "Bravo! Der Roboter hat den Ausgang erreicht.",
          failureReachExit: "Der Roboter hat den Ausgang nicht erreich!",
          successPickedAllWithdrawables:
            "Bravo! Der Roboter hat alles eingesammelt.",
          failurePickedAllWithdrawables:
            "Der Roboter hat nicht alles eingesammelt!",
          successContainersFilled:
            "Gut gemacht! Der Roboter hat alle Behälter gefüllt.",
          failureContainersFilled:
            "Es befindet sich ein Objekt außerhalb der Behälter.",
          failureContainersFilledLess:
            "Der Roboter hat nicht alle Behälter gefüllt.",
          failureContainersFilledBag:
            "Der Roboter hat nicht alle Objekte platziert.",
          failureUnfilteredObject:
            "Dein Roboter hat ein nicht erlaubtes Objekt aufgehoben!",
          failureTooManyMoves: "Votre robot a effectué trop de déplacements.",
          failureWriteHere:
            "Der Roboter kann an dieser Stelle nicht schreiben!",
          failureReadHere: "An dieser Stelle steht keine Zahl!",
          successNumbersWritten:
            "Bravo! Der Roboter hat die richtigen Zahlen geschrieben.",
          failureNumbersWritten:
            "Dein Roboter hat nicht die richtigen Zahlen geschrieben!",
          failureNothingToPush: "An dieser Stelle gibt es nichts zum Schieben!",
          failureWhilePushing:
            "Der Roboter hat es nicht geschafft, das Objekt zu schieben!",
          failureDropObject:
            "An dieser Stelle kann kein Objekt abgelegt werden!",
          failureDropOutside:
            "Der Roboter hat versucht ein Objekt vom Gitterrand zu schieben!",
          failureNotEnoughPlatform: "Nicht genügend Plattformen!",
          failureLights: "Der Roboter hat nicht alles beleuchtet!",
          successLights: "Bravo! Der Roboter hat alles beleuchtet.",
          failureLaser:
            "Der Roboter muss auf einem Laser stehen, um schießen zu können!"
        },
        startingBlockName: "Roboter-Programm"
      }
    },
    arrows: {
      fr: {
        messages: {
          obstacle: "The robot will get out of the marked track!",
          successReachExit: "Congratulations, your robot collected the safe!",
          failureReachExit: "Yout robot got lost."
        }
      },
      en: {
        messages: {
          obstacle: "The robot will get out of the marked track!",
          successReachExit: "Congratulations, your robot collected the safe!",
          failureReachExit: "Yout robot got lost."
        }
      },

      es: {
        messages: {
          obstacle: "¡El robot va a salirse del camino marcado!",
          successReachExit: "Bravo, ¡su robot ha recuperado el cofre!",
          failureReachExit: "Su robot se perdió en el camino."
        }
      }
    },
    cards: {
      fr: {
        label: {
          withdrawObject: "pick up the card",
          dropObject: "drop the card",
          onObject: "on a card",
          onContainer: "on a placeholder"
        },
        messages: {
          successContainersFilled:
            "Congratulations, your robot placed all the cards at the right location!",
          failureContainersFilled: "Some cards are misplaced",
          failureContainersFilledLess: "There are still misplaced cards.",
          failureContainersFilledBag: "Your robot must drop its card."
        }
      },
      en: {
        label: {
          withdrawObject: "pick up the card",
          dropObject: "drop the card",
          onObject: "on a card",
          onContainer: "on a placeholder"
        },
        messages: {
          successContainersFilled:
            "Congratulations, your robot placed all the cards at the right location!",
          failureContainersFilled: "Some cards are misplaced",
          failureContainersFilledLess: "There are still misplaced cards.",
          failureContainersFilledBag: "Your robot must drop its card."
        }
      },

      es: {
        label: {
          withdrawObject: "recoger la carta",
          dropObject: "soltar la carta",
          onObject: "sobre una carta",
          onContainer: "en un sitio de depósito"
        },
        messages: {
          successContainersFilled:
            "Bravo, su robot ha ordenado las cartas en un buen lugar!",
          failureContainersFilled: "Hay cartas ordenadas incorrectamente.",
          failureContainersFilledLess: "Aún quedan cartas sin ordenar.",
          failureContainersFilledBag: "Su robot debe depositar su carta."
        }
      }
    },
    chticode_abs: {
      fr: {
        label: {},
        messages: {
          successPickedAllWithdrawables:
            "Bravo, votre robot a réussi la mission !",
          failureReachExit: "Votre robot n'a pas atteint la case verte."
        }
      },
      en: {
        label: {},
        messages: {
          successPickedAllWithdrawables:
            "Congratulations, your robot succeeded this mission!",
          failureReachExit: "Your robot didn't reach the green cell."
        }
      },

      es: {
        label: {},
        messages: {
          successPickedAllWithdrawables:
            "Bravo, ¡su robot ha completado la misión!",
          failureReachExit: "Su robot no llegó a la casilla verde."
        }
      }
    },
    chticode_rel: {
      fr: {
        label: {},
        messages: {
          successReachExit: "Bravo, votre robot a atteint la case verte !",
          failureReachExit: "Votre robot n'a pas atteint la case verte."
        }
      },
      en: {
        label: {},
        messages: {
          successReachExit:
            "Congratulations, your robot reached the green cells!",
          failureReachExit: "Your robot didn't reach the green cell."
        }
      },

      es: {
        label: {},
        messages: {
          successReachExit: "Bravo, ¡su robot llegó a la casilla verde!",
          failureReachExit: "Su robot no ha llegado a la casilla verde."
        }
      }
    },
    cones: {
      fr: {
        label: {
          dropObject: "déposer un plot",
          onContainer: "sur une case marquée",
          obstacleInFront: "plot devant"
        },
        code: {
          dropObject: "deposerPlot",
          onContainer: "surCaseMarquee",
          obstacleInFront: "plotDevant"
        },
        messages: {
          successContainersFilled:
            "Bravo, votre robot a déposé des plots sur les bonnes cases !",
          failureContainersFilled:
            "Il manque des plots ou ils ne sont pas au bon endroit."
        }
      },

      en: {
        label: {
          dropObject: "drop a cone",
          onContainer: "on a marked cell",
          obstacleInFront: "cone ahead"
        },
        code: {
          dropObject: "dropCone",
          onContainer: "onMarkedCell",
          obstacleInFront: "coneAhead"
        },
        messages: {
          successContainersFilled:
            "Congratulations, your robot dropped cones on the marked cells!",
          failureContainersFilled: "Some cones are missing or are misplaced."
        }
      },

      es: {
        label: {
          dropObject: "soltar un cono",
          onContainer: "sobre una casilla marcada",
          obstacleInFront: "cono adelante"
        },
        code: {
          dropObject: "soltarCono",
          onContainer: "sobreCasillaMarcada",
          obstacleInFront: "conoAdelante"
        },
        messages: {
          successContainersFilled:
            "Bravo, ¡Su robot ha puesto los conos en las casillas correctas!",
          failureContainersFilled: "Aún hay conos en lugares incorrectos."
        }
      }
    },
    flowers: {
      fr: {
        label: {
          dropObject: "semer une graine",
          onContainer: "terre sur la case",
          obstacleInFront: "fleur devant"
        },
        code: {
          dropObject: "semerGraine",
          onContainer: "terreSurCase",
          obstacleInFront: "fleurDevant"
        },
        messages: {
          successContainersFilled: "Bravo, votre robot est un bon jardinier !",
          failureContainersFilled:
            "Votre robot a semé hors des zones de terre.",
          failureContainersFilledLess: "Il reste de la terre vide de fleur !",
          failureDropObject: "Il y a déjà une fleur ici !",
          obstacle: "Attention à la fleur !"
        }
      },
      en: {
        label: {
          dropObject: "plant a seed",
          onContainer: "soil on the cell",
          obstacleInFront: "flower ahead"
        },
        code: {
          dropObject: "plantSeed",
          onContainer: "soilOnCell",
          obstacleInFront: "flowerAhead"
        },
        messages: {
          successContainersFilled:
            "Congratulations, your robot is a good gardener!",
          failureContainersFilled:
            "Your robot dropped seeds where there is no soil.",
          failureContainersFilledLess: "Some soil spots don't have any flower!",
          failureDropObject: "There is already a flower here !",
          obstacle: "Be careful, there's a flower!"
        }
      },

      es: {
        label: {
          dropObject: "sembrar una semilla",
          onContainer: "tierra en la casilla",
          obstacleInFront: "flor adelante"
        },
        code: {
          dropObject: "sembrarSemilla",
          onContainer: "tierraEnCasilla",
          obstacleInFront: "florAdelante"
        },
        messages: {
          successContainersFilled: "Bravo, ¡el robot es un gran jardinero!",
          failureContainersFilled:
            "El robot ha sembrado fuera de las casillas con tierra",
          failureDropObject: "Ya hay una flor aqui !",
          failureContainersFilledLess: "¡Aún hay tierra sin flores!"
        }
      }
    },
    course: {
      fr: {
        messages: {
          successReachExit: "Bravo, le robot a atteint la case verte !",
          failureReachExit: "Le robot n'est pas arrivé sur la case verte.",
          obstacle: "Le robot tente de foncer dans un mur !"
        }
      },
      en: {
        messages: {
          successReachExit:
            "Congratulations, the robot reached the green cell!",
          failureReachExit: "The robot didn't reach the green cell.",
          obstacle: "The robot is attemting to run into a wall!"
        }
      },

      es: {
        messages: {
          successReachExit: "Bravo, ¡El robot llegó a la casilla verde!",
          failureReachExit: "El robot no llegó a la casilla verde.",
          obstacle: "¡El robot intenta traspasar un muro!"
        }
      }
    },
    dominoes: {
      fr: {
        label: {
          withdrawObject: "ramasser le domino"
        },
        code: {
          withdrawObject: "ramasserDomino"
        },
        messages: {
          successPickedAllWithdrawables:
            "Bravo, le robot a ramassé tous les dominos demandés !",
          failurePickedAllWithdrawables:
            "Le robot n'a pas ramassé les dominos demandés."
        }
      },
      en: {
        label: {
          withdrawObject: "pick the domino"
        },
        code: {
          withdrawObject: "pickDomino"
        },
        messages: {
          successPickedAllWithdrawables:
            "Congratulations, the robot picked all the requested dominoes!",
          failurePickedAllWithdrawables:
            "The robot didn't pick up the requested dominoes!"
        }
      },
      es: {
        label: {
          withdrawObject: "recoger el dominó"
        },
        code: {
          withdrawObject: "recogerDomino"
        },
        messages: {
          successPickedAllWithdrawables:
            "Bravo, ¡el robot recogió todos los dominó requeridos!",
          failurePickedAllWithdrawables:
            "El robot no recogió todos los dominó requeridos."
        }
      }
    },
    gears: {
      fr: {
        label: {
          withdrawObject: "ramasser la roue dentée",
          dropObject: "accrocher la roue dentée",
          onObject: "sur une roue dentée",
          onContainer: "sur une machine"
        },
        code: {
          withdrawObject: "ramasserRoue",
          dropObject: "deposerRoue",
          onObject: "surRoueDentee",
          onContainer: "surMachine"
        },
        messages: {
          successContainersFilled:
            "Bravo, les machines sont prêtes à fonctionner !",
          failureContainersFilled:
            "Votre robot n'a pas replacé toutes les roues dentées au bon endroit.",
          failureContainersFilledLess:
            "Votre robot n'a pas replacé toutes les roues dentées au bon endroit.",
          failureContainersFilledBag:
            "Votre robot doit déposer la roue dentée sur la machine.",
          failureDropOutside:
            "Votre robot essaie de construire une plateforme hors de la grille.",
          failureDropObject: "Il y a déjà une plateforme ici !",
          emptyBag:
            "Le robot essaie d'accrocher une roue dentée alors qu'il n'en transporte pas !"
        }
      },

      en: {
        label: {
          withdrawObject: "pick up the gear",
          dropObject: "accrocher la roue dentée",
          onObject: "sur une roue dentée",
          onContainer: "sur une machine"
        },
        code: {
          withdrawObject: "pickGear",
          dropObject: "attachGear",
          onObject: "onGear",
          onContainer: "onMachine"
        },
        messages: {
          successContainersFilled:
            "Bravo, les machines sont prêtes à fonctionner !",
          failureContainersFilled:
            "Votre robot n'a pas replacé toutes les roues dentées au bon endroit.",
          failureContainersFilledLess:
            "Votre robot n'a pas replacé toutes les roues dentées au bon endroit.",
          failureContainersFilledBag:
            "Votre robot doit déposer la roue dentée sur la machine.",
          failureDropOutside:
            "Votre robot essaie de construire une plateforme hors de la grille.",
          failureDropObject: "Il y a déjà une plateforme ici !",
          emptyBag:
            "Le robot essaie d'accrocher une roue dentée alors qu'il n'en transporte pas !"
        }
      },

      es: {
        label: {
          withdrawObject: "recoger el engranaje",
          dropObject: "soltar el engranaje",
          onObject: "sobre engranaje",
          onContainer: "sobre una máquina"
        },
        code: {
          withdrawObject: "recogerEngranaje",
          dropObject: "soltarEngranaje",
          onObject: "sobreEngranaje",
          onContainer: "sobreMaquina"
        },
        messages: {
          successContainersFilled:
            "Bravo, ¡la máquina está lista para funcionar!",
          failureContainersFilled:
            "Su robot no ha puesto todos los engranajes en el lugar correcto.",
          failureContainersFilledLess:
            "Su robot no ha puesto todos los engranajes en el lugar correcto.",
          failureContainersFilledBag:
            "Su robot debe colocar el engranaje en la máquina.",
          failureDropOutside:
            "Su robot intenta construir una plataforma fuera de la cuadrícula."
        }
      }
    },
    marbles: {
      fr: {
        label: {
          withdrawObject: "pick up the ball",
          dropObject: "drop the ball",
          onObject: "on a ball",
          onContainer: "on a hole"
        },
        code: {
          withdrawObject: "ramasserBille",
          dropObject: "deposerBille",
          onObject: "surBille",
          onContainer: "surTrou"
        },
        messages: {
          emptyBag: "The robot does not carry a ball!",
          tooManyObjects: "The robot is already carrying a ball!",
          successContainersFilled: "Well done, you have put the balls away!",
          failureContainersFilled: "Not all of the logs are tidy.",
          failureContainersFilledLess: "There is one ball left to put away.",
          failureContainersFilledBag: "You have to put the ball in the hole!"
        }
      },

      es: {
        label: {
          withdrawObject: "recoger la bola",
          dropObject: "soltar la bola",
          onObject: "sobre una bola",
          onContainer: "sobre un agujero"
        },
        code: {
          withdrawObject: "recogerBola",
          dropObject: "soltarBola",
          onObject: "sobreBola",
          onContainer: "sobreAgujero"
        },
        messages: {
          emptyBag: "¡El robot no carga ninguna bola!",
          tooManyObjects: "¡El robot ya está cargando una bola!",
          successContainersFilled: "Bravo, ¡el robot ordenó las bolas!",
          failureContainersFilled: "Hay bolas en lugares incorrectos.",
          failureContainersFilledLess: "Aún falta colocar una bola.",
          failureContainersFilledBag: "¡Debe colocar la bola en un agujero!"
        }
      }
    },
    objects_in_space: {
      fr: {
        label: {
          obstacleInFront: "astéroïde devant"
        },
        code: {
          obstacleInFront: "asteroideDevant"
        },
        messages: {
          obstacle: "Attention à l'astéroïde !"
        }
      },

      es: {
        label: {
          obstacleInFront: "asteroide adelante"
        },
        code: {
          obstacleInFront: "asteroideAdelante"
        },
        messages: {
          obstacle: "¡Cuidado con el asteroide!"
        }
      }
    },
    paint: {
      fr: {
        label: {
          dropObject: "paint the box",
          onContainer: "on a marked box",
          readNumber: "number of the box"
        },
        code: {
          dropObject: "peindreCase",
          onContainer: "surCaseMarquee",
          readNumber: "nombreSurCase"
        },
        messages: {
          successContainersFilled: "Bravo, votre robot a peint le motif !",
          failureContainersFilled:
            "Votre robot n'a pas peint les bonnes cases.",
          failureContainersFilledLess:
            "Votre robot n'a pas peint toutes les cases marquées.",
          failureContainersFilledBag: "Votre robot n'a pas posé tous les objets"
        }
      },

      es: {
        label: {
          dropObject: "pintar la casilla",
          onContainer: "sobre una casilla marcada",
          readNumber: "número en la casilla"
        },
        code: {
          dropObject: "pintarCasilla",
          onContainer: "sobreCasillaMarcada",
          readNumber: "númeroEnCasilla"
        },
        messages: {
          successContainersFilled: "Bravo, ¡su robot ha pintado el patrón!",
          failureContainersFilled: "El robot no pintó las casillas correctas.",
          failureContainersFilledLess:
            "Su robot no ha pintado todas las casillas marcadas.",
          failureContainersFilledBag: "Su robot no ha puesto todos los objetos"
        }
      }
    },
    rocket: {
      fr: {
        label: {
          obstacleRight: "asteroïde à droite",
          obstacleInFront: "asteroïde devant"
        },
        messages: {
          successReachExit: "Bravo, le robot a rejoint la fusée !",
          failureReachExit:
            "Le robot est perdu dans l'espace. Recommencez pour l'aider à rejoindre la fusée.",
          obstacle: "Attention à l'astéroïde !"
        }
      },

      es: {
        label: {
          obstacleRight: "asteroide a la derecha",
          obstacleInFront: "asteroide adelante"
        },
        messages: {
          successReachExit: "Bravo, ¡el robot llegó al cohete!",
          failureReachExit:
            "El robot está perdido en el espacio. Vuelva a comenzar para ayudarle a llegar al cohete.",
          obstacle: "¡Cuidado con el asteroide!"
        }
      }
    },
    sokoban: {
      fr: {
        label: {
          pushObject: "push the box",
          onContainer: "on a marked cell",
          pushableInFront: "in front of a box",
          obstacleInFront: "in front of an obstacle",
          readNumber: "number on the cell"
        },
        code: {
          pushObject: "pousserCaisse",
          onContainer: "surCaseMarquee",
          pushableInFront: "caisseDevant",
          obstacleInFront: "obstacleDevant",
          readNumber: "nombreSurCase"
        },
        messages: {
          successContainersFilled:
            "Congratulations, the boxes are correctly placed!",
          failureContainersFilled:
            "There are still boxes that are not places correctly.",
          failureNothingToPush: "There is no box to push here!",
          failureWhilePushing: "The robot can't push here!",
          obstacle: "The robot is trying to move into a wall or a box!"
        }
      },

      en: {
        label: {
          pushObject: "push the box",
          onContainer: "on a marked cell",
          pushableInFront: "in front of a box",
          obstacleInFront: "in front of an obstacle",
          readNumber: "number on the cell"
        },
        code: {
          pushObject: "pushBox",
          onContainer: "onMarkedCell",
          pushableInFront: "boxAhead",
          obstacleInFront: "obstacleAhead",
          readNumber: "numberOnCell"
        },
        messages: {
          successContainersFilled:
            "Congratulations, the boxes are correctly placed!",
          failureContainersFilled:
            "There are still boxes that are not places correctly.",
          failureNothingToPush: "There is no box to push here!",
          failureWhilePushing: "The robot can't push here!",
          obstacle: "The robot is trying to move into a wall or a box!"
        }
      },

      es: {
        label: {
          pushObject: "empujar la caja",
          onContainer: "sobre una casilla marcada",
          pushableInFront: "caja adelante",
          obstacleInFront: "obstáculo adelante",
          readNumber: "número en la casilla"
        },
        code: {
          pushObject: "empujarCaja",
          onContainer: "sobreCasillaMarcada",
          pushableInFront: "cajaAdelante",
          obstacleInFront: "obstáculoAdelante",
          readNumber: "númeroEnCasilla"
        },
        messages: {
          successContainersFilled: "Bravo, ¡las cajas están bien ordenadas!",
          failureContainersFilled: "Aún hay cajas que no están en su lugar.",
          failureNothingToPush: "¡Aquí no hay caja para empujar!",
          failureWhilePushing: "¡El robot no puede empujar aquí!",
          obstacle: "El robot intenta traspasar un muro o una caja!"
        }
      }
    }
  };

  
  var iconSrc = $("img[src$='icon.png']").attr("src");
  var imgPrefix = iconSrc.substring(0, iconSrc.length - 8);

  if (infos.newBlocks == undefined) infos.newBlocks = [];
  if (infos.maxFallAltitude == undefined) infos.maxFallAltitude = 2;

  var loadContext = function(name) {
    for (var language in contextStrings[name]) {
      var ctx = contextStrings[name][language];
      for (var type in ctx) {
        if (typeof ctx[type] === "string") {
          localLanguageStrings[language][type] = ctx[type];
        } else {
          if (localLanguageStrings[language][type] == undefined)
            localLanguageStrings[language][type] = {};
          for (var line in ctx[type]) {
            localLanguageStrings[language][type][line] = ctx[type][line];
          }
        }
      }
    }

    for (var param in contextParams[name]) {
      if (infos[param] === undefined || param == "newBlocks") {
        infos[param] = contextParams[name][param];
      }
    }
  };

  loadContext("none");
  if (infos.contextType != undefined) {
    loadContext(infos.contextType);
  }

  infos.newBlocks.push({
    name: "row",
    type: "sensors",
    block: { name: "row", yieldsValue: "int" },
    func: function(callback) {
      this.callCallback(callback, 1 + this.getRobot().row);
    }
  });

  infos.newBlocks.push({
    name: "col",
    type: "sensors",
    block: { name: "col", yieldsValue: "int" },
    func: function(callback) {
      this.callCallback(callback, 1 + this.getRobot().col);
    }
  });

  infos.newBlocks.push({
    name: "wait",
    type: "actions",
    block: { name: "wait" },
    func: function(callback) {
      this.advanceTime(1);
      this.waitDelay(callback);
    }
  });

  infos.newBlocks.push({
    name: "north",
    type: "actions",
    block: { name: "north" },
    func: function(callback) {
      this.north(callback);
    }
  });

  infos.newBlocks.push({
    name: "south",
    type: "actions",
    block: { name: "south" },
    func: function(callback) {
      this.south(callback);
    }
  });

  infos.newBlocks.push({
    name: "east",
    type: "actions",
    block: { name: "east" },
    func: function(callback) {
      this.east(callback);
    }
  });

  infos.newBlocks.push({
    name: "west",
    type: "actions",
    block: { name: "west" },
    func: function(callback) {
      this.west(callback);
    }
  });

  infos.newBlocks.push({
    name: "left",
    type: "actions",
    block: { name: "left" },
    func: function(callback) {
      this.turnLeft(callback);
    }
  });

  infos.newBlocks.push({
    name: "right",
    type: "actions",
    block: { name: "right" },
    func: function(callback) {
      this.turnRight(callback);
    }
  });

  infos.newBlocks.push({
    name: "turnAround",
    type: "actions",
    block: { name: "turnAround" },
    func: function(callback) {
      this.turnAround(callback);
    }
  });

  infos.newBlocks.push({
    name: "forward",
    type: "actions",
    block: { name: "forward" },
    func: function(callback) {
      this.forward(callback);
    }
  });

  infos.newBlocks.push({
    name: "backwards",
    type: "actions",
    block: { name: "backwards" },
    func: function(callback) {
      this.backwards(callback);
    }
  });

  infos.newBlocks.push({
    name: "jump",
    type: "actions",
    block: { name: "jump" },
    func: function(callback) {
      this.jump(callback);
    }
  });

  infos.newBlocks.push({
    name: "obstacleInFront",
    type: "sensors",
    block: { name: "obstacleInFront", yieldsValue: true },
    func: function(callback) {
      this.callCallback(callback, this.obstacleInFront());
    }
  });

  infos.newBlocks.push({
    name: "obstacleEast",
    type: "sensors",
    block: { name: "obstacleEast", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(
        callback,
        this.hasOn(robot.row, robot.col + 1, function(obj) {
          return obj.isObstacle === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "obstacleWest",
    type: "sensors",
    block: { name: "obstacleWest", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(
        callback,
        this.hasOn(robot.row, robot.col - 1, function(obj) {
          return obj.isObstacle === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "obstacleNorth",
    type: "sensors",
    block: { name: "obstacleNorth", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(
        callback,
        this.hasOn(robot.row - 1, robot.col, function(obj) {
          return obj.isObstacle === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "obstacleSouth",
    type: "sensors",
    block: { name: "obstacleSouth", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(
        callback,
        this.hasOn(robot.row + 1, robot.col, function(obj) {
          return obj.isObstacle === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "obstacleRight",
    type: "sensors",
    block: { name: "obstacleRight", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      var coords = this.coordsInFront(1);
      this.callCallback(
        callback,
        this.hasOn(coords.row, coords.col, function(obj) {
          return obj.isObstacle === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "obstacleLeft",
    type: "sensors",
    block: { name: "obstacleLeft", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      var coords = this.coordsInFront(3);
      this.callCallback(
        callback,
        this.hasOn(coords.row, coords.col, function(obj) {
          return obj.isObstacle === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "gridEdgeEast",
    type: "sensors",
    block: { name: "gridEdgeEast", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(callback, !this.isInGrid(robot.row, robot.col + 1));
    }
  });

  infos.newBlocks.push({
    name: "gridEdgeWest",
    type: "sensors",
    block: { name: "gridEdgeWest", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(callback, !this.isInGrid(robot.row, robot.col - 1));
    }
  });

  infos.newBlocks.push({
    name: "gridEdgeNorth",
    type: "sensors",
    block: { name: "gridEdgeNorth", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(callback, !this.isInGrid(robot.row - 1, robot.col));
    }
  });

  infos.newBlocks.push({
    name: "gridEdgeSouth",
    type: "sensors",
    block: { name: "gridEdgeSouth", yieldsValue: true },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(callback, !this.isInGrid(robot.row + 1, robot.col));
    }
  });

  infos.newBlocks.push({
    name: "platformInFront",
    type: "sensors",
    block: { name: "platformInFront", yieldsValue: true },
    func: function(callback) {
      this.callCallback(callback, this.platformInFront());
    }
  });

  infos.newBlocks.push({
    name: "platformAbove",
    type: "sensors",
    block: { name: "platformAbove", yieldsValue: true },
    func: function(callback) {
      this.callCallback(callback, this.platformAbove());
    }
  });
  
   infos.newBlocks.push({
    name: "hasDiamond",
    type: "sensors",
    block: { name: "hasDiamond", yieldsValue: true },
    func: function(callback) {
      this.callCallback(callback, this.hasDiamond());
    }
  });
  
    infos.newBlocks.push({
    name: "hasAKey",
    type: "sensors",
    block: { name: "hasAKey", yieldsValue: true },
    func: function(callback) {
      this.callCallback(callback, this.hasAKey());
    }
  });


  infos.newBlocks.push({
    name: "withdrawObject",
    type: "actions",
    block: { name: "withdrawObject" },
    func: function(callback) {
      this.withdraw();
      this.waitDelay(callback);
    }
  });
  
  infos.newBlocks.push({
    name: "openLocker1KeyForNLockers",
    type: "actions",
    block: { name: "openLocker1KeyForNLockers" },
    func: function(callback) {
      this.openLocker(false);
      this.waitDelay(callback);
    }
  });
  
    infos.newBlocks.push({
    name: "openLocker1KeyFor1Locker",
    type: "actions",
    block: { name: "openLocker1KeyFor1Locker" },
    func: function(callback) {
      this.openLocker(true);
      this.waitDelay(callback);
    }
  });

  infos.newBlocks.push({
    name: "dropObject",
    type: "actions",
    block: { name: "dropObject" },
    func: function(callback) {
      this.drop();
      this.waitDelay(callback);
    }
  });

  infos.newBlocks.push({
    name: "onObject",
    type: "sensors",
    block: { name: "onObject", yieldsValue: true },
    func: function(callback) {
      this.callCallback(
        callback,
        this.isOn(function(obj) {
          return obj.isWithdrawable === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "onContainer",
    type: "sensors",
    block: { name: "onContainer", yieldsValue: true },
    func: function(callback) {
      this.callCallback(
        callback,
        this.isOn(function(obj) {
          return obj.isContainer === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "onNumber",
    type: "sensors",
    block: { name: "onNumber", yieldsValue: true },
    func: function(callback) {
      this.callCallback(
        callback,
        this.isOn(function(obj) {
          return obj.value !== undefined;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "onLauncher",
    type: "sensors",
    block: { name: "onLauncher", yieldsValue: true },
    func: function(callback) {
      this.callCallback(
        callback,
        this.isOn(function(obj) {
          return obj.isLaser === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "onWritable",
    type: "sensors",
    block: { name: "onWritable", yieldsValue: true },
    func: function(callback) {
      this.callCallback(
        callback,
        this.isOn(function(obj) {
          return obj.isWritable === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "writeNumber",
    type: "actions",
    block: { name: "writeNumber", params: [null] },
    func: function(value, callback) {
      var robot = this.getRobot();
      this.writeNumber(robot.row, robot.col, value);
      this.waitDelay(callback);
    }
  });

  infos.newBlocks.push({
    name: "readNumber",
    type: "sensors",
    block: { name: "readNumber", yieldsValue: "int" },
    func: function(callback) {
      var robot = this.getRobot();
      this.callCallback(callback, this.readNumber(robot.row, robot.col));
    }
  });

  infos.newBlocks.push({
    name: "pushObject",
    type: "actions",
    block: { name: "pushObject" },
    func: function(callback) {
      this.pushObject(callback);
    }
  });

  infos.newBlocks.push({
    name: "pushableInFront",
    type: "sensors",
    block: { name: "pushableInFront", yieldsValue: true },
    func: function(callback) {
      this.callCallback(
        callback,
        this.isInFront(function(obj) {
          return obj.isPushable === true;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "dropInFront",
    type: "actions",
    block: { name: "dropInFront" },
    func: function(callback) {
      this.drop(1, this.coordsInFront());
      this.callCallback(callback);
    }
  });

  infos.newBlocks.push({
    name: "dropAbove",
    type: "actions",
    block: { name: "dropAbove" },
    func: function(callback) {
      this.drop(1, { row: this.getRobot().row - 1, col: this.getRobot().col });
      this.callCallback(callback);
    }
  });

  infos.newBlocks.push({
    name: "shoot_noShadow",
    type: "actions",
    block: {
      name: "shoot_noShadow",
      params: [null]
    },
    func: function(value, callback) {
      if (typeof value == "function") {
        this.callCallback(value);
        return;
      }
      if (
        this.isOn(function(obj) {
          return obj.isLaser === true;
        })
      ) {
        this.shoot(this.getRobot().row, this.getRobot().col, value);
        if (this.display) {
          var robot = this.getRobot();
          var lasers = context.getItemsOn(robot.row, robot.col, function(obj) {
            return obj.isLaser === true;
          });

          if (lasers.length != 0) {
            lasers[0].element.toFront();
          }

          robot.element.toFront();
        }
      } else {
        throw window.languageStrings.messages.failureLaser;
      }
      this.waitDelay(callback);
    }
  });

  infos.newBlocks.push({
    name: "shoot",
    type: "actions",
    block: {
      name: "shoot",
      params: [null],
      blocklyXml:
        "<block type='shoot_noShadow'>" +
        "  <value name='PARAM_0'>" +
        "    <shadow type='math_number'>" +
        "      <field name='NUM'>0</field>" +
        "    </shadow>" +
        "  </value>" +
        "</block>"
    },
    func: function(value, callback) {
      if (typeof value == "function") {
        this.callCallback(value);
        return;
      }
      if (
        this.isOn(function(obj) {
          return obj.isLaser === true;
        })
      ) {
        this.shoot(this.getRobot().row, this.getRobot().col, value);
        if (this.display) {
          var robot = this.getRobot();
          var lasers = context.getItemsOn(robot.row, robot.col, function(obj) {
            return obj.isLaser === true;
          });

          if (lasers.length != 0) {
            lasers[0].element.toFront();
          }

          robot.element.toFront();
        }
      } else {
        throw window.languageStrings.messages.failureLaser;
      }
      this.waitDelay(callback);
    }
  });

  infos.newBlocks.push({
    name: "shootCondition_noShadow",
    type: "actions",
    block: {
      name: "shootCondition_noShadow",
      params: [null],
      yieldsValue: true
    },
    func: function(value, callback) {
      if (typeof value == "function") {
        this.callCallback(value);
        return;
      }

      if (
        this.isOn(function(obj) {
          return obj.isLaser === true;
        })
      ) {
        var retour = this.shoot(
          this.getRobot().row,
          this.getRobot().col,
          value
        );
        if (this.display) {
          var robot = this.getRobot();
          var lasers = context.getItemsOn(robot.row, robot.col, function(obj) {
            return obj.isLaser === true;
          });

          if (lasers.length != 0) {
            lasers[0].element.toFront();
          }

          robot.element.toFront();
        }
        this.waitDelay(callback, retour);
      } else {
        throw window.languageStrings.messages.failureLaser;
        this.callCallback(callback);
      }
    }
  });

  infos.newBlocks.push({
    name: "shootCondition",
    type: "actions",
    block: {
      name: "shootCondition",
      blocklyXml:
        "<block type='shootCondition_noShadow'>" +
        "  <value name='PARAM_0'>" +
        "    <shadow type='math_number'>" +
        "      <field name='NUM'>0</field>" +
        "    </shadow>" +
        "  </value>" +
        "</block>"
    },
    func: function(value, callback) {
      if (typeof value == "function") {
        this.callCallback(value);
        return;
      }

      if (
        this.isOn(function(obj) {
          return obj.isLaser === true;
        })
      ) {
        var retour = this.shoot(
          this.getRobot().row,
          this.getRobot().col,
          value
        );
        if (this.display) {
          var robot = this.getRobot();
          var lasers = context.getItemsOn(robot.row, robot.col, function(obj) {
            return obj.isLaser === true;
          });

          if (lasers.length != 0) {
            lasers[0].element.toFront();
          }

          robot.element.toFront();
        }
        this.waitDelay(callback, retour);
      } else {
        throw window.languageStrings.messages.failureLaser;
        this.callCallback(callback);
      }
    }
  });

  infos.newBlocks.push({
    name: "connect",
    type: "actions",
    block: { name: "connect" },
    func: function(callback) {
      this.connect();
      this.callCallback(callback);
    }
  });

  infos.newBlocks.push({
    name: "onMale",
    type: "sensors",
    block: { name: "onMale", yieldsValue: true },
    func: function(callback) {
      this.callCallback(
        callback,
        this.isOn(function(obj) {
          return obj.plugType > 0;
        })
      );
    }
  });

  infos.newBlocks.push({
    name: "onFemale",
    type: "sensors",
    block: { name: "onFemale", yieldsValue: true },
    func: function(callback) {
      this.callCallback(
        callback,
        this.isOn(function(obj) {
          return obj.plugType < 0;
        })
      );
    }
  });

  var context = quickAlgoContext(display, infos);
  context.robot = {};
  context.customBlocks = {
    robot: {
      actions: [],
      sensors: []
    }
  };

  for (var command in infos.newBlocks) {
    cmd = infos.newBlocks[command];
    context.customBlocks.robot[cmd.type].push(cmd.block);
    if (cmd.strings) {
      for (var language in cmd.strings) {
        for (var type in cmd.strings[language]) {
          localLanguageStrings[language][type][cmd.name] =
            cmd.strings[language][type];
        }
      }
    }
    if (cmd.func) {
      context.robot[cmd.name] = cmd.func.bind(context);
    }
  }

  var strings = context.setLocalLanguageStrings(localLanguageStrings);

  function replaceStringsRec(source, dest) {
    if (typeof source != "object" || typeof dest != "object") {
      return;
    }
    for (var key1 in source) {
      if (dest[key1] != undefined) {
        if (typeof dest[key1] == "object") {
          replaceStringsRec(source[key1], dest[key1]);
        } else {
          dest[key1] = source[key1];
        }
      }
    }
  }

  if (infos.languageStrings != undefined) {
    replaceStringsRec(infos.languageStrings.blocklyRobot_lib, strings);
  }

  var cells = [];
  var colsLabels = [];
  var rowsLabels = [];
  var scale = 1;
  var paper;

  if (infos.leftMargin === undefined) {
    infos.leftMargin = 10;
  }
  if (infos.rightMargin === undefined) {
    infos.rightMargin = 10;
  }
  if (infos.bottomMargin === undefined) {
    infos.bottomMargin = 10;
  }
  if (infos.topMargin === undefined) {
    if (infos.showLabels) {
      infos.topMargin = 10;
    } else {
      infos.topMargin = infos.cellSide / 2;
    }
  }
  if (infos.showLabels) {
    infos.leftMargin += infos.cellSide;
    infos.topMargin += infos.cellSide;
  }

  switch (infos.blocklyColourTheme) {
    case "bwinf":
      context.provideBlocklyColours = function() {
        return {
          categories: {
            logic: 100,
            loops: 180,
            math: 220,
            text: 250,
            lists: 60,
            colour: 310,
            variables: 340,
            functions: 20,
            actions: 260,
            sensors: 340,
            _default: 280
          },
          blocks: {}
        };
      };
      break;
    default:
  }

  context.reset = function(gridInfos) {
    if (gridInfos) {
      context.tiles = gridInfos.tiles;
      context.initItems = gridInfos.initItems;
      context.nbRows = context.tiles.length;
      context.nbCols = context.tiles[0].length;
    }
    context.nbPlatforms = infos.nbPlatforms;

    context.items = [];
    context.multicell_items = [];

    context.last_connect = undefined;
    context.wires = [];

    context.lost = false;
    context.success = false;
    context.nbMoves = 0;
    context.time = 0;
    context.bag = [];

    if (infos.bagInit != undefined) {
      for (var i = 0; i < infos.bagInit.count; i++) {
        var item = {};

        var initItem = infos.itemTypes[infos.bagInit.type];

        item.type = infos.bagInit.type;
        item.side = 0;
        item.offsetX = 0;
        item.offsetY = 0;
        item.nbStates = 1;
        item.zOrder = 0;
        for (var property in initItem) {
          item[property] = initItem[property];
        }

        context.bag.push(item);
      }
    }

    if (context.display) {
      this.delayFactory.destroyAll();
      this.raphaelFactory.destroyAll();
      if (paper !== undefined) paper.remove();
      paper = this.raphaelFactory.create(
        "paperMain",
        "grid",
        infos.cellSide * context.nbCols * scale,
        infos.cellSide * context.nbRows * scale
      );
      resetBoard();
      resetItems();
      context.updateScale();
      $("#nbMoves").html(context.nbMoves);
    } else {
      resetItems();
    }
  };

  context.unload = function() {
    if (context.display && paper != null) {
      paper.remove();
    }
  };

  var itemAttributes = function(item) {
    var itemType = infos.itemTypes[item.type];
    var x =
      (infos.cellSide * item.col + item.offsetX + infos.leftMargin) * scale;
    var y =
      (infos.cellSide * item.row -
        (item.side - infos.cellSide) +
        item.offsetY +
        infos.topMargin) *
      scale;
    var xClip = x;
    if (item.dir != undefined) {
      var dirToState = [0, 2, 4, 6];
      x = x - dirToState[item.dir] * item.side * scale;
    }
    var clipRect =
      "" + xClip + "," + y + "," + item.side * scale + "," + item.side * scale;
    if (!itemType.img && !item.img && !itemType.color && !item.color) {
      x += (item.side * scale) / 2;
      y += (item.side * scale) / 2;
    }

    var ret = {
      x: x,
      y: y,
      width: item.side * item.nbStates * scale,
      height: item.side * scale,
      "clip-rect": clipRect
    };
    return ret;
  };

  var resetBoard = function() {
    for (var iRow = 0; iRow < context.nbRows; iRow++) {
      cells[iRow] = [];
      for (var iCol = 0; iCol < context.nbCols; iCol++) {
        cells[iRow][iCol] = paper.rect(0, 0, 10, 10);
        if (context.tiles[iRow][iCol] == 0)
          cells[iRow][iCol].attr({ "stroke-width": "0" });
        if (infos.backgroundColor && context.tiles[iRow][iCol] != 0)
          cells[iRow][iCol].attr({ fill: infos.backgroundColor });
        if (infos.noBorders) {
          if (context.tiles[iRow][iCol] != 0) {
            cells[iRow][iCol].attr({ stroke: infos.backgroundColor });
          }
        } else {
          if (infos.borderColor) {
            cells[iRow][iCol].attr({ stroke: infos.borderColor });
          }
        }
      }
    }
    if (infos.showLabels) {
      for (var iRow = 0; iRow < context.nbRows; iRow++) {
        rowsLabels[iRow] = paper.text(0, 0, iRow + 1);
      }
      for (var iCol = 0; iCol < context.nbCols; iCol++) {
        colsLabels[iCol] = paper.text(0, 0, iCol + 1);
      }
    }
  };

  var resetItem = function(initItem, redisplay) {
    if (redisplay === undefined) redisplay = true;
    var item = {};
    context.items.push(item);
    for (var property in initItem) {
      item[property] = initItem[property];
    }

    item.side = 0;
    item.offsetX = 0;
    item.offsetY = 0;
    item.nbStates = 1;
    item.zOrder = 0;
    for (var property in infos.itemTypes[item.type]) {
      item[property] = infos.itemTypes[item.type][property];
    }

    if (context.display && redisplay) {
      redisplayItem(item);
    }
  };

  var resetItems = function() {
    context.items = [];
    var itemTypeByNum = {};
    for (var type in infos.itemTypes) {
      var itemType = infos.itemTypes[type];
      if (itemType.num != undefined) {
        itemTypeByNum[itemType.num] = type;
      }
    }
    for (var iRow = 0; iRow < context.nbRows; iRow++) {
      for (var iCol = 0; iCol < context.nbCols; iCol++) {
        var itemTypeNum = context.tiles[iRow][iCol];
        if (itemTypeByNum[itemTypeNum] != undefined) {
          resetItem(
            {
              row: iRow,
              col: iCol,
              type: itemTypeByNum[itemTypeNum]
            },
            false
          );
        }
      }
    }
    for (var iItem = context.initItems.length - 1; iItem >= 0; iItem--) {
      resetItem(context.initItems[iItem], false);
    }

    if (context.display) redisplayAllItems();
  };

  var resetItemsZOrder = function(row, col) {
    var cellItems = [];
    for (var iItem = context.items.length - 1; iItem >= 0; iItem--) {
      var item = context.items[iItem];
      if (item.row == row && item.col == col) {
        cellItems.push(item);
      }
    }
    cellItems.sort(function(itemA, itemB) {
      if (itemA.zOrder < itemB.zOrder) {
        return -1;
      }
      if (itemA.zOrder > itemB.zOrder) {
        return 1;
      }
      return 0;
    });
    for (var iItem = 0; iItem < cellItems.length; iItem++) {
      if (cellItems[iItem].element) cellItems[iItem].element.toFront();
    }
  };

  var redisplayItem = function(item, resetZOrder) {
    if (context.display !== true) return;
    if (resetZOrder === undefined) resetZOrder = true;

    if (item.element !== undefined) {
      item.element.remove();
    }
    var x = (infos.cellSide * item.col + infos.leftMargin) * scale;
    var y = (infos.cellSide * item.row + infos.topMargin) * scale;
    var itemType = infos.itemTypes[item.type];
    if (item.img) {
      item.element = paper.image(
        imgPrefix + item.img,
        x,
        y,
        item.side * item.nbStates * scale,
        item.side * scale
      );
    } else if (item.value !== undefined) {
      item.element = paper
        .text(
          x + (item.side * scale) / 2,
          y + (item.side * scale) / 2,
          item.value
        )
        .attr({ "font-size": (item.side * scale) / 2 });
    } else if (item.color !== undefined) {
      item.element = paper
        .rect(0, 0, item.side, item.side)
        .attr({ fill: item.color });
    }
    if (item.element !== undefined) item.element.attr(itemAttributes(item));
    if (resetZOrder) resetItemsZOrder(item.row, item.col);
  };

  context.updateScale = function() {
    if (!context.display) {
      return;
    }
    if (paper == null) {
      return;
    }

    if (window.quickAlgoResponsive) {
      var areaWidth = Math.max(200, $("#grid").width() - 24);
      var areaHeight = Math.max(150, $("#grid").height() - 24);
    } else {
      var areaWidth = 400;
      var areaHeight = 600;
    }
    var newCellSide = 0;
    if (context.nbCols && context.nbRows) {
      var marginAsCols = infos.leftMargin / infos.cellSide;
      var marginAsRows = infos.topMargin / infos.cellSide;
      newCellSide = Math.min(
        infos.cellSide,
        Math.min(
          areaWidth / (context.nbCols + marginAsCols),
          areaHeight / (context.nbRows + marginAsRows)
        )
      );
    }
    scale = newCellSide / infos.cellSide;
    paper.setSize(
      (infos.cellSide * context.nbCols + infos.leftMargin + infos.rightMargin) *
        scale,
      (infos.cellSide * context.nbRows + infos.topMargin + infos.bottomMargin) *
        scale
    );

    for (var iRow = 0; iRow < context.nbRows; iRow++) {
      for (var iCol = 0; iCol < context.nbCols; iCol++) {
        if (cells[iRow][iCol] === undefined) continue;
        var x = (infos.cellSide * iCol + infos.leftMargin) * scale;
        var y = (infos.cellSide * iRow + infos.topMargin) * scale;
        cells[iRow][iCol].attr({
          x: x,
          y: y,
          width: infos.cellSide * scale,
          height: infos.cellSide * scale
        });
      }
    }
    if (infos.showLabels) {
      for (var iRow = 0; iRow < context.nbRows; iRow++) {
        var x = (infos.leftMargin - infos.cellSide / 2) * scale;
        var y = (infos.cellSide * (iRow + 0.5) + infos.topMargin) * scale;
        rowsLabels[iRow]
          .attr({ x: x, y: y })
          .attr({ "font-size": (infos.cellSide * scale) / 2 });
      }
      for (var iCol = 0; iCol < context.nbCols; iCol++) {
        var x =
          (infos.cellSide * iCol + infos.leftMargin + infos.cellSide / 2) *
          scale;
        var y = (infos.topMargin - infos.cellSide / 2) * scale;
        colsLabels[iCol]
          .attr({ x: x, y: y })
          .attr({ "font-size": (infos.cellSide * scale) / 2 });
      }
    }

    redisplayAllItems();
  };

  var redisplayAllItems = function() {
    if (context.display !== true) return;
    for (var iItem = 0; iItem < context.items.length; iItem++) {
      var item = context.items[iItem];
      redisplayItem(item, false);
      if (item.element !== undefined) item.element.attr(itemAttributes(item));
    }

    for (var iItem = 0; iItem < context.multicell_items.length; iItem++) {
      var item = context.multicell_items[iItem];
      item.redisplay();
    }

    var cellItems = [];

    for (var iItem = context.items.length - 1; iItem >= 0; iItem--) {
      var item = context.items[iItem];
      cellItems.push(item);
    }

    for (var iItem = 0; iItem < context.multicell_items.length; iItem++) {
      var item = context.multicell_items[iItem];
      cellItems.push(item);
    }

    cellItems.sort(function(itemA, itemB) {
      if (itemA.zOrder < itemB.zOrder) {
        return -1;
      }
      if (itemA.zOrder > itemB.zOrder) {
        return 1;
      }
      return 0;
    });
    for (var iItem = 0; iItem < cellItems.length; iItem++) {
      if (cellItems[iItem].element !== undefined)
        cellItems[iItem].element.toFront();
    }
  };

  context.advanceTime = function(epsilon) {
    var items = [];
    for (var id in context.items) {
      items.push(context.items[id]);
    }

    for (var iTime = 0; iTime < epsilon; iTime++) {
      context.time++;
      for (var id in items) {
        if (items[id] !== undefined && items[id].action !== undefined) {
          items[id].action.bind(context)(items[id], context.time);
        }
      }

      var robot = this.getRobot();
      if (
        this.hasOn(robot.row, robot.col, function(item) {
          return item.isProjectile === true;
        })
      ) {
        throw context.strings.messages.failureProjectile;
      }
    }
  };

  context.getRobotId = function() {
    for (var id in context.items) {
      if (context.items[id].isRobot != undefined) {
        return id;
      }
    }
    return undefined;
  };

  context.getRobot = function() {
    return context.items[context.getRobotId()];
  };

  context.getInfo = function(name) {
    return infos[name];
  };

  context.setInfo = function(name, value) {
    infos[name] = value;
  };

  context.hasOn = function(row, col, filter) {
    for (var id in context.items) {
      var item = context.items[id];
      if (item.row == row && item.col == col && filter(item)) {
        return true;
      }
    }
    return false;
  };

  context.setIndexes = function() {
    for (var id in context.items) {
      var item = context.items[id];
      item.index = id;
    }
  };

  context.getItemsOn = function(row, col, filter) {
    if (filter === undefined) {
      filter = function(obj) {
        return true;
      };
    }
    var selected = [];
    for (var id in context.items) {
      var item = context.items[id];
      if (item.row == row && item.col == col && filter(item)) {
        selected.push(item);
      }
    }
    return selected;
  };

  context.isOn = function(filter) {
    var item = context.getRobot();
    return context.hasOn(item.row, item.col, filter);
  };

  context.isInFront = function(filter) {
    var coords = context.coordsInFront();
    return context.hasOn(coords.row, coords.col, filter);
  };

  context.isInGrid = function(row, col) {
    if (row < 0 || col < 0 || row >= context.nbRows || col >= context.nbCols) {
      return false;
    }
    if (context.tiles[row][col] == 0) {
      return false;
    }
    return true;
  };

  context.tryToBeOn = function(row, col) {
    if (!context.isInGrid(row, col)) {
      if (infos.ignoreInvalidMoves) return false;
      throw strings.messages.leavesGrid;
    }

    if (
      context.hasOn(row, col, function(item) {
        return item.isObstacle === true;
      })
    ) {
      if (infos.ignoreInvalidMoves) return false;
      throw strings.messages.obstacle;
    }

    if (
      context.hasOn(row, col, function(item) {
        return item.isProjectile === true;
      })
    ) {
      if (infos.ignoreInvalidMoves) return false;
      throw strings.messages.failureProjectile;
    }
    return true;
  };

  context.coordsInFront = function(dDir, mult) {
    if (dDir === undefined) dDir = 0;
    if (mult === undefined) mult = 1;
    var item = context.getRobot();
    var lookDir = (item.dir + dDir + 4) % 4;
    var delta = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ];
    return {
      row: item.row + delta[lookDir][0] * mult,
      col: item.col + delta[lookDir][1] * mult
    };
  };

  context.isCrossing = function(wireA, wireB) {
    function crossProduct(pointA, pointB, pointC) {
      return (
        (pointB[0] - pointA[0]) * (pointC[1] - pointA[1]) -
        (pointB[1] - pointA[1]) * (pointC[0] - pointA[0])
      );
    }

    function onLine(segment, point) {
      return (
        Math.min(segment[0][0], segment[1][0]) <= point[0] &&
        point[0] <= Math.max(segment[0][0], segment[1][0]) &&
        Math.min(segment[0][1], segment[1][1]) <= point[1] &&
        point[1] <= Math.max(segment[0][1], segment[1][1])
      );
    }

    if (
      crossProduct(wireA[0], wireA[1], wireB[0]) == 0 &&
      crossProduct(wireA[0], wireA[1], wireB[1]) == 0
    ) {
      return (
        onLine(wireA, wireB[0]) ||
        onLine(wireA, wireB[1]) ||
        onLine(wireB, wireA[0]) ||
        onLine(wireB, wireA[1])
      );
    }
    return (
      crossProduct(wireA[0], wireA[1], wireB[0]) *
        crossProduct(wireA[0], wireA[1], wireB[1]) <=
        0 &&
      crossProduct(wireB[0], wireB[1], wireA[0]) *
        crossProduct(wireB[0], wireB[1], wireA[1]) <=
        0
    );
  };

  context.moveRobot = function(newRow, newCol, newDir, callback) {
    var iRobot = context.getRobotId();
    var item = context.items[iRobot];
    if (context.display) item.element.toFront();
    var animate =
      item.row != newRow || item.col != newCol || newDir == item.dir;

    if (item.dir != newDir && (item.row != newRow || item.col != newCol)) {
      if (item.dir !== undefined) item.dir = newDir;
      if (context.display) {
        var attr = itemAttributes(item);
        item.element.attr(attr);
      }
    }

    if (item.dir !== undefined) item.dir = newDir;

    item.row = newRow;
    item.col = newCol;

    context.withdraw(function(obj) {
      return obj.autoWithdraw === true;
    }, false);

    if (context.display) {
      if (animate) {
        attr = itemAttributes(item);
        context.raphaelFactory.animate(
          "animRobot" + iRobot + "_" + Math.random(),
          item.element,
          attr,
          infos.actionDelay
        );
      } else {
        attr = itemAttributes(item);
        if (infos.actionDelay > 0) {
          context.delayFactory.createTimeout(
            "moveRobot" + iRobot + "_" + Math.random(),
            function() {
              item.element.attr(attr);
            },
            infos.actionDelay / 2
          );
        } else {
          item.element.attr(attr);
        }
      }
      $("#nbMoves").html(context.nbMoves);
    }

    context.advanceTime(1);
    context.waitDelay(callback);
  };

  context.moveItem = function(item, newRow, newCol) {
    var animate = item.row != newRow || item.col != newCol;
    var robot = context.getRobot();
    if (context.display) {
      resetItemsZOrder(newRow, newCol);
      resetItemsZOrder(item.row, item.col);
      resetItemsZOrder(robot.row, robot.col);
    }
    item.row = newRow;
    item.col = newCol;

    if (context.display) {
      if (animate) {
        attr = itemAttributes(item);
        context.raphaelFactory.animate(
          "animItem" + "_" + Math.random(),
          item.element,
          attr,
          infos.actionDelay
        );
      } else {
        attr = itemAttributes(item);
        if (infos.actionDelay > 0) {
          context.delayFactory.createTimeout(
            "moveItem" + "_" + Math.random(),
            function() {
              item.element.attr(attr);
            },
            infos.actionDelay / 2
          );
        } else {
          item.element.attr(attr);
        }
      }
    }
  };

  context.moveProjectile = function(item) {
    if (!context.isInGrid(item.row + 1, item.col)) {
      context.destroy(item);
    }

    if (
      context.hasOn(item.row + 1, item.col, function(item) {
        return item.isObstacle === true;
      })
    ) {
      context.destroy(item);
      context.dropObject(
        { type: "dispersion" },
        { row: item.row + 1, col: item.col }
      );
      return;
    }

    if (
      context.hasOn(item.row + 1, item.col, function(item) {
        return item.isRobot === true;
      })
    ) {
      context.destroy(item);
      context.dropObject(
        { type: "dispersion_robot" },
        { row: item.row + 1, col: item.col }
      );
      return;
    }

    context.moveItem(item, item.row + 1, item.col);
    return;
  };

  context.destroy = function(item) {
    context.setIndexes();
    context.items.splice(item.index, 1);

    if (context.display) {
      item.element.remove();
    }
  };

  context.fall = function(item, row, col, callback) {
    var startRow = row;
    var platforms = context.getItemsOn(row + 1, col, function(obj) {
      return obj.isObstacle === true;
    });

    while (context.isInGrid(row + 1, col) && platforms.length == 0) {
      row++;
      platforms = context.getItemsOn(row + 1, col, function(obj) {
        return obj.isObstacle === true;
      });
    }

    if (!context.isInGrid(row + 1, col)) {
      throw context.strings.messages.falls;
    }

    if (row - startRow > infos.maxFallAltitude) {
      throw context.strings.messages.willFallAndCrash;
    }
    context.nbMoves++;
    context.moveRobot(row, col, item.dir, callback);
  };

  context.jump = function(callback) {
    if (!infos.hasGravity) {
      throw "Error: can't jump without gravity";
    }

    var item = context.getRobot();
    if (!context.isInGrid(item.row - 1, item.col)) {
      throw context.strings.messages.jumpOutsideGrid;
    }
    var obstacle = context.getItemsOn(item.row - 2, item.col, function(obj) {
      return obj.isObstacle === true || obj.isProjectile === true;
    });
    if (obstacle.length > 0) {
      throw context.strings.messages.jumpObstacleBlocking;
    }
    var platforms = context.getItemsOn(item.row - 1, item.col, function(obj) {
      return obj.isObstacle === true;
    });
    if (platforms.length == 0) {
      throw context.strings.messages.jumpNoPlatform;
    }
    context.nbMoves++;
    context.moveRobot(item.row - 2, item.col, item.dir, callback);
  };

  context.withdraw = function(filter, errorWhenEmpty) {
    if (filter === undefined) {
      filter = function(obj) {
        return true;
      };
    }
    if (errorWhenEmpty === undefined) {
      errorWhenEmpty = true;
    }
    var item = context.getRobot();
    var withdrawables = context.getItemsOn(item.row, item.col, function(obj) {
      return obj.isWithdrawable === true && filter(obj);
    });
    if (withdrawables.length == 0) {
      if (errorWhenEmpty) throw context.strings.messages.nothingToPickUp;
      return;
    }

    if (infos.bagSize != undefined && context.bag.length == infos.bagSize) {
      throw context.strings.messages.tooManyObjects;
    }

    var withdrawable = withdrawables[0];
    context.setIndexes();
    context.items.splice(withdrawable.index, 1);
    context.bag.push(withdrawable);

    if (context.display) {
      if (infos.actionDelay > 0) {
        context.delayFactory.createTimeout(
          "takeItem_" + Math.random(),
          function() {
            withdrawable.element.remove();
          },
          infos.actionDelay
        );
      } else {
        withdrawable.element.remove();
      }
    }
  };
  
  context.openLocker = function (multipleKeys) {
	
   var item = context.getRobot();
   
   var lockers = context.getItemsOn(item.row, item.col, function(obj) {
      return obj.isLocker === true;
    });

   if (lockers.length == 0) {
      throw context.strings.messages.nothingToOpen;
    }
	var hasAKey = false;
	for (var item in context.bag) {
		if(context.bag[item].isKey === true){
			hasAKey = true;
		}
	}
    if (hasAKey === false) {
      throw window.languageStrings.messages.failureOpenLocker;
    }

    var locker = lockers[0];
    context.setIndexes();
    context.items.splice(locker.index, 1);

    // remove key to have one key to open one locker
    if(multipleKeys === true){
		context.bag.pop();
	}
	
    if (context.display) {
      if (infos.actionDelay > 0) {
        context.delayFactory.createTimeout(
          "takeItem_" + Math.random(),
          function() {
            locker.element.remove();
          },
          infos.actionDelay
        );
      } else {
        locker.element.remove();
      }
    }
  };

  context.checkContainer = function(coords) {
    var containers = context.getItemsOn(coords.row, coords.col, function(obj) {
      return obj.isContainer === true && !obj.isFake;
    });
    if (containers.length != 0) {
      var container = containers[0];
      if (
        container.containerSize == undefined &&
        container.containerFilter == undefined
      ) {
        container.containerSize = 1;
      }
      var filter;
      if (container.containerFilter == undefined)
        filter = function(obj) {
          return obj.isWithdrawable === true;
        };
      else
        filter = function(obj) {
          return obj.isWithdrawable === true && container.containerFilter(obj);
        };

      if (
        container.containerSize != undefined &&
        context.getItemsOn(coords.row, coords.col, filter).length >
          container.containerSize
      ) {
        throw window.languageStrings.messages.failureDropObject;
        return;
      }

      if (container.containerFilter != undefined) {
        if (
          context.hasOn(coords.row, coords.col, function(obj) {
            return (
              obj.isWithdrawable === true && !container.containerFilter(obj)
            );
          })
        ) {
          throw window.languageStrings.messages.failureDropObject;
          return;
        }
      }
    }
  };

  context.drop = function(count, coords, filter) {
    if (count === undefined) {
      count = 1;
    }
    if (filter === undefined) {
      filter = function(obj) {
        return true;
      };
    }
    if (coords == undefined) {
      var item = context.getRobot();
      coords = { row: item.row, col: item.col };
    }

    for (var i = 0; i < count; i++) {
      if (context.bag.length == 0) {
        throw context.strings.messages.emptyBag;
      }

      var object = context.bag.pop();
      object.row = coords.row;
      object.col = coords.col;
      var itemsOn = context.getItemsOn(coords.row, coords.col);
      var maxi = object.zOrder;
      for (var item in itemsOn) {
        if (
          itemsOn[item].isWithdrawable === true &&
          itemsOn[item].zOrder > maxi
        ) {
          maxi = itemsOn[item].zOrder;
        }
      }
      object.zOrder = maxi + 0.000001;
      resetItem(object);
      context.checkContainer(coords);
    }
  };

  context.dropObject = function(object, coords) {
    if (coords == undefined) {
      var item = context.getRobot();
      coords = { row: item.row, col: item.col };
    }

    if (!context.isInGrid(coords.row, coords.col)) {
      throw window.languageStrings.messages.failureDropOutside;
      return;
    }

    object.row = coords.row;
    object.col = coords.col;
    var itemsOn = context.getItemsOn(coords.row, coords.col);
    var maxi = object.zOrder;
    if (maxi === undefined) {
      maxi = 0;
    }
    for (var item in itemsOn) {
      if (
        itemsOn[item].isWithdrawable === true &&
        itemsOn[item].zOrder > maxi
      ) {
        maxi = itemsOn[item].zOrder;
      }
    }
    resetItem(object);
    context.checkContainer(coords);
  };

  context.turnLeft = function(callback) {
    var robot = context.getRobot();
    context.moveRobot(robot.row, robot.col, (robot.dir + 3) % 4, callback);
  };

  context.turnRight = function(callback) {
    var robot = context.getRobot();
    context.moveRobot(robot.row, robot.col, (robot.dir + 1) % 4, callback);
  };

  context.turnAround = function(callback) {
    var robot = context.getRobot();
    context.moveRobot(robot.row, robot.col, (robot.dir + 2) % 4, callback);
  };

  context.forward = function(callback) {
    var robot = context.getRobot();
    var coords = context.coordsInFront();
    if (!context.tryToBeOn(coords.row, coords.col)) {
      context.waitDelay(callback);
    }
    if (infos.hasGravity) {
      context.fall(robot, coords.row, coords.col, callback);
    } else {
      context.nbMoves++;
      context.moveRobot(coords.row, coords.col, robot.dir, callback);
    }
  };

  context.backwards = function(callback) {
    var robot = context.getRobot();
    var coords = context.coordsInFront(2);
    if (!context.tryToBeOn(coords.row, coords.col)) {
      context.waitDelay(callback);
    }
    if (infos.hasGravity) {
      context.fall(robot, coords.row, coords.col, callback);
    } else {
      context.nbMoves++;
      context.moveRobot(coords.row, coords.col, robot.dir, callback);
    }
  };

  context.north = function(callback) {
    var item = context.getRobot();
    if (!context.tryToBeOn(item.row - 1, item.col)) {
      context.waitDelay(callback);
    } else {
      context.nbMoves++;
      context.moveRobot(item.row - 1, item.col, 3, callback);
    }
  };

  context.south = function(callback) {
    var item = context.getRobot();
    if (!context.tryToBeOn(item.row + 1, item.col)) {
      context.waitDelay(callback);
    } else {
      context.nbMoves++;
      context.moveRobot(item.row + 1, item.col, 1, callback);
    }
  };

  context.east = function(callback) {
    var item = context.getRobot();
    if (!context.tryToBeOn(item.row, item.col + 1)) {
      context.waitDelay(callback);
    } else {
      context.nbMoves++;
      context.moveRobot(item.row, item.col + 1, 0, callback);
    }
  };

  context.west = function(callback) {
    var item = context.getRobot();
    if (!context.tryToBeOn(item.row, item.col - 1)) {
      context.waitDelay(callback);
    } else {
      context.nbMoves++;
      context.moveRobot(item.row, item.col - 1, 2, callback);
    }
  };

  context.obstacleInFront = function() {
    return context.isInFront(function(obj) {
      return obj.isObstacle === true;
    });
  };
  
  context.hasDiamond = function() {
    return context.isOn(function(obj) {
      return obj.isDiamond === true;
    });
  };
  
  context.hasAKey = function() {
    return context.isOn(function(obj) {
      return obj.isKey === true;
    });
  };

  context.platformInFront = function() {
    var coords = context.coordsInFront();
    return context.hasOn(coords.row + 1, coords.col, function(obj) {
      return obj.isObstacle === true;
    });
  };

  context.platformAbove = function() {
    var robot = context.getRobot();
    return context.hasOn(robot.row - 1, robot.col, function(obj) {
      return obj.isObstacle === true;
    });
  };

  context.writeNumber = function(row, col, value) {
    var numbers = context.getItemsOn(row, col, function(obj) {
      return obj.isWritable === true;
    });

    if (numbers.length == 0) {
      throw strings.messages.failureWriteHere;
    }

    var number = numbers[0];
    number.value = value;
    if (context.display) {
      redisplayItem(number);
    }
  };

  context.readNumber = function(row, col) {
    var numbers = context.getItemsOn(row, col, function(obj) {
      return obj.value !== undefined;
    });

    if (numbers.length == 0) {
      throw strings.messages.failureReadHere;
    }

    return parseInt(numbers[0].value);
  };

  context.pushObject = function(callback) {
    var robot = context.getRobot();
    var coords = context.coordsInFront();

    var items = context.getItemsOn(coords.row, coords.col, function(obj) {
      return obj.isPushable === true;
    });

    if (items.length == 0) {
      throw strings.messages.failureNothingToPush;
    }

    var coordsAfter = context.coordsInFront(0, 2);

    if (!context.isInGrid(coordsAfter.row, coordsAfter.col))
      throw strings.messages.failureWhilePushing;
    if (
      context.hasOn(coordsAfter.row, coordsAfter.col, function(obj) {
        return obj.isObstacle === true;
      })
    )
      throw strings.messages.failureWhilePushing;
    if (context.tiles[coordsAfter.row][coordsAfter.col] == 0)
      throw strings.messages.failureWhilePushing;

    context.moveItem(items[0], coordsAfter.row, coordsAfter.col);

    context.forward(callback);
  };

  context.shoot = function(lig, col, dir) {
    dir = dir % 8;
    var dirs = [
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1]
    ];

    var lights = context.getItemsOn(lig, col, function(obj) {
      return obj.isLight === true;
    });

    for (var light in lights) {
      lights[light].state = 1;
      lights[light].img = lights[light].states[lights[light].state];
      if (context.display) redisplayItem(lights[light]);
    }

    var x = (infos.cellSide * (col + 0.5) + infos.leftMargin) * scale;
    var y = (infos.cellSide * (lig + 0.5) + infos.topMargin) * scale;

    var taille = infos.cellSide;

    var findRobot = false;

    var plig = lig + dirs[dir][0];
    var pcol = col + dirs[dir][1];
    if (
      !context.isInGrid(plig, pcol) ||
      context.hasOn(plig, pcol, function(obj) {
        return obj.isOpaque === true;
      })
    ) {
      taille /= 2;

      findRobot = context.hasOn(plig, pcol, function(obj) {
        return obj.isRobot === true;
      });
    } else {
      var pdir = dir;
      var mirrors = context.getItemsOn(plig, pcol, function(obj) {
        return obj.isMirror === true;
      });
      if (mirrors.length != 0) {
        pdir = mirrors[0].mirrorFunction(dir);
      }

      findRobot = context.hasOn(plig, pcol, function(obj) {
        return obj.isRobot === true;
      });

      if (context.shoot(plig, pcol, pdir)) {
        findRobot = true;
      }
    }

    var dx = taille * dirs[dir][1] * scale;
    var dy = taille * dirs[dir][0] * scale;

    if (context.display && paper != undefined) {
      var segment = paper.path("M " + x + " " + y + " l " + dx + " " + dy);

      segment.attr({ "stroke-width": 5, stroke: "#ffff93" });

      context.delayFactory.createTimeout(
        "deleteSegement_" + Math.random(),
        function() {
          segment.remove();
        },
        infos.actionDelay * 2
      );
    }

    return findRobot;
  };

  context.connect = function() {
    var robot = context.getRobot();

    var plugs = context.getItemsOn(robot.row, robot.col, function(obj) {
      return obj.plugType !== undefined;
    });

    if (plugs.length == 0) {
      throw strings.messages.failureNoPlug;
    }

    var wires = context.getItemsOn(robot.row, robot.col, function(obj) {
      return obj.isWire === true;
    });

    if (wires.length != 0) {
      throw strings.messages.failureAlreadyWired;
    }

    this.dropObject({ type: "wire", zOrder: 1 });

    if (this.last_connect !== undefined) {
      if (this.last_connect.plugType + plugs[0].plugType != 0)
        throw strings.messages.failureWrongPlugType;

      function segmentLength(segment) {
        return Math.sqrt(
          (segment[0][0] - segment[1][0]) * (segment[0][0] - segment[1][0]) +
            (segment[0][1] - segment[1][1]) * (segment[0][1] - segment[1][1])
        );
      }

      var wire = [
        [this.last_connect.row, this.last_connect.col],
        [plugs[0].row, plugs[0].col]
      ];

      if (segmentLength(wire) > infos.maxWireLength) {
        throw strings.messages.failureWireTooLong;
      }

      var totalLength = segmentLength(wire);
      for (var iWire = 0; iWire < this.wires.length; iWire++) {
        if (this.isCrossing(wire, this.wires[iWire])) {
          throw strings.messages.failureWireCrossing;
        }
        totalLength += segmentLength(this.wires[iWire]);
      }

      if (totalLength > infos.maxTotalLength) {
        throw strings.messages.failureTotalLengthExceeded;
      }

      this.wires.push(wire);

      var x = (this.last_connect.col + 0.5) * infos.cellSide + infos.leftMargin;
      var y = (this.last_connect.row + 0.5) * infos.cellSide + infos.topMargin;
      var dx = (plugs[0].col - this.last_connect.col) * infos.cellSide;
      var dy = (plugs[0].row - this.last_connect.row) * infos.cellSide;

      var wire_item = { zOrder: 2 };
      wire_item.redisplay = function() {
        wire_item.element = paper.path(
          "M " +
            x * scale +
            " " +
            y * scale +
            " l " +
            dx * scale +
            " " +
            dy * scale
        );
        wire_item.element.attr({ "stroke-width": 5, stroke: "#dd0000" });
      };

      this.multicell_items.push(wire_item);
      redisplayAllItems();

      this.last_connect = undefined;
    } else {
      this.last_connect = plugs[0];
    }
  };

  return context;
};



var robotEndFunctionGenerator = {
  allFilteredPicked: function(filter) {
    return function(context, lastTurn) {
      var solved = true;
      for (var row = 0; row < context.nbRows; row++) {
        for (var col = 0; col < context.nbCols; col++) {
          var filtered = context.getItemsOn(row, col, function(obj) {
            return obj.isWithdrawable && filter(obj);
          });
          if (filtered.length != 0) {
            solved = false;
          }
        }
      }

      for (var item in context.bag) {
        if (!filter(context.bag[item])) {
          context.success = false;
          throw window.languageStrings.messages.failureUnfilteredObject;
        }
      }

      if (solved) {
        context.success = true;
        throw window.languageStrings.messages.successPickedAllWithdrawables;
      }
      if (lastTurn) {
        context.success = false;
        throw window.languageStrings.messages.failurePickedAllWithdrawables;
      }
    };
  },
  allNumbersWritten: function(numbers) {
    return function(context, lastTurn) {
      var solved = true;
      for (var iNumber in numbers) {
        var number = numbers[iNumber];
        var items = context.getItemsOn(number.row, number.col, function(obj) {
          return obj.value !== undefined;
        });
        if (items.length == 0) throw "Error: no number here";

        var expected;
        if (typeof number.value === "number") {
          expected = number.value;
        } else {
          expected = number.value.bind(context)();
        }

        if (expected != items[0].value) {
          solved = false;
        }
      }

      if (solved) {
        context.success = true;
        throw window.languageStrings.messages.successNumbersWritten;
      }

      if (lastTurn) {
        context.success = false;
        throw window.languageStrings.messages.failureNumbersWritten;
      }
    };
  }
};

if (window.quickAlgoLibraries) {
  quickAlgoLibraries.register("robot", getContext);
} else {
  if (!window.quickAlgoLibrariesList) {
    window.quickAlgoLibrariesList = [];
  }
  window.quickAlgoLibrariesList.push(["robot", getContext]);
}
