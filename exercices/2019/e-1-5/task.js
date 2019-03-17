function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    backgroundColor: "#80be1f",
    hasGravity: true,
    hideSaveOrLoad: true,
    cellSide: cellSide,
    actionDelay: 200,
    itemTypes: {
      robot: {
        img: "../images/robot/robot_rose.png",
        side: 70,
        nbStates: 9,
        isObstacle: true,
        offsetX: 0,
        category: "robot",
        team: 0,
        zOrder: 3
      },
      vert: {
        num: 1,
        img: "../images/fonds/vert.png",
        side: cellSide,
        isObstacle: false
      },
      caise: {
        num: 2,
        img: "../images/objects/fond_vert/caise.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      caiseCroix: {
        num: 3,
        img: "../images/objects/fond_vert/caise_croix.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      mer: {
        num: 4,
        img: "../images/objects/fond_vert/mer.png",
        side: cellSide,
        isObstacle: true
      },
      diamantOrange: {
        num: 5,
        img: "../images/objects/fond_vert/diamant_orange.png",
        side: cellSide,
        category: "diamant",
        isObstacle: false,
        isTransportable: true
      },

      caiseJaune: {
        num: 6,
        img: "../images/objects/fond_vert/caisse_jaune.png",
        side: cellSide,
        isObstacle: true
      },

      mauve: {
        num: 7,
        img: "../images/fonds/mauve.png",
        side: cellSide,
        isObstacle: true
      },
      mauveTop: {
        num: 8,
        img: "../images/fonds/mauve_top.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },

      vertObstacle: {
        num: 9,
        img: "../images/fonds/vert.png",
        side: cellSide,
        isObstacle: true
      },

      merPleine: {
        num: 10,
        img: "../images/fonds/mer.png",
        side: cellSide,
        isObstacle: true
      },

      diamantJaune: {
        num: 11,
        img: "../images/objects/fond_vert/diamant_jaune.png",
        side: cellSide,
        category: "diamant",
        isObstacle: false,
        isTransportable: true
      },
      mauveGauche: {
        num: 12,
        img: "../images/objects/fond_vert/mauve_top_gauche.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      mauveDroite: {
        num: 13,
        img: "../images/objects/fond_vert/mauve_top_droite.png",
        category: "platform",
        side: cellSide,
        isObstacle: true
      }
    },

    maxInstructions: 11,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "jump", "pickTransportable"]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: []
      }
    },
    ignoreInvalidMoves: false,
    groupByCategory: false,
    includedAll: false,
    includedCategories: [],
    includedBlocks: [],
    checkEndEveryTurn: true,
    checkEndCondition: function(context, lastTurn) {
      if (lastTurn) {
        var hasDiamant =
          context.nbTransportedItems === 1 &&
          context.transportedItem.category === "diamant";

        if (hasDiamant) {
          context.success = true;
          throw "Bravo, Bozok a récupéré le diamant !";
        }
        context.success = false;
        throw "Bozok n'a pas récupéré le diamant";
      }
    },
    computeGrade: function(context, message) {
      var rate = 0;
      if (context.success) {
        rate = 1;
      }
      return {
        successRate: rate,
        message: message
      };
    }
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 2, 2, 1, 1],
          [1, 1, 1, 1, 1, 5, 1],
          [1, 2, 2, 1, 13, 8, 8],
          [1, 1, 1, 1, 1, 7, 7],
          [8, 8, 12, 1, 1, 7, 7],
          [7, 7, 1, 1, 1, 7, 7],
          [7, 7, 4, 4, 4, 7, 7]
        ],
        initItems: [{ row: 5, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
