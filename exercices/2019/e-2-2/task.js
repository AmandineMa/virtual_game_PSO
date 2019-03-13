function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    backgroundColor: "#d0f4f7",
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
      ciel: {
        num: 1,
        img: "../images/fonds/ciel.png",
        side: cellSide,
        isObstacle: false
      },
      terreTop: {
        num: 2,
        img: "../images/fonds/terre_top.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      terre: {
        num: 3,
        img: "../images/fonds/terre.png",
        side: cellSide,
        isObstacle: true
      },

      champignon: {
        num: 4,
        img: "../images/objects/fond_ciel/champigon.png",
        side: cellSide,
        category: "champignon",
        isObstacle: false,
        isTransportable: true
      },
      mouche: {
        num: 5,
        img: "../images/objects/fond_ciel/mouche.gif",
        side: cellSide,
        isObstacle: false
      },

      barriere_g: {
        num: 7,
        img: "../images/objects/fond_ciel/barriere_gauche.png",
        side: cellSide,
        isObstacle: false
      },
      barriere_d: {
        num: 8,
        img: "../images/objects/fond_ciel/barriere_droite.png",
        side: cellSide,
        isObstacle: false
      },

      n_g: {
        num: 9,
        img: "../images/objects/fond_ciel/nuage_gauche.png",
        side: cellSide,
        isObstacle: false
      },
      n_d: {
        num: 10,
        img: "../images/objects/fond_ciel/nuage_droit.png",
        side: cellSide,
        isObstacle: false
      },
      terreLeft: {
        num: 11,
        img: "../images/objects/fond_ciel/terre_left.png",
        side: cellSide,
        category: "platform",
        isObstacle: false
      },
      terreLRight: {
        num: 12,
        img: "../images/objects/fond_ciel/terre_right.png",
        side: cellSide,
        category: "platform",
        isObstacle: false
      },
      cactus: {
        num: 13,
        img: "../images/objects/fond_ciel/cactus.png",
        side: cellSide,
        isObstacle: false
      }
    },

    maxInstructions: 14,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "turnAround", "jump", "pickTransportable"]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: ["controls_repeat"]
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
          context.nbTransportedItems === 3 &&
          context.transportedItem.category === "champignon";

        if (hasDiamant) {
          context.success = true;
          throw "Bravo, Bozok a récupéré les champignons !";
        }
        context.success = false;
        throw "Bozok n'a pas récupéré les champignons";
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
          [1, 5, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 13, 9, 10, 4, 1],
          [2, 2, 2, 2, 2, 12, 1],
          [1, 4, 1, 1, 1, 1, 1],
          [1, 11, 2, 2, 2, 2, 2],
          [1, 1, 1, 1, 1, 1, 4],
          [2, 2, 2, 2, 2, 2, 2]
        ],
        initItems: [{ row: 6, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
