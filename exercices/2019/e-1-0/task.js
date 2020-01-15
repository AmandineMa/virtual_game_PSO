function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    backgroundColor: "#d0f4f7",
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
      to_pnc: {
        num: 8,
        img: "../images/objects/fond_ciel/to_pnc.png",
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
      }
    },

    maxInstructions: 4,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "pickTransportable"]
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
          context.transportedItem.category === "champignon";

        if (hasDiamant) {
          context.success = true;
          throw "Well done, Bozok has got all  mushrooms!";
        }
        context.success = false;
        throw "Bozok did not get all  mushrooms :(";
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
          [1, 1, 1, 1, 1, 5, 1],
          [1, 9, 10, 1, 1, 1, 1],
          [1, 1, 1, 9, 10, 1, 1],
          [1, 1, 4, 1, 1, 8, 1],
          [2, 2, 2, 2, 2, 2, 2],
          [3, 3, 3, 3, 3, 3, 3],
          [3, 3, 3, 3, 3, 3, 3]
        ],
        initItems: [{ row: 4, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
